// const number = 4;
// const remainder = num % 2;
// console.log(remainder == 0);

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMynumberEven = isEven(myNumber);
console.log('is my number even', isMynumberEven)

//odd function
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const isMyNumberOdd = isOdd(myNumber);
console.log('is my number odd', isMyNumberOdd);

