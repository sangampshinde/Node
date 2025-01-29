// console.log(module);
/*
output:
Module {
  id: '.',
  path: 'C:\\Users\\sanga\\OneDrive\\Desktop\\node\\module',
  exports: {},     
  filename: 'C:\\Users\\sanga\\OneDrive\\Desktop\\node\\module\\app.js',    
  loaded: false,   
  children: [],    
  paths: [
    'C:\\Users\\sanga\\OneDrive\\Desktop\\node\\module\\node_modules',      
    'C:\\Users\\sanga\\OneDrive\\Desktop\\node\\node_modules',
    'C:\\Users\\sanga\\OneDrive\\Desktop\\node_modules', 
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
 */

// ==========================================

// importing modeules
// var logger = require("./logger.js")

// import module with const is best practise
// const logger = require("./logger.js")

const log = require("./logger.js")

//console.log(logger);  //{ log: [Function: log] }
// logger.log("Hi message from app");
/*
PS C:\Users\sanga\OneDrive\Desktop\node\module> node app.js
Hi message from app
 */

// with new export logger is function now
log("Hi!")//PS C:\Users\sanga\OneDrive\Desktop\node\module> node app.js
          //Hi!

// =====================


