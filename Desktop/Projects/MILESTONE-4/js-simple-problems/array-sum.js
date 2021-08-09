const numbers = [44, 33, 55, 66, 77];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;

}
console.log(sum);


function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var final = arrayTotal([44, 33, 55, 66, 77]);
console.log(final);