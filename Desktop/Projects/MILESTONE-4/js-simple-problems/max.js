const business = 850;
const minister = 350;
const army = 600;
//compare 3
// if (business > minister && business > army) {
//     console.log('business is greater')
// }
// else if (minister > business && minister > army) {
//     console.log('minister is greater')

// }
// else {
//     console.log('army is greater')

// }
//second way
// var max = Math.max(business, minister, army);
// console.log(max);

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const larger = findLargest(354, 221);
console.log('the largest is:', larger);