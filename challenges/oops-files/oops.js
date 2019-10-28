const folder = './challenges/oops-files/data/';
const fs = require('fs').promises;

function oopsFile(folder) {
  return fs.readdir(folder)
    .then(fileNames => {
      fileNames.forEach(file => {
        return fs.readFile(`${folder}${file}`)
          .then(contents => {
            let content = contents.toString();
            return fs.stat(`${folder}${file}`)
              .then(stat => {
                return fs.rename(`${folder}${file}`, `${folder}${content}-${file.slice(0, file.length - 4)}-${stat.mtime.toISOString()}`);
              });
          });
      });
    });
}

oopsFile(folder);


