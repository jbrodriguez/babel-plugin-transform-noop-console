/*istanbul ignore next*/"use strict";
var template = require('babel-template');

exports.__esModule = true;

exports.default = function () {
  return {
    visitor: { /*istanbul ignore next*/
      CallExpression: function CallExpression(path) {
        if (path.get("callee").matchesPattern("console", true) && !path.get("callee").matchesPattern("console.error")) {
          path.node.callee = template(`Function.prototype`)().expression;
        }
      }
    }
  };
};

/*istanbul ignore next*/module.exports = exports["default"];