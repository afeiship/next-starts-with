(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.startsWith = function (inString,inTarget, inIndex) {
    var idx = inString.indexOf(inTarget);
    var index = inIndex || 0;
    return idx === index;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.startsWith;
  }

}());
