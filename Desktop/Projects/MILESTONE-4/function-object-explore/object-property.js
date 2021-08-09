var computer =
{
    price: 29000,
    storage: '156GB',
    processor: 'intel i5',
}
//console.log(computer);
//console.log(computer.processor);
var computerPrice = computer.price;
console.log(computerPrice);

//set object price
computer.price = 22000;
//console.log(computer);

//different ways to set a object property
//computer.price=22000;
computer['price'] = 23000;
console.log(computer);



