// 1 != 1
// 2 != 2x1            (2x1!)
// 3 != 3x2x1          (3x2!)
// 4 != 4x3x2x1        (4x3!)
// 5 != 5x4x3x2x1      (5x4!)
// 6 != 6x5x4x3x2x1    (6x5!)
// 7 != 7x6x5x4x3x2x1  (7x6!)
// n != nx(n-1)!

function factorial(n) {
    if (n == 1) { // this is called stopping condition in recursion
        return 1;
    }
    return n * factorial(n - 1);
}
const myFactorial = factorial(7);
console.log(myFactorial);