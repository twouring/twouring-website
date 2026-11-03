## 部署（GCP，2026-10-23 起；Zeabur 已停用）
- GCP 專案 `twouring-web`，VM `twouring-core`（asia-east1-b，IP 35.229.238.163），Caddy 容器 `core-caddy-1`。
- 網站檔案：`/opt/twouring/sites/twouring-com`；Caddy 設定：`/opt/twouring/caddy.d/twouring-com.caddy`（轉址寫在這裡，不讀 `_redirects`）。
- 流程：`npm run build` → 打包 `dist` → `gcloud compute scp … --tunnel-through-iap` → 備份舊目錄為 `twouring-com.bak-<時間>` → 換目錄 → `sudo docker compose exec -T caddy caddy reload --config /etc/caddy/Caddyfile`。
- gcloud 用英文路徑 `/workspace/local/gcp/google-cloud-sdk/bin`（中文路徑會讓 IAP ProxyCommand 失敗），並先 `unset CLOUDSDK_AUTH_ACCESS_TOKEN`。
