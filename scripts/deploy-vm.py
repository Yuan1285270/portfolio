#!/usr/bin/env python3
"""Build and atomically publish the static portfolio through pinned SSH."""
import argparse
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import shlex
import shutil
import subprocess
import tarfile
import tempfile

ROOT = Path(__file__).resolve().parents[1]
SITE_ID = 'ab02fb71-9235-490f-8034-51024cfc7c2f'
parser = argparse.ArgumentParser()
parser.add_argument('--skip-build', action='store_true')
parser.add_argument('--config', default=str(ROOT / '.deploy/vm.json'))
parser.add_argument('--key')
parser.add_argument('--known-hosts')
args = parser.parse_args()
config_path = Path(args.config).expanduser()
if not config_path.is_file():
    raise SystemExit('Provide a private JSON configuration with host, root, key, and knownHosts fields via --config.')
config = json.loads(config_path.read_text())
key = Path(args.key or config['key']).expanduser()
pin = Path(args.known_hosts or config['knownHosts']).expanduser()
if not key.is_file() or not pin.is_file():
    raise SystemExit('Provide the existing SSH key and verified host pin via --key and --known-hosts.')
if key.stat().st_mode & 0o077:
    raise SystemExit('SSH private key permissions must be 0600.')
ssh = ['ssh', '-i', str(key), '-o', 'IdentitiesOnly=yes', '-o', 'BatchMode=yes', '-o', 'StrictHostKeyChecking=yes', '-o', f'UserKnownHostsFile={pin}', '-o', 'GlobalKnownHostsFile=none', '-o', 'HostKeyAlgorithms=ssh-ed25519', '-o', 'ConnectTimeout=10', config['host']]
def remote(command, **kwargs):
    return subprocess.run(ssh + [command], check=True, **kwargs)

if not args.skip_build:
    subprocess.run(['npm', 'run', 'build'], cwd=ROOT, check=True, env={**os.environ, 'NEXT_PUBLIC_UMAMI_WEBSITE_ID': SITE_ID})
subprocess.run(['node', '--test', 'tests/static-export.test.mjs'], cwd=ROOT, check=True)
git = os.environ.get('GIT_BIN') or shutil.which('git')
fallback = Path.home() / '.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback/git'
if fallback.is_file() and 'GIT_BIN' not in os.environ:
    git = str(fallback)
tracked = set(subprocess.check_output([git, 'ls-files', '-z', '--', 'public'], cwd=ROOT).decode().split('\0'))
release = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ')
base = config['root'].rstrip('/')
destination = f'{base}/releases/{release}'
with tempfile.TemporaryDirectory(prefix='portfolio-deploy-') as temporary:
    archive_path = Path(temporary) / 'site.tar.gz'
    with tarfile.open(archive_path, 'w:gz') as archive:
        for path in sorted((ROOT / 'out').rglob('*')):
            if not path.is_file(): continue
            relative = path.relative_to(ROOT / 'out')
            public_path = ROOT / 'public' / relative
            if public_path.exists() and f'public/{relative}' not in tracked:
                continue  # Never publish unrelated, untracked personal files.
            archive.add(path, arcname=str(relative))
    remote('mkdir -p ' + shlex.quote(destination))
    with archive_path.open('rb') as archive:
        remote('tar -xzf - -C ' + shlex.quote(destination), stdin=archive)
    dest, current, pending = map(shlex.quote, [destination, base + '/current', base + '/current.next'])
    remote(f'test -s {dest}/index.html && test -s {dest}/exchange.html && chmod -R a+rX {dest} && ln -s {dest} {pending} && mv -Tf {pending} {current}')
print('Published release:', release)
print('Previous releases remain available for rollback under', base + '/releases')
