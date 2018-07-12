'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subtraction = undefined;

var _showResult_es = require('showResult_es5');

var _showResult_es2 = _interopRequireDefault(_showResult_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subtraction = exports.subtraction = function subtraction(n1, n2) {
    var result = n1 - n2;
    (0, _showResult_es2.default)(n1, n2, '-', result);
};