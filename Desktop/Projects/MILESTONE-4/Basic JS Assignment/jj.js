function perfectFriend(names) {
    //Condition check for error - if the argument array is empty, print empty list of friends names
    // If array is not string type 
    for (var i = 0; i <= names.length; i++) {
        if (names[i].length == 5)
            return names[i];
    }

}
var arr = ["Omi", "Imtihan", "Kaniz", "Priaa", "Faran"];
var output_p4 = perfectFriend(arr);
console.log(output_p4);