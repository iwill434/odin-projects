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

const ln = (n) => Math.log(n);

const log = (n) => Math.log10(n);

const sqrt = (n) => Math.sqrt(n);


// add event listeners for button clicking as well as keyboard strokes and backspace
// DOM manipulation to add inputs to screen and/or show result
const screen = document.getElementById('screen');

let displayValue = '';
let currentResult = null;

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.textContent;
        screen.textContent = displayValue;
    });
});

// need to update these to strip away things like the x for factorial and instead just give exclamation mark

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            displayValue = '';
            screen.textContent = displayValue;
        } else {
            displayValue += button.textContent;
            screen.textContent = displayValue;
        }
    });
});

// parse what is fed using array, evaluate the inputs using the functions above
// try to handle order of operations and parentheses

function operate(expression) {
    expression = expression.trim();
    let inputs = parseExpression(expression);
    let result = evaluateInputs(inputs);
    return result;
};


// only allow users to select decimal once per number