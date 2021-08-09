var danishPrice = 50;
var butterPrice = 25;
var toastPrice = 15;
var packedWell = true;
var myBudget = 100;
if (danishPrice < myBudget) {
    console.log('i will have danish');
    if (packedWell == true) {
        console.log("i wont eat");
    }
}
else if (butterPrice < myBudget) {
    console.log('ill have butterbun')
}
else {
    console.log('ill have toast')
}

