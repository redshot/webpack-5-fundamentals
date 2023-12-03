import "./main.scss";

const foo = (name) => {
  console.log(`Hello ${name}`);
}

foo('Adrian');

console.log("hello from webpack dev server");

/**
 * * How to start the app?
 * - Execute "npm run build" in the terminal
 * 
 * The "--open" in "webpack-dev-server --open" will open a browser window for us
 */