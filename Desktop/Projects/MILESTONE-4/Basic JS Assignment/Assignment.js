/*---------Problem 1---------*/

function seerToMon(seer) {

    var mon = seer / 40;
    return mon;

}


/*---------Problem 2---------*/


function totalSales(shirt, pant, shoe) {
    var shirtdeliveryPrice = 100;
    var pantdeliveryPrice = 200;
    var shoedeliveryPrice = 500;
    if (shirt > 0 && pant && shoe > 0) {
        var totalValue = shirtdeliveryPrice * shirt + pantdeliveryPrice * pant + shoedeliveryPrice * shoe;
    }
    return totalValue;
}


/*---------Problem 3---------*/

function deliveryCost(tshirtPieces) {
    var deliveryPrice = 0;
    if (tshirtPieces >= 0 && tshirtPieces <= 100)//for more than 100 pieces 100 delivery fee
    {
        deliveryPrice += tshirtPieces * 100;
    }
    else if (tshirtPieces > 100 && tshirtPieces <= 200) // For more than 100 to 200 pieces, 100 delivery fee for 100 pieces and 80 delivery fee for 200 pieces
    {
        tshirtPieces = tshirtPieces - 100;
        deliveryPrice += 100 * 100 + tshirtPieces * 80;
    }
    else if (tshirtPieces > 200) // For more than 200 pieces, 100 delivery fee for 100 pieces and 80 delivery fee for 200 pieces and 50 delivery fee for more than 200 pieces
    {
        tshirtPieces = tshirtPieces - 200;
        deliveryPrice += 100 * 100 + 100 * 80 + tshirtPieces * 50;
    }

    return deliveryPrice;
}

/*---------Problem 4---------*/
function perfectFriend(names) {
    //Condition check for error - if the argument array is empty, print empty list of friends names
    // If array is not string type 
    for (var i = 0; i <= names.length; i++) {
        if (names[i].length == 5)
            return names[i];
    }

}