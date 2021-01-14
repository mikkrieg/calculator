
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
    event.preventDefault();
    const number1 = parseInt($("input#add1").val());
    const number2 = parseInt($("input#add2").val());

    const result = add(number1, number2);

    $("div#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#subtract1").val());
    const number2 = parseInt($("input#subtract2").val());

    const result = add(number1, number2);

    $("div#output").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#multiply1").val());
    const number2 = parseInt($("input#multiply2").val());

    const result = add(number1, number2);

    $("div#output").text(result);
  });

  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#divide1").val());
    const number2 = parseInt($("input#divide2").val());

    const result = add(number1, number2);

    $("div#output").text(result);
  });
});



