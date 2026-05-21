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
let equalPress = false;

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
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(1);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(1);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(1);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });
  two.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(2);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(2);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(2);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });
  three.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(3);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(3);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(3);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });
  four.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(4);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(4);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(4);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });
  five.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(5);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(5);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(5);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });

  six.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(6);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(6);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(6);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });

  seven.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(7);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(7);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(7);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });
  eight.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(8);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(8);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(8);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });
  nine.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(9);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(9);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(9);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
    }
  });
  zero.addEventListener("click", () => {
    if (whichDigit == "left" && equalPress == false) {
      digitLeft.push(0);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right") {
      //Switches to the right number in the equation
      digitRight.push(0);
      console.log(digitRight);
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    } else {
      digitLeft = [];
      digitLeft.push(0);
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      equalPress = false;
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
    equalPress = true;
  });
}

equation();
console.log(`Operate ${operate(6, "^", 2)}`);

console.log(`Add ${add(3, 3.7)} `);
console.log(`Subtract ${subtract(3, 3.7)} `);
console.log(`Multiply ${multiply(3, 3.7)} `);
console.log(`Divide ${divide(3, 3.7)} `);
