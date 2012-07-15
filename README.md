# connect-redirection

This middleware adds a `redirect` function to response.

Node's built-in `http.ServerResponse` prototype does not have a `redirect()`
function.  Popular frameworks, such as [Express](http://expressjs.com/), extend
the prototype with this function.  Because it is such a common operation,
middleware tends to get developed that assumes `res.redirect()` is available.
This causes incompatibility with applications that don't use a higher-level
framework.  To address this issue, this middleware attaches `redirect()` to
`res`.

## Installation

    $ npm install connect-redirection
    
## Usage

Simply `use` the middleware provided by this module.  Middleware further down
the chain will then be able to call `res.redirect()`.

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

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/connect-redirection.png)](http://travis-ci.org/jaredhanson/connect-redirection)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2012 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
