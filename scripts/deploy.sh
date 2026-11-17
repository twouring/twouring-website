#!/usr/bin/env bash
# 部署官網：push main → GitHub Actions（twouring/twouring-website）建置、部署並驗證。
# 用法：先 commit，再 bash scripts/deploy.sh。等 CI 完成並確認正式站 version.txt = HEAD。
# 不要再直接 scp 到 VM：/opt/twouring/sites/twouring-com 是指向 twouring-releases/current 的 symlink。
set -euo pipefail
cd "$(dirname "$0")/.."
REPO=twouring/twouring-website
[ -z "$(git status --porcelain --untracked-files=no)" ] || { echo "有未 commit 的變更，先 commit"; exit 1; }
git push origin HEAD:main
SHA=$(git rev-parse HEAD)
for i in $(seq 1 20); do
  id=$(gh run list -R $REPO --commit "$SHA" -L1 --json databaseId --jq '.[0].databaseId' 2>/dev/null || true)
  [ -n "$id" ] && break; sleep 3
done
[ -n "${id:-}" ] || { echo "找不到 $SHA 的 Actions run"; exit 1; }
gh run watch "$id" -R $REPO --exit-status >/dev/null || { gh run view "$id" -R $REPO --log-failed | tail -30; exit 1; }
live=$(curl -fsS "https://www.twouring.com/version.txt?v=$SHA")
[ "$live" = "$SHA" ] || { echo "正式站版本 $live ≠ $SHA"; exit 1; }
echo "DEPLOYED $SHA"
