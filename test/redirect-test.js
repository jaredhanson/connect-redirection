var vows = require('vows');
var assert = require('assert');
var util = require('util');
var redirect = require('redirect');


function MockRequest() {
}

function MockResponse() {
}


vows.describe('redirect').addBatch({

  'middleware': {
    topic: function() {
      return redirect();
    },
    
    'when handling a request': {
      topic: function(redirect) {
        var self = this;
        var req = new MockRequest();
        var res = new MockResponse();
        
        function next(err) {
          self.callback(err, req, res);
        }
        process.nextTick(function () {
          redirect(req, res, next)
        });
      },
      
      'should add redirect function to res' : function(err, req, res) {
        assert.isFunction(res.redirect);
      },
    },
  },

}).export(module);
