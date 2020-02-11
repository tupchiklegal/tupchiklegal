
nuxt generate

cd dist

echo 'tupchiklegal.com' > CNAME

git init 

git add -A

git commit -m 'deploy'

git push -f git@github.com:tupchiklegal/tupchiklegal.git master:gh-pages