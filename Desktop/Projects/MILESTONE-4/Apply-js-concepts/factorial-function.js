// var factorial = 1; //since it will be multiplied to use 1 for starters but for add u can use 0
// for (var i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// function getFactorial(number) {
//     var factorial = 1;
//     for (var i = 1; i <= number; i++) {
//         factorial = factorial * i;

//     }
//     return factorial;
// }
// var firstFactorial = getFactorial(7);
// console.log(firstFactorial);

// var secondFactorial = getFactorial(9);
// console.log(secondFactorial);

function getFactorial(number) {
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var firstFactorial = getFactorial(4);
console.log('The factorial is:', firstFactorial);

