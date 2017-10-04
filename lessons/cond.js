

//depending on age, it says alcohol sales is permitted, or not 
var age = 21
if (age >= 21 ){
    console.log( "We can sell alcohol")
} else {
    console.log( "We cannot sell you alcohol")
}



// //depending on age, it says alcohol sales is permitted, or not 
//but no sales on sunday

var age1= 25
var day = "Sunday"

if (age1 <= 21 || day === "Sunday" ){
    console.log("We cannot sell alcohol")
} else{
    console.log("We can sell alcohol")
}

// count of dogs and in case there is none, print "where is Luna?"
var dogCount = 5

if (dogCount === 1){
    console.log ("There is one dog");
}else if ( dogCount >1 ){
    console.log( "There are " + dogCount + " dogs")
} else {
    console.log("Where is luna?")
}

//lazy way aka using less code
// var dog_count = 0;
// if (!dogcount){ 
//     console.log("Where is Luna?");
// }

// 0 has a value of false, 
// so !dogcount is negating it, so if it is true that dogcount=0 where is luna

// var dog_count; 
// if (!dog_count){
//     console.log("where is Luna?")
// }
// // this makes it undefined so 



//given a day of the month (as a number)
//print out the day of the week (as a text, example: Monday)
//September 2017 

// var day = 28

// if (day === 3 || day === 10 || day === 17 || day === 24) {
//     console.log("September " + day + " is on a Sunday.")
// } else if (day === 4 || day === 11 || day === 18 || day === 25) {
//     console.log("September " + day + " is on a Monday.")
// } else if (day === 5 || day === 12 || day === 19 || day === 26) {
//     console.log("September " + day + " is on a Tuesday.")
// } else if (day === 6 || day === 13 || day === 20 || day === 27) {
//     console.log("September " + day + " is on a Wednesday.")
// } else if (day === 7 || day === 14 || day === 21 || day === 28) {
//     console.log("September " + day + " is on a Thursday.")
// } else if (day === 8 || day === 15 || day === 22 || day === 29) {
//     console.log("September " + day + " is on a Friday.")
// } else if (day === 9 || day === 16 || day === 23 || day === 30) {
//     console.log("September " + day + " is on a Saturday.")
// }


var day = 2;
var weekday = day % 7;

switch(weekday){
    case 1: 
        console.log('friday');
        break;

    case 2: 
    console.log("saturday");
    break;
}


// Write a program that checks and logs whether two numbers are equal or not.

var num1 = 5;
var num2= 6;

if (num1===num2){
    console.log( "The numbers are equal");
} else{
    console.log(" They are not equal");
}

// Write a program that logs which of two number variables is larger.

var numba1 = 10
var numba2 = 10

if(numba1 > numba2){
    console.log("the greater number of " +  numba1 + " and "+ numba2 + " is " + numba1)
}else if( numba2 > numba1){
    console.log("the greater number of " +  numba1 + " and " + numba2 + " is " + numba2)
}else{ 
    console.log("they are equal")
}

//Create a string variable with a language code (e.g. "es", "de", "en"). 
//Use an if - else if - else statement to log "Hello, World" in the given language,
// for at least 3 languages. It should default to logging English.

var language = "en" 


if (language === "es"){
    console.log( "hola mundo ");
} else if( language === "fr" ){
    console.log("Bonjour Monde");
} else{
    console.log("Hello World");
}

//Create a variable numGrade that will contain a numeric grade (out of 100). 
//Use a if - else if ... - else statement to log the corresponding letter grade, 
//either "A", "B", "C", "D", or "F".

var numGrade= 100

if (numGrade > 90){
    console.log("A")
} else if (numGrade > 82){
    console.log("B")
} else if ( numGrade > 73){
    console.log("C")
} else if (numGrade > 65 ){
    console.log("D")
} else { 
    console.log( "F")
}

/* Create two variables: one to hold an animal name ('cat', 'dog', etc.) , and one to hold a number.
Use a if - else statement to log:
1. the number
2. either a single or plural form, like "5 cats" or "1 dog".
Bonus: Make it handle a few collective nouns like "sheep" and "geese". */

var animal = "dog"; 
var number= 0;

if ( number === 1){
    console.log(number + " " + animal);
} else if (number > 1){
    console.log( number + " " +animal + "s");
} else {
    console.log( "There are no animals :( ");
}

//Write a program that checks and logs whether a given number is even or odd.

var numba = 3

if (numba % 2 === 0 ){
    console.log( numba + " is even")
} else {
    console.log( numba + " is odd ")
}

//Write a program that checks and logs whether a given number is positive, negative, or equal to 0.

var numb = -7

if (numb>0){
    console.log( numb + " is positive")
} else if (numb === 0 ){
    console.log( numb + " is equal to 0 ")
} else {
    console.log( numb + " is negative")
}