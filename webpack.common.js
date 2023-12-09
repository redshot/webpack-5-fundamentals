const path = require('path'); // path comes from node and not from webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: { import: './src/js/index.js', dependOn: 'shared' }, // both of these depend on the shared file which is the lodash library
    sum: { import: './src/js/sum.js', dependOn: 'shared' },
    shared: 'lodash',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

/**
 * * This file contains both the dev and production configs
 * * Commands: "npm run dev", "npm run build", "npm run test"
 * - Set module.exports and output property to an object
 * - The property "entry:" will tell webpack that everything it will bundle will come from "./src/index.js"
 *  - In the future, "index.js" will contain CSS files and additional JavasSript files
 *  - The property "entry:" can contain multiple entries via code splitting
 * - The property "output:{}" will tell webpack to bundle everything from the "entry" property to a file called "bundle.js" in the
 *  "dist" folder
 * - devServer tells webpack where to serve our files from
 *
 * * Babel loader rule
 * - test: /\.m?js$: This regex matches any JavaScript file (including .mjs).
 * - use: { loader: "babel-loader", ... }: This tells webpack to use Babel loader to transpile JavaScript files
 * - exclude: /node_modules/: This excludes files from the node_modules directory.
 * - options: { presets: ['@babel/preset-env'] }: This configures Babel to use the @babel/preset-env preset,
 *   which transpiles code to be compatible with older browsers.
 *
 * - test: /\.scss$/i - a regular expression that tells webpack to run css-loader, postcss-loader and sass-loader on .scss file
 *   extensions. The order of the these loaders is important.
 *
 * * Polyfill
 * - @babel-polyfill is gonna handle features that are not available in older browsers.
 * - Polyfills can add to the size(Parsed size) of your app bundle
 * - A lot of newer browsers support new features so if we know the browsers that we are targeting,
 *   it will be nice to set the features that we only need base our target browsers
 * - Without any configuration, preset-env is gonna act like the preset for es2015, 2016, 2017 and 2018 but with specification
 *   so we can target environments to customize the build(app bundle)
 * - targets:{} and useBuiltIns: 'entry' config is gonna control the polyfill that will be needed from core-js
 * - core-js is a collection of polyfills. A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern
 *   functionality on older browsers that do not natively support it
 *  - As of Babel 7.4.0, @babel-polyfill has been deprecated in favor of directly including core-js/stable
 *  (to polyfill ECMAScript features) and regenerator-runtime/runtime
 *
 * * PostCSS(autoprefixer) will automatically add vendor prefixes like ::-moz-placeholder{}, ::-ms-input-placeholder{} and webkit
 *  - postcss.config.js is a configuration file for postcss
 * - cssnano is a minifier and will compress our size. As a result, it will reduce file size
 * - Rucksack CSS is a modular post-processing library for CSS that brings a collection of helpful features. It's built on PostCSS.
 *  - One of its features is responsive typography. For example: .foo {font-size: responsive;}
 *    - It will automatically adjust the font-size based on the screen size.
 *
 * * What is .browserslistrc?
 * - This tells autoprefixer which browsers to target. For example: "last 2 years > 1% not dead" means
 *   Target any browsers for the last 2 years. Greater than 1% in use and are not dead
 *
 * * Code splitting
 * - Code splitting is a feature that allows you to split your code into various bundles which can then be loaded on demand or
 * in parallel. It can be used to achieve smaller bundles and control resource load prioritization
 *
 * * What is ESlint?
 * - ESLint is a pluggable JavaScript linting utility that helps you find and fix problems in your JavaScript code.
 * - ESLint can be used to check for a variety of problems, including: Syntax errors, Code style issues, Potential bugs
 *   and Best practices
 * - ESLint and prettier work well together
 *
 * * What is husky and lint staged?
 * - Husky provides a simple way to manage and run Git hooks within your project.
 *   For example: pre-commit: This hook runs before you commit any changes to your Git repository.
 * - Lint-staged helps developers run linters and other tasks only on staged files in their Git repository
 *  * What does ""lint-staged": {"./src/js/*.js": ["prettier --write","eslint src/js/*.js --fix-dry-run"]}" mean in package.json?
 *    - The line means lint-staged will look at every single file in that directory that ends with .js then run pretteir and eslint
 *      before a git commit. The "--fix-dry-run" will output any error/s.
 *  - We will be able to see how Lint-staged works if we execute a git commit in the command line
 */
