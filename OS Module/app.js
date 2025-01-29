const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();


console.log("freemem:",freeMemory);
console.log("totalmem",totalMemory);

/**
 PS C:\Users\sanga\OneDrive\Desktop\node\OS Module> node app.js
freemem: 430542848
totalmem 6323187712
 */


