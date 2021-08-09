//straight while loop incremental
function getFactorial(number) {
    let factorial = 1; // let as the variable will change;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var firstFactorial = getFactorial(7);
console.log("The factorial is:", firstFactorial)

//ulta (while loop decremental) dike upper code was for 7! so the starting i was 1 but now since ulta so i will be equal to number since the number is equal to the factorial we will be finding; and i<=1 since it will the last value i will come to . and i has to decrease since it will go down so i--;

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
var firstFactorial = getFactorial(7);
console.log('The factorial is:', firstFactorial);