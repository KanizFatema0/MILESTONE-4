function bringFood(taka) {
    console.log('money for food', taka);
    console.log('give food');
    var foodPrice = 10;
    var foodQuantity = taka / foodPrice;
    return foodQuantity;

}

var money = 250;
var food = bringFood(money);
console.log('here is your food', food);