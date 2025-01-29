 const path = require('path');

 const file = path.parse(__filename);

 console.log(file);

/*

{
  root: 'C:\\',
  dir: 'C:\\Users\\sanga\\OneDrive\\Desktop\\node\\Path Module',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
 */