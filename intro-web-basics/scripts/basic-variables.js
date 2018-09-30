// Basic variables

var name = "Stijn Jonckheere";

var age = 25;

var isMale = true;

print('This is text', name);
print('This is a number', age);
print('This is a boolean', isMale);

// Basic operations

name = "Sir " + name + " PhD";

print('This is concatenated text', name);

age = age + 5;

print("Number increased", age);

var stringNumber = name + age;

print("Adding a number to a string", stringNumber);

var ageBoolean = isMale + age;

print("Adding true to a number", ageBoolean);

ageBoolean = false + age;

print("Adding false to a number", ageBoolean);

// Experiment

var someText = "Some text";
var result = someText / 10;

print("Dividing a string by 10", result);