<h1 align="center">Gridonic Open Source Projects</h1>
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>

## Demo
https://gridonic.github.io

## Development
Clone the repo and start the local dev server http://localhost:3000.
```sh
git clone git@github.com:gridonic/gridonic.github.io.git
cd gridonic.github.io
npm install
npm run dev
```

## Preview
The vite preview command will boot up static web server which serves the files from dist at http://localhost:4173.
```sh
npm run build
npm run preview
```

## Deployment
Deploy a new version to github pages
```sh
# create and push a new tag
git tag x.x.x
git push --tags
```

This script will merge the `main` branch into the `gh-pages` branch.
```sh
# run the deployment script
sh deploy.sh
```
