import {showResult} from './showResult'

export const addition = (n1,n2) => {
    let result = n1 + n2;
    showResult(n1,n2,'+',result);
};

export const subtraction = (n1,n2) => {
    let result = n1 - n2;
    showResult(n1,n2,'-',result);
};

export const  multiplication = (n1,n2) => {
    let result = n1 * n2;
    showResult(n1,n2,'*',result);
};

export const division = (n1,n2) => {
    let result = n1 / n2;
    showResult(n1,n2,'/',result);
};