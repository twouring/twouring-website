# GitHub Actions production deployment

`main` 每次推送皆由 `.github/workflows/deploy.yml` 自動執行：

1. `npm ci`、`npm run check`、`npm test`、`npm run build`
2. 上傳 `dist/` artifact
3. 透過 SSH 將完整靜態檔上傳為新 release
4. 原子切換 `/opt/twouring/sites/twouring-releases/current` symlink
5. 以正式 HTTPS 網址驗證首頁可讀

## GitHub Environment

在 `kkshyu/twouring-website` 建立 `production` environment，設定：

| 類型 | 名稱 | 值 |
| --- | --- | --- |
| Secret | `DEPLOY_SSH_KEY` | 專供 GitHub Actions 的 ed25519 私鑰全文 |
| Variable | `DEPLOY_HOST` | GCP 主機公開 IP（目前 `35.229.238.163`） |
| Variable | `DEPLOY_USER` | 專用部署帳號 `twouring-deploy` |
| Variable | `DEPLOY_PATH` | `/opt/twouring/sites/twouring-releases` |

此 environment 不設人工核准，確保合併至 `main` 後可自動上線。

## 主機一次性設定

以具 sudo 權限的管理帳號在 GCP VM 執行。不要重用管理者的 SSH 私鑰；建立僅能寫入網站目錄的帳號與獨立 deploy key。

```bash
sudo useradd --create-home --shell /bin/bash twouring-deploy
sudo install -d -m 755 -o twouring-deploy -g twouring-deploy /opt/twouring/sites/twouring-releases/releases
sudo -u twouring-deploy mkdir -p /opt/twouring/sites/twouring-releases/releases/initial
sudo -u twouring-deploy ln -sfn releases/initial /opt/twouring/sites/twouring-releases/current
sudo install -d -m 700 -o twouring-deploy -g twouring-deploy /home/twouring-deploy/.ssh
sudo install -m 600 -o twouring-deploy -g twouring-deploy /dev/null /home/twouring-deploy/.ssh/authorized_keys
```

將 GitHub Actions deploy key 的**公鑰**加到 `/home/twouring-deploy/.ssh/authorized_keys`。Caddy 既有站台根目錄 `/srv/sites/twouring-com` 會對應到 `twouring-releases/current`，不需重啟服務。
