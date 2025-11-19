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

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            displayValue = '';
            screen.textContent = displayValue;
        } else if (button.id === 'factorial') {
            displayValue += '!';
            screen.textContent = displayValue;
        } else if (button.id === 'sqrt') {
            displayValue += 'sqrt';
            screen.textContent = displayValue;
        } else if (button.id === 'exponent') {
            displayValue += '^';
            screen.textContent = displayValue;
        } else {
            displayValue += button.textContent;
            screen.textContent = displayValue;
        }
    });
});

// parse what is fed using array, evaluate the inputs using the functions above
// try to handle order of operations and parentheses

function parseExpression(inputs) {
    const parsedInput = []; 
    let currentNumber = '';

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] !== ' ') {
            if ('0123456789.'.includes(inputs[i])) {
                currentNumber += inputs[i];
            } else {
                if (currentNumber) {
                    parsedInput.push(currentNumber);
                    currentNumber = '';
                }
                parsedInput.push(inputs[i]);
            }
        }
    }
    if (currentNumber) {
        parsedInput.push(currentNumber);
    }
    return parsedInput;
}

function evaluateInputs(parsedInput) {
    // let inputs = [];
    let result = 0
    // for (let i = 0; i < parsedInput.length; i++) {
    //     inputs.push(parseFloat(parsedInput[i]));
        if (parsedInput[1] === '+') {
            result = add(parseFloat(parsedInput[0]), parseFloat(parsedInput[2]));
        }
        if (parsedInput[1] === '-') {
            result = subtract(parseFloat(parsedInput[0]), parseFloat(parsedInput[2]));
        }
        if (parsedInput[1] === '*') {
            result = multiply(parseFloat(parsedInput[0]), parseFloat(parsedInput[2]));
        }
        if (parsedInput[1] === '/') {
            result = divide(parseFloat(parsedInput[0]), parseFloat(parsedInput[2]));
        }
    // }
    return result
}

const parsed = parseExpression('1+ 1');
const answer = evaluateInputs(parsed);
console.log(answer);

// update to have the result appear as the displayValue on calculator
function operate(expression) {
    expression = expression.trim();
    let inputs = parseExpression(expression);
    let result = evaluateInputs(inputs);
    return result;
};

equalsButton.addEventListener('click', () => {
        currentResult = operate(displayValue)
        displayValue = currentResult;
        screen.textContent = displayValue;
});

// only allow users to select decimal once per number