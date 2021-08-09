//factorial
//5 != 5x4x3x2x1;
//4 != 4x3x2x1;
// 3! = 3x2x1;
// 2 != 2x1;
// 1 != 1x1;

var factorial = 1;

for (var i = 1; i <= 7; i++) //i should be 1 since 1x0 will be 0 eventually so need to use 1;
{
    console.log(i);
    factorial = factorial * i;

}
console.log(factorial);

var factorial = 1;
for (var i = 1; i <= 8; i++) {
    factorial = factorial * i;
}
console.log(factorial);