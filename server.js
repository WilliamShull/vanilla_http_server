var http = require('http');

var server = http.createServer(function(req, res) {
  var reqPath = req.url.split('/');
  if (req.method === 'GET') {
    if (reqPath[1] === 'time' || reqPath[1] === '') {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(new Date().toString());
      return res.end();
    }

    if (reqPath[1] === 'greet') {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write('Hello ' + reqPath[2]);
      return res.end();
    }
  } else if (req.method === 'POST') {
    if (reqPath[1] === 'greet') {
      var reqData = '';
      req.on('data', function(chunk) {
          reqData += chunk;
      });

      req.on('end', function() {
        res.writeHead(200, { "Content-Type": "text/plain" });
        JSON.parse(reqData);
        console.log(reqData.name);
        res.write('hello ' + reqData.name);
        return res.end();
      });
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "plain/text"
    });
    res.write('404');
    return res.end();
  }
});

server.listen(3000, function() {
  console.log("Server is running");
});
