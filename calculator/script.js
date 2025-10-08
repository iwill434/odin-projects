// create functions that go two numbers at a time and then the resulting 
// number is used for the next operator until cleared

const add = function (a, b) {
    return a + b;
  };
  
const subtract = function (a, b) {
    return a - b;
  };
  
  
const multiply = function (a, b) {
    return a * b;
  };
  
const divide = function (a, b) {
    return a / b;
}

const power = function (a, b) {
    return a ** b;
  };
  
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



// only allow users to select decimal once per number