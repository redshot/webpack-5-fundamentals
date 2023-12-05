import _ from 'lodash';
import '../main.scss';

const foo = (name) => {
  console.log(`Hello ${name}`);
}

foo('Adrian');

console.log('hello from webpack dev server');
console.log(_.join(['Index', 'module', 'loaded!'], ' '));

/**
 * * How to start the app?
 * - Execute "npm run build" or "npm run dev" in the terminal
 * 
 * - The "--open" in "webpack-dev-server --open" will open a browser window for us
 * - .join is a method from lodash. This line console.log(_.join(['Index', 'module', 'loaded!'], ' ')); basically
 *   means that it will join the array of 3 strings and separate them with a space
 */