function inchTofeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchTofeet(myInches);
console.log('myInches in feet', feet);

var newInches = 44;
var feet = newInches / 12;
console.log(feet);

var otherInches = 156;
var feet = otherInches / 12;
console.log(feet);


//mile to kilometer

function mileTokm(miles) {
    var km = mile * 1.603;
    return km;
}
var marathon = mileTokilometer(26.2);
console.log('marathon in km', marathon);