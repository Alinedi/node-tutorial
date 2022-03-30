var path = require('path');
console.log(path.sep);

const filePath = path.join('/content','/sub-folder','filename.txt');

console.log(filePath);

const basepath = path.basename(filePath);

console.log(basepath);

const absolutePath = path.resolve(__dirname,filePath);

console.log(absolutePath);
