"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numberArray = [];
const textArray = [];
function Add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(result) {
    console.log(result.val);
}
buttonElement.addEventListener('click', () => {
    let num1 = num1Element.value;
    let num2 = num2Element.value;
    const result = Add(+num1, +num2);
    const stringresult = Add(num1, num2);
    numberArray.push(result);
    textArray.push(stringresult);
    console.log(result);
    console.log(stringresult);
    printResult({ val: result, timestamp: new Date });
    console.log(numberArray, textArray);
});
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
mypromise.then((result) => {
    console.log(result.split('w'));
});
