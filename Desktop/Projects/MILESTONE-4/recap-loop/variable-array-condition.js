var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

//array
var items = ['bottle', 'glass', 'mug', 'paper'];
var position = items.indexOf('paper');
items.push('envelope');
//console.log(items);
//console.log(position);

//consitionals
if (items.length >= 4) {
    console.log('you have too many items.');
}
else if (items.length == 4) {
    console.log('you only have 4 items');
}
else {
    console.log('you have a clean desk');
}