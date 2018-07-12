'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addition = undefined;

var _showResult_es = require('showResult_es5');

var _showResult_es2 = _interopRequireDefault(_showResult_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addition = exports.addition = function addition(n1, n2) {
    var result = n1 + n2;
    return (0, _showResult_es2.default)(n1, n2, '+', result);
};