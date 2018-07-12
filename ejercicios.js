// *********** NÚMERO PAR / IMPAR **********

// const isPar = n => {
//     if(n % 2 == 0)
//         console.log(`${n} es par`);
//     else
//     console.log(`${n} es impar`);
// }

// **Aplicando OPERADOR TERNARIO***
// const isPar = n => (n%2 === 0)? console.log(`${n} es par`) : console.log(`${n} es impar`);

// isPar(77);

//********PERMUTA ENTRE NUMEROS *********/


const permuta = (n1,n2) => {
    console.log(`n1 vale ${n1} & n2 vale ${n2}`);
    let aux = n1;
    n1 = n2;
    n2 = aux;

    return console.log(`Ahora n1 vale ${n1} & n2 vale ${n2}`);
}

permuta(3,5);