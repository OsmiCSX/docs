#!/usr/bin/env sh

# abort on errors
set -e

# build npm
npm run build

# add commit
git add dist

echo "Commit message for gh-pages commit?"
read pagecommit

git commit -m "deploy: $pagecommit"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git subtree push --prefix dist origin gh-pages

git add -A

echo "Commit message for master commit?"
read mastercommit
git commit -m "update: $mastercommit"

# push master 
git push origin master