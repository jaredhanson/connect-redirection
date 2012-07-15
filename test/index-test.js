var vows = require('vows');
var assert = require('assert');
var redirect = require('index');


vows.describe('connect-redirection').addBatch({
  
  'module': {
    'should export middleware': function () {
      assert.isFunction(redirect);
    },
  },
  
}).export(module);
