function main (n1,n2,operator) {
    if (operator === "+")
        // console.log(addition(n1,n2));
        addition(n1,n2);
    else if (operator === "-")
        // console.log(subtraction(n1,n2));
        subtraction(n1,n2);
    else if (operator === "*")
        // console.log(multiplication(n1,n2));
        multiplication(n1,n2);
    else 
        // console.log(division(n1,n2));
        division(n1,n2);
}

// const addition = (n1,n2) => n1 + n2;
// const subtraction = (n1,n2) => n1 - n2;
// const  multiplication = (n1,n2) => n1 * n2;
// const division = (n1,n2) => n1 / n2;

const addition = (n1,n2) => {
    let result = n1 + n2;
    showResult(n1,n2,'+',result);
};

const subtraction = (n1,n2) => {
    let result = n1 - n2;
    showResult(n1,n2,'-',result);
};

const  multiplication = (n1,n2) => {
    let result = n1 * n2;
    showResult(n1,n2,'*',result);
};

const division = (n1,n2) => {
    let result = n1 / n2;
    showResult(n1,n2,'/',result);
};

const showResult = (n1,n2, operator, result) => {
   console.log(`El resultado de ${n1} ${operator} ${n2} es ${result} `);
}


main(3,5,"+");
main(3,5,"-");
main(3,5,"*");
main(3,5,"/");