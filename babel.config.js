module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ],
};

/**
 * - babel.config.json was renamed to babel.config-old.json for the sake of this file and to work with jest
 * 
 * * What is Jest?
 * - Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase
 * - It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly
 * 
 */