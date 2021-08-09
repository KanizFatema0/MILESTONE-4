function largestArray(numbers) {
    let largest = 0;
    for (var i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;
}
const final = [12, 22, 33, 44];
const oldest = largestArray(final);
console.log(oldest);