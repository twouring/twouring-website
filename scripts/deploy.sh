#!/usr/bin/env bash
# 建置並部署官網到 GCP（twouring-core）。用法：bash scripts/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/.."
export PATH=/workspace/local/gcp/google-cloud-sdk/bin:$PATH CLOUDSDK_CONFIG=/workspace/local/gcp/config
unset CLOUDSDK_AUTH_ACCESS_TOKEN
TS=$(TZ=Asia/Taipei date +%Y%m%d%H%M)
npm run build >/workspace/local/_scratch/site-build.log 2>&1 || { tail -20 /workspace/local/_scratch/site-build.log; exit 1; }
tar -czf /workspace/local/_scratch/site-dist.tgz -C dist .
gcloud compute scp /workspace/local/_scratch/site-dist.tgz twouring-core:/tmp/site-dist.tgz --zone asia-east1-b --project twouring-web --tunnel-through-iap >/dev/null 2>&1
gcloud compute ssh twouring-core --zone asia-east1-b --project twouring-web --tunnel-through-iap --command "set -e; cd /opt/twouring/sites; sudo rm -rf twouring-com.new; sudo mkdir twouring-com.new; sudo tar -xzf /tmp/site-dist.tgz -C twouring-com.new; sudo mv twouring-com twouring-com.bak-$TS; sudo mv twouring-com.new twouring-com; ls -dt twouring-com.bak-* | tail -n +6 | xargs -r sudo rm -rf; cd /opt/twouring && sudo docker compose exec -T caddy caddy reload --config /etc/caddy/Caddyfile >/dev/null 2>&1; echo DEPLOYED $TS"
