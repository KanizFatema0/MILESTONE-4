//addition of two numbers
function addNumbers(number1, number2) {
    console.log(number1, number2);
    var addition = number1 + number2;
    return addition;

}
var firstNumber = 10;
var secondNumber = 20;
var result = addNumbers(firstNumber, secondNumber);
console.log('Result Value:', result);

//multiplication of two numbers

function multiplyTwoNumbers(num1, num2) {
    var multiply = num1 * num2;
    return multiply;
}
var firstNumber = 3;
var secondNumber = 3;
var result = multiplyTwoNumbers(firstNumber, secondNumber);
console.log(result);

// Subtract two numbers

function minusTwoNumbers(num1, num2) {
    subtract = num1 - num2;
    return subtract;
}
var firstNumber = 20;
var secondNumber = 10;
var result = minusTwoNumbers(firstNumber, secondNumber);
console.log('The result is:', result);