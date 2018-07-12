// ******** Función de un solo parámetro ********
const sumarUno = x => x + 1; //Se omiten () y {}
// console.log(sumarUno(23)); //Esto ocurre solo cuando la función es de una sola línea y devuelve un valor.

//*********** Función de varios parámetros *****
const sumar = (x, y = 1) => x + y;
// console.log(sumar(1264, 751));
// console.log(sumar(3));

// **********Función sin parámetros *********

const saludar = () => 'Hola Laboratoria'
console.log(saludar());


//NOTAS
// -CONST siempre para las funciones
// - return no se utiliza para funciones de 1 sola línea