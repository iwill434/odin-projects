// create functions that go two numbers at a time and then the resulting 
// number is used for the next operator until cleared

const add = function (a, b) {
    return a + b;
  };
  
const subtract = function (a, b) {
    return a - b;
  };
  
const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
const multiply = function (array) {
    return array.reduce((product, current) => product * current)
  };
  
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