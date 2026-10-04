# Tsung-Yuan Lin Portfolio

正式網站：[portfolio.tsungyuan.dev](https://portfolio.tsungyuan.dev)。以 Next.js 靜態輸出部署到 Azure VM，由 Nginx 與 Cloudflare Tunnel 提供服務。流量統計使用同一 VM 上獨立的 Umami。

```sh
npm ci
npm run dev       # 開發
npm test          # 建置與靜態輸出檢查
npm start         # 本機預覽 out/
npm run deploy:vm # 建置、檢查並部署到 VM
```

需要 Node.js >=22.13、Python 3。部署命令讀取本機私密 `.deploy/vm.json` 設定，包含 `host`、`root`、`key`、`knownHosts` 欄位；需另行提供 SSH 金鑰及已驗證主機指紋。主機位址、部署設定與維運手冊不隨此公開儲存庫發布。

## Legacy Sites tooling

專案保留原本的 vinext / Sites 工具與範例，作為歷史設定；目前正式網域不使用 Sites 或 Vercel。
