const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

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

//Logic
let digitLeft = [];
let digitRight = [];
let operator = "";
let equalPress = false;
let decimalPresent = false;
let whichDigit = "left"; //Default left

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
let minus = document.querySelector("#minus");
let multi = document.querySelector("#multiply");
let div = document.querySelector("#divide");
let equal = document.querySelector("#equal");
let decimal = document.querySelector("#decimal");
let backspace = document.querySelector("#backspace");
let clear = document.querySelector("#clear");

let result = document.createElement("div");
result.classList.add("result");
//Event listeners for buttons

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

  backspace.addEventListener("click", () => {
    let popped = "";
    if (whichDigit == "left") {
      popped = digitLeft.pop();
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right" && digitRight.length == 0) {
      display.textContent = `${digitLeft.join("")}`;
    } else if (whichDigit == "right" && digitRight.length > 0) {
      popped = digitRight.pop();
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    }
    if (popped == ".") {
      decimalPresent = false;
    }

    console.log("popped " + popped);
  });
  //Reset everything to default when clear button is pressed
  clear.addEventListener("click", () => {
    digitLeft = [];
    digitRight = [];
    display.textContent = "";
    operator = "";
    equalPress = false;
    whichDigit = "left";
    decimalPresent = false;
  });
  decimal.addEventListener("click", () => {
    if (
      whichDigit == "left" &&
      decimalPresent == false &&
      equalPress == false &&
      digitLeft.length == 0
    ) {
      digitLeft.push("0.");
      display.textContent = `${digitLeft.join("")}`;
      decimalPresent = true;
    } else if (whichDigit == "right" && decimalPresent == false) {
      digitRight.push(".");
      //display.textContent = `${digitRight.join("")}`;
      display.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;

      decimalPresent = true;
    } else if (whichDigit == "left" && equalPress == true) {
      digitLeft = [];
      digitLeft.push(".");
      console.log(digitLeft);
      display.textContent = `${digitLeft.join("")}`;
      decimalPresent = true;

      equalPress = false;
    } else if (
      whichDigit == "left" &&
      decimalPresent == false &&
      equalPress == false
    ) {
      digitLeft.push(".");
      display.textContent = `${digitLeft.join("")}`;
      decimalPresent = true;
    }
  });
  //Operands always switch to the next number of the equation.
  plus.addEventListener("click", () => {
    display.textContent = `${digitLeft.join("")} + `;
    //If the user presses another operand before equals: evaluate the previous two numbers then add the next operand.
    if (digitRight.length > 0) {
      digitLeft = [
        operate(+digitLeft.join(""), operator, +digitRight.join("")),
      ];
      digitRight = [];
      display.textContent = `${digitLeft.join("")} + `;
    }
    operator = "+";
    console.log("+");

    whichDigit = "right";
    decimalPresent = false;
  });
  minus.addEventListener("click", () => {
    display.textContent = `${digitLeft.join("")} - `;
    //If the user presses another operand before equals: evaluate the previous two numbers then add the next operand.
    if (digitRight.length > 0) {
      digitLeft = [
        operate(+digitLeft.join(""), operator, +digitRight.join("")),
      ];
      digitRight = [];
      display.textContent = `${digitLeft.join("")} - `;
    }
    operator = "-";
    console.log("-");
    whichDigit = "right";
    decimalPresent = false;
  });
  multi.addEventListener("click", () => {
    display.textContent = `${digitLeft.join("")} * `;
    //If the user presses another operand before equals: evaluate the previous two numbers then add the next operand.
    if (digitRight.length > 0) {
      digitLeft = [
        operate(+digitLeft.join(""), operator, +digitRight.join("")),
      ];
      digitRight = [];
      display.textContent = `${digitLeft.join("")} * `;
    }
    operator = "*";
    console.log("*");
    whichDigit = "right";
    decimalPresent = false;
  });

  div.addEventListener("click", () => {
    display.textContent = `${digitLeft.join("")} / `;
    //If the user presses another operand before equals: evaluate the previous two numbers then add the next operand.
    if (digitRight.length > 0) {
      digitLeft = [
        operate(+digitLeft.join(""), operator, +digitRight.join("")),
      ];
      digitRight = [];
      display.textContent = `${digitLeft.join("")} / `;
    }
    operator = "/";
    console.log("/");
    whichDigit = "right";
    decimalPresent = false;
  });

  //Equal operand finishes the equation
  equal.addEventListener("click", () => {
    let previous = document.createElement("div");
    previous.textContent = `${digitLeft.join("")} ${operator} ${digitRight.join("")}`;
    result.textContent = `${operate(+digitLeft.join(""), operator, +digitRight.join(""))}`;
    digitLeft = [operate(+digitLeft.join(""), operator, +digitRight.join(""))];
    digitRight = [];
    console.log("equals");
    whichDigit = "left";
    equalPress = true;
    decimalPresent = false;
    display.textContent = "";
    previous.style.fontSize = "12px";
    previous.style.color = "grey";
    display.appendChild(previous);
    display.appendChild(result);
  });
}

equation();
