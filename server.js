var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.url === '/time' || req.url === '/') {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.write(new Date().toString());
    res.end();
  }

  var reqPath = req.url.split('/');
  if (reqPath[1] === 'greet' && reqPath[2]) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.write('Hello ' + reqPath[2]);
  res.end();
  }
});

server.listen(3000, function() {
  console.log("Server is running");
});
