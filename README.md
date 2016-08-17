[![build status](https://secure.travis-ci.org/austinsc/react-gooey.svg)](http://travis-ci.org/austinsc/react-gooey) [![bitHound Score](https://www.bithound.io/github/austinsc/react-gooey/badges/score.svg)](https://www.bithound.io/github/austinsc/react-gooey) [![Dependency Status](https://david-dm.org/austinsc/react-gooey.svg)](https://david-dm.org/austinsc/react-gooey)

# react-gooey - A React UI library for the masses

### Common Tasks

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

### Testing

The test setup is based on Karma/Mocha/Chai/Phantom. Code coverage report is generated through istanbul/isparta to `build/`.

* Running tests once - **npm test**
* Running tests continuously - **npm run test:tdd**
* Running individual tests - **npm test -- <pattern>** - Works with `test:tdd` too.
* Linting - **npm run test:lint** - Runs ESLint.

### Documentation Site

[http://gooey.pwnt.co](http://gooey.pwnt.co)

* Building - **npm run gh-pages** - Builds the documentation into `./gh-pages` directory.
* Deploying - **npm run deploy-gh-pages** - Deploys the contents of `./gh-pages` to the `gh-pages` branch. GitHub will pick this up automatically. Your site will be available through *austinsc.github.io/<project name>`.
* Generating stats - **npm run stats** - Generates stats that can be passed to [webpack analyse tool](https://webpack.github.io/analyse/). This is useful for investigating what the build consists of.

## License

*react-gooey* is available under MIT. See LICENSE for more details.

