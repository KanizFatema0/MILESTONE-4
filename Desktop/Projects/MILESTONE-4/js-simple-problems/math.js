// const myNumber = -5;
// const output = Math.abs(myNumber);

const myNumber = 2.6389;
const output = Math.ceil(myNumber);
const output2 = Math.floor(myNumber);
const output3 = Math.floor(myNumber);
const output4 = Math.random() * 20;// gives random number(0-1) and if u want 1-10 multiply it by 10 if u want till 20 multiply by 20 and so on
const rounded = Math.floor(output4);// if u want round number just use floor
console.log(output);
console.log(output2);
console.log(output3);
console.log(rounded);

for (var i = 0; i <= 20; i++) {
    var number = Math.random() * 6;
    var round = Math.floor(number);
    console.log(round);
}
