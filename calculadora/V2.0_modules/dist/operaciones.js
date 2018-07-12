'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.division = exports.multiplication = exports.subtraction = exports.addition = undefined;

var _showResult = require('./showResult');

var addition = exports.addition = function addition(n1, n2) {
    var result = n1 + n2;
    (0, _showResult.showResult)(n1, n2, '+', result);
};

var subtraction = exports.subtraction = function subtraction(n1, n2) {
    var result = n1 - n2;
    (0, _showResult.showResult)(n1, n2, '-', result);
};

var multiplication = exports.multiplication = function multiplication(n1, n2) {
    var result = n1 * n2;
    (0, _showResult.showResult)(n1, n2, '*', result);
};

var division = exports.division = function division(n1, n2) {
    var result = n1 / n2;
    (0, _showResult.showResult)(n1, n2, '/', result);
};