# personal-site
Personal portfolio website built with React, Node.js w/ Express, and Webpack.
Additional tools used include ESLint, Babel, and Nodemon.

# Development Mode
There are 2 servers running in development mode. The front-end is served by the webpack dev server which allows for live reloading. The back-end Express server is served using Nodemon, which automatically restarts the server when edits are made.

# Production Mode
There is only one server. All client side files are bundled into static files using webpack, and it is served by the Express backend.

# Commands
Install dependencies:
`npm install`

Start development server:
`npm run dev`

Build for production:
`npm run build`

Start production server:
`npm start`

# Tools and Their Uses
## Babel
Babel allows us to write code in the latest version of JavaScript, e.g. ES6. It compiles newer JavaScript into older JavaScript so that it will be compatible with many environments. It also compiles JSX to JS. The .babelrc file specifies configuration. Preset @babel/preset-env allows for newer JS to be compiled down to ES5. Preset @babel/preset-react allows for conversion of JSX to JS.

## ESLint
Linting tool for JavaScript. The .eslintrc.json file specifies config. I am using Airbnb's JavaScript style. "env" includes both "browser" and "node", since this project includes both client and server JavaScript code.

## Webpack
Webpack is used to bundle files, as well as serve the front-end development server. 

## Nodemon
Watches server files and automatically restarts the server when any of the files being watched are changed. Development only.

## Concurrently
Allows for running multiple commands concurrently. Used to run the front-end webpack dev server and back-end Node server concurrently in the development environment.

---
Boilerplate taken from [this guide](https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708).