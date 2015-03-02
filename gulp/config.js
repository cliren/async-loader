var path = require('path');
var dest = './dist',
  src = './src',
  karmaPath = path.join(__dirname, '../karma.conf.js');

console.log(__dirname);
module.exports = {
  src: src,
  dest: dest,
  karma: karmaPath,
  js: src + "/**/*.js"
};
