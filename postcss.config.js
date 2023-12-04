if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: {
      autoprefixer: {},
      cssnano: {}, // compiled css will not be minified if this line is disabled
      'rucksack-css': {},
    },
  };
} else {
  module.exports = {
    plugins: {
      autoprefixer: {},
      'rucksack-css': {},
    },
  };
}