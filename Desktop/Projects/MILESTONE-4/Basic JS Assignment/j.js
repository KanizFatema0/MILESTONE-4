function perfectFriend(a) {
    //Condition check for error -> if the argument array is empty, print empty list of name of friends.
    // If array type is not string 
    for (var i = 0; i <= a.length; i++) {
        if (a[i].length == 5)
            return a[i];
    }
}
var arr = ["ash", "Batas", "Dola", "Meghla", "Samin"];
var output_p4 = perfectFriend(arr);
console.log(output_p4);