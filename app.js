var http = require('http');
var combo = require('./modules/combo');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(combo.balance() + combo.money());
  res.end();
}).listen(3000);

console.log('Listening on port 3000');
