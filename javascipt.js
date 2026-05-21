const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

const sum = (array) => {
  return array.reduce((total, current) => total + current, 0);
};

const factorial = (number) => {
  let total = 1;
  while (number > 0) {
    total = number * total;
    number--;
  }

  return total;
};

let operate = function (num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "^":
      return power(num1, num2);
      break;
  }
};

console.log(`Operate ${operate(6, "^", 2)}`);

console.log(`Add ${add(3, 3.7)} `);
console.log(`Subtract ${subtract(3, 3.7)} `);
console.log(`Multiply ${multiply(3, 3.7)} `);
console.log(`Divide ${divide(3, 3.7)} `);
