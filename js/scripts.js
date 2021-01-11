function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const result = multiply(number1, number2);

alert(result);

// function temperatureConversion(temp1) {
//   return (temp1 * 2) + 32;
// }

// const result = temperatureConversion(0);
// alert(result);


