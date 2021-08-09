// variable declare **

var nameOfBook = 'The kite runner';

//array**

var bookList = ['the kite runner', '40 rules of love', 'thousand splendid suns', 'start with y'];

//find index

var bookIndex = bookList.indexOf('the kite runnner');

//change variable

bookList[1] = 'maze runner';

//add new element
bookList.push('puss in boots');

//remove books
bookList.pop();

//conditionals if**

if (bookList[1] == 'maze runner') {
    console.log('it is herre');
}
else {
    console.log('it is not here');
}

//loop**
//while**

var i = 0;  // declare loop variable
while (i < 7) //give a condition
{
    console.log('will loop');
    i++;  //change the value
}

//for loop**

for (var i = 0; i < 7; i++) {
    console.log('loop it');
}