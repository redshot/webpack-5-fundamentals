const path = require('path'); // path comes from node and not from webpack

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

/**
 * - The command to run this app is "npm run build"
 * - Set module.exports and output property to an object
 * - The property "entry:" will tell webpack that everything it will bundle will come from "./src/index.js"
 *  - In the future, "index.js" will contain CSS files and additional JavasSript files
 *  - The property "entry:" can contain multiple entries via code splitting
 * - The property "output:{}" will tell webpack to bundle everything from the "entry" property to a file called "bundle.js" in the
 *  "dist" folder
 * - 
 * 
 */