// import addition from 'suma'
// import subtraction from 'resta'
import * as operaciones from './operaciones'

function main (n1,n2,operator) {
    if (operator === "+")
        operaciones.addition(n1,n2);
    else if (operator === "-")
        operaciones.subtraction(n1,n2);
    else if (operator === "*")
        operaciones.multiplication(n1,n2);
    else 
        operaciones.division(n1,n2);
}


main(3,5,"+");
main(3,5,"-");
main(3,5,"*");
main(3,5,"/");


// https://programarivm.com/hola-mundo-oop-con-ecmascript-6-ec6/
// ********** COMAND **********
// cli -> linea de comando (no crea archivos locales, instala en la maquina)

// *********** MODULES ********
// 1. npm install -D babel-cli / npm install -g babel-cli
// 2. npm install -D babel-preset-es2015 / npm install --save-dev babel-preset-es2015
// 3. Crear archivo .babelrc 
//     {
//         "presets": ["es2015"]
//     }
// 4. babel src --out-dir dist
// 5. node dist/calculadora_modules.js

 