
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
  $(document).ready(function() {
    $("form#calculator").submit(function(e) {
      e.preventDefault();
      const number1 = parseInt($("#input1").val());
      const number2 = parseInt($("#input2").val());
      const operator = $("input:radio[name=operator]:checked").val();
      const result = add(number1, number2);
      $("#output").text(result);
    });
  });
});



