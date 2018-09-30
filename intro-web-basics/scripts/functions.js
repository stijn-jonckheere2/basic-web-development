// Basic functions

var friends = [
    "Sacha Wuyts",
    "Yannick Dieusaert",
    "Michiel Fielibert",
    "Jason Rau",
    "Estelle Decamps"
];

function amountOfStijnsFriends() {
    return friends.length;
}

// Calling a function

var stijnsAmountOfFriends = amountOfStijnsFriends();
print("This is the result of a function", stijnsAmountOfFriends);

// Referencing a function

stijnsAmountOfFriends = amountOfStijnsFriends;
print("This is the function itself", stijnsAmountOfFriends);

// Scope of a variable

print("This is the window object", window);
print("These are the friends in the window object", window.friends);

// Declaring a function

var getMaleFriends = function () {
    subPrint("Looking for male friends...");

    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];

        subPrint("Found friend: " + friend);

        if(friend !== "Estelle Decamps") {
            subPrint("Friend is male");
        } else {
            console.warn("Friend is female");
        }
    }
}

print("This is looping through an array");
getMaleFriends();