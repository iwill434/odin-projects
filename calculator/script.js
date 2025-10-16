// create functions that go two numbers at a time and then the resulting 
// number is used for the next operator until cleared

const add = (a, b) => a + b;
  
const subtract = (a, b) => a - b;
  
const multiply = (a, b) => a * b;
  
const divide = (a, b) => a / b;

const power = (a, b) => a ** b;
  
const factorial = function (n) {
    let product = 1;
    for (let i = n; i > 0; i--) {
      product *= i;
    }
    return product;
  };

const ln = function (n) {
    return ;
};

const log = function (n) {
    return ;
};



// add event listeners for button clicking as well as keyboard strokes and backspace
// DOM manipulation to add inputs to screen and/or show result
const screen = document.getElementById('screen');

let displayValue = '';

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');


// only allow users to select decimal once per number