const fs = require('fs');
const configFile = 'bundle_config.json';

function writeFiles(files) {
  files = Array.isArray(files) ? files : [files];
  let firstTime = true;
  files.forEach((file, idx, files) => {
    readFileWriteBundle(file, idx, files, firstTime);
    firstTime = false;
  });
}

function bundle() {
  fs.stat(configFile, (err, stats) => {
    errorHandler(err, 'Please supply a bundle_config.json file in bundlerJS/ directory');

    fs.readFile(configFile, 'utf8', (err, file) => {
      errorHandler(err, 'Cannot read bundle_config.json');
      const config = JSON.parse(file);
      writeFiles(config.files);
    });
  });
};

function readFileWriteBundle(file, idx, files, firstTime) {
  fs.readFile(file, 'utf8', function(err, fileContent){
    if(err) errorHandler(err);
    fileContent = `/* ${file} */\n${fileContent};\n`; // semicolon and newline after each file
    firstTime && fs.writeFile('bundle.js', fileContent,
                              'utf8', errorHandler);
    !firstTime && fs.appendFile('bundle.js', fileContent,
                                'utf8', errorHandler);
    (idx === (files.length - 1)) && console.log(`${files.length} files bundled.`);
  });
}

function errorHandler(e, msg) {
  if (e) throw Error(`${msg}\n${e}`);
}

bundle();
module.exports = bundle;