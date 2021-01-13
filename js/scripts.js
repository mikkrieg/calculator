
// Business Logic

const add = function(number1, number2) {
  return number1 + number2;
}

const subtract = function(number1, number2) {
  return number1 - number2;
}

const divide = function(number1, number2) {
  return number1 / number2;
}

const multiply = function(number1, number2) {
  return number1 * number2;
}

// User logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());

    alert(add(number1, number2));

    event.preventDefault();
  });
});



