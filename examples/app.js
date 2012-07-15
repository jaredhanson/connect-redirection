var connect = require('connect')
  , redirect = require('connect-redirection')
  , http = require('http')

var app = connect()
  .use(redirect())
  .use(function(req, res){
    if (req.url == '/') {
      res.redirect('http://127.0.0.1:3000/welcome')
    } else if (req.url == '/welcome') {
      res.end('Welcome');
    }
  });

http.createServer(app).listen(3000);
