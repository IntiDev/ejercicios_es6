import showResult from 'showResult_es5';

export const addition = (n1,n2) => {
    let result = n1 + n2;
    return showResult(n1,n2,'+',result);
};