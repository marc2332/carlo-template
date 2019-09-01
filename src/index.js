const carlo = require('carlo');
const path = require('path');

const readFile = require(path.join(__dirname,'node','readFile.js')).readFile;

(async () => {
  const app = await carlo.launch();
  app.on('exit', () => process.exit());
  app.serveFolder(__dirname);
  await app.exposeFunction('readFile',readFile) //Exposing the readFile function
  await app.exposeFunction('env', _ => process.env);
  await app.load('index.html');
})();
