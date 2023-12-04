const path = require('path'); // path comes from node and not from webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {}
        },
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css' // [name] is like a placeholder or we can hardcode the file as main.css or we can use any file name we want
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

/**
 * - The command to run this app is "npm run dev" or "npm run build" or depending on the config in package.json
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
 * - 
 */
