var http = require("http");
function download(url, callback) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}
var fs = require("fs");

var url = "http://ualbany.alpinesystemsinc.com/filterGpsPackets.aspx"

download(url, function(data) {
  if (data) {
    fs.writeFile('local_log.JSON', data, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });    // data
  }
  else console.log("error");
});
