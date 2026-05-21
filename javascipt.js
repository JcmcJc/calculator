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

let digitLeft = [];
let digitRight = [];
let operator = "+";

// Button declarations
//Numbers
let display = document.querySelector(".display");
let calculator = document.querySelector(".calculator");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
//Operands
let plus = document.querySelector("#plus");
let equal = document.querySelector("#equal");

//Event listeners for buttons

let whichDigit = "left"; //Default left

function equation() {
  //Number event listeners
  one.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(1);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(1);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });
  two.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(2);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(2);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });
  three.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(3);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(3);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });
  four.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(4);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(4);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });
  five.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(5);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(5);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });

  six.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(6);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(6);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });

  seven.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(7);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(7);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });
  eight.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(8);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(8);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });
  nine.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(9);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(9);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });
  zero.addEventListener("click", () => {
    if (whichDigit == "left") {
      digitLeft.push(0);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else {
      //Switches to the right number in the equation
      digitRight.push(0);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
  });

  //Operands always switch to the next number of the equation.
  plus.addEventListener("click", () => {
    display.textContent = `${digitLeft.join("")} + `;
    console.log("+");
    whichDigit = "right";
  });
  //Equal operand finishes the equation
  equal.addEventListener("click", () => {
    display.textContent = `${operate(+digitLeft.join(""), operator, +digitRight.join(""))}`;
    digitLeft = [operate(+digitLeft.join(""), operator, +digitRight.join(""))];
    digitRight = [];
    console.log("equals");
    whichDigit = "left";
  });
}

equation();
console.log(`Operate ${operate(6, "^", 2)}`);

console.log(`Add ${add(3, 3.7)} `);
console.log(`Subtract ${subtract(3, 3.7)} `);
console.log(`Multiply ${multiply(3, 3.7)} `);
console.log(`Divide ${divide(3, 3.7)} `);
