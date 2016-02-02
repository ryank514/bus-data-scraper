fs = require('fs')
fs.readFile('log.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //JSON.parse(data)
  var output =('['+data.replace(/\]\[/g, "],[")+']');
var first = output.indexOf('<')
console.log('---------------------------')
console.log(output.substring(first,first+10000));
console.log(first,output.length);
console.log(output.substring('!DOCTYPE html','/html'));


});
