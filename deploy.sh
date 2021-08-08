# `deploy.sh`

# 当发生错误时中止脚本
set -e

git init
git add ./
git commit -m 'deploy'

git remote add origin https://github.com/drlsxs/xskjcd-com.git
# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f origin master
git push origin master

cd -
