var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-starts-with');

describe('next/startsWith', function () {

  it('nx.startsWith("abc", "a") true', function () {
    var ret = nx.startsWith("abc", "a");
    assert.equal(ret, true);
  });


  it('nx.startsWith("abc", "b") false', function () {
    var ret = nx.startsWith("abc", "b");
    assert.equal(ret, false);
  });


  it('nx.startsWith("abc", "b", 1) true', function () {
    var ret = nx.startsWith("abc", "b", 1);
    assert.equal(ret, true);
  });

});
