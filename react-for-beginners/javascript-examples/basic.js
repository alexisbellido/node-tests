/* eslint-disable */

let sum = (a, b) => a + b;

console.log(`Sum is ${sum(2,4)}\n===`);

let binary = '111';
let decimal = 7;

console.log('Binary to decimal');
console.log(parseInt(binary, 2));

console.log('Decimal to binary');
console.log(decimal.toString(2));

// first period is decimal point, second is to call method
console.log(7..toString(2));

// this is more explicit with a zero after decimal point
console.log(7.0.toString(2));

// and probably better with parentheses
console.log((7).toString(2));

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

