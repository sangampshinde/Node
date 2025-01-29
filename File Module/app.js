const fs = require('fs');

// const files = fs.readdirSync('./')
// console.log(files); //[ 'app.js' ]

fs.readdir('./',(error,files)=>{
    if(error)console.log('error:',error);
    console.log(files);
});

// PS C:\Users\sanga\OneDrive\Desktop\node\File Module> node app.js
// [ 'app.js' ]
