#!/usr/bin/env python3
"""Local preview with the same extensionless routes as production Nginx."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

class StaticHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        translated = super().translate_path(path)
        if not Path(translated).exists() and Path(translated + '.html').is_file():
            return translated + '.html'
        return translated

parser = argparse.ArgumentParser()
parser.add_argument('--port', type=int, default=3000)
args = parser.parse_args()
directory = Path(__file__).resolve().parents[1] / 'out'
if not (directory / 'index.html').is_file():
    raise SystemExit('Run npm run build first.')
server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(StaticHandler, directory=str(directory)))
print(f'Preview: http://127.0.0.1:{args.port}', flush=True)
server.serve_forever()
