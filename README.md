# webpack-template
Template repository for HTML and JS projects utilizing npm and Webpack

Run the following to initialize all necessary HTML, CSS, and JS libraries with webpack, and compile all the files together
```bash
npm init -y
npm install -D webpack webpack-cli html-webpack-plugin style-loader css-loader html-loader
npx webpack
```

To push the dist output to GitHub pages, make sure all the work is committed, and run the following commands:
```bash
git branch gh-pages
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```
The first command is for the first deployment only, but all other commands need to be run every deployment