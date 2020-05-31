rm -rf public
npx hexo g
cp deploy_files/* public
npx hexo d

