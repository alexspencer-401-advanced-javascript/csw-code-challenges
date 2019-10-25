const folder = './challenges/oops-files/data/';
const fs = require('fs');

let fileNameArray = [];
// let fileContentArray = [];
const path = folder;

fs.readdir(folder, function(err, fileNames) {
  fileNames.forEach(file => {
    return fileNameArray.push(file);
  });
  fileNameArray.forEach(name => {
    fs.readFile(`${path}${name}`, { encoding: 'utf-8' }, function(err, fileContents) {
      let content = fileContents;
      console.log(content);
      // fileContentArray.push(fileContents.toString());
    });
  });
});


// fs.readdir(path, function (err, items) {
//   console.log(items);