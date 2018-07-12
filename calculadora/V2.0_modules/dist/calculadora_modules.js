"use strict";

var _operaciones = require("./operaciones");

var operaciones = _interopRequireWildcard(_operaciones);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function main(n1, n2, operator) {
    if (operator === "+") operaciones.addition(n1, n2);else if (operator === "-") operaciones.subtraction(n1, n2);else if (operator === "*") operaciones.multiplication(n1, n2);else operaciones.division(n1, n2);
} // import addition from 'suma'
// import subtraction from 'resta'


main(3, 5, "+");
main(3, 5, "-");
main(3, 5, "*");
main(3, 5, "/");


// *********** MODULES ********
// 1. npm install -D babel-cli
// 2. npm install -D babel-preset-es2015
// 3. Crear archivo .babelrc 
//     {
//         "presets": ["es2015"]
//     }
// 4. babel src --out-dir dist
// 5. node dist/calculadora_modules.js