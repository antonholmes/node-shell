
const fs = require('fs')
let pwd = require('./pwd.js')
// let args = process.argv.splice(2,process.argv.length-1)
module.exports = function(file){
  // console.log('this is: ' + process.stdout.write(process.cwd()))
  console.log('this is too: ' + process.cwd() + '/' + file)
  // console.log('this one is: ' + pwd() + '/' + file)
  fs.readFile((process.cwd())+ '/' + file, 'utf8', (err, data) => {
    console.log({data});
    if (err) throw 'whatever';
    console.log(data);
    // process.stdout.write(files.join('\n'))
    // process.stdout.write('\nprompt > ');
    // args.forEach(line => function(line){
  //   fs.readFile('file')
    });
  };
  // fs.readdir('./', 'utf8', (err, files) => {
  //   if (err) {
  //     throw err
  //   } else {


