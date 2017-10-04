// // var num = 1
// // while (num <=10) {
// //   console.log('the number is: ' + num)
// //   num += 2// this basically makes it not infinite bc it reassigns a new num to var num=1 
// //   //and continues to print it until its not true anymore
// // }

// // for (var num = 1; num<=10; num+=1){
// //     console.log('the number is:' + num)
// // }//better for sequences
// // //rather than when its a while kinda for being in a same spot
// // //example of this is driving a car?
// // for( var i = 0; i<=10; i+=1){
// //     if (i % 2===0){
// //         console.log(i + "is even")
// // } else {
// //     console.log(i + "is odd")
// //     }
// // }



// // // var sum = 0 
// // // for (var i = 1; i <= 10; i +=1){
// // //     sum+=1
// // //     console.log(sum)
// // // }


// // var sum = 0 
// // for (var i = 1; i <= 10; i +=1){
// //     sum+=i +(i-1) //i* 2-1
// //     console.log(sum)
// // }

// // //starts at 1 and does 1+ (1-0) 



// // for (var i = 10; i>= 0; i+=1){
// //     console.log(i)
// // }
// // //goes on for infinity 
// // // for (var i = 10; i>= 0; i+=1) counts down 

// // for (var i = 10; i>= 0; i+=1){
// //     if (i ===0) 
// //     console.log('blast off')
// // }else{
// //     console.log(i)
// // }
// //  // this would print blast off




// // lets write code for even and off numbers 

// // function writing(){
// //     for (var i = 0; i<=10; i+=1){
// //         if( i%2===0){
// //             console.log(i + "  is even")
// //         }else{
// //             console.log(i + " is odd")
// //         }
// //     }
// // }

// // writing()


// /* 

// Write a function `XO` to check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any characater.


// XO("ooxx")    // returns true
// XO("xooxx")   // returns false
// XO("ooxXm")   // returns true
// XO("zpzpzpp") // returns true because zero 'x's and 'o's are present
// XO("zzoo")    // returns false


// */


// function XO(string) {
//     var counterX = 0
//     var counterO = 0

//     for (var i = 0; i <= string.length; i++) {
//         if (string[i] === "x") {
//             counterX++
//         } else if (string[i] === 'o') {
//             counterO++
//         }

//     }
//     if(counterX === counterO){
//         return true 
//     } else {
//         return false
//     }


// }


// XO("kelxxinoo")
// console.log(XO("helloox"))
// // var name = "kelvin"
// // for(var i = 0; i <= name.length -1; i++){

// // console.log(name[i])

// // }



// /* Write a function `countVowels` that receives a string and returns 
// the number of vowels found in the string. 

// countVowels("hello") // returns 2 

// countVowels("dog says woof") // returns 4

// countVowels("cat says meow") // returns 4
// */

// function countVowels(string){ 
//     var vowelCount = 0
//     for (var i=0; i<= string.length; i++)
//         if (string[i]==="a"|| string[i] ==="e"|| string[i]==="i"||string[i]=== "o" || string[i]==="u")
//         vowelCount++
// return vowelCount 
// }


// console.log(countVowels("hello"))


/* Write a function `isPalindrome` that receives a string and returns true 
if the string is a palindrome and false if it is not a palindrome. 

isPalindrome("racecar") // returns true 

isPalindrome("tattarrattat") // returns true 

isPalindrome("dog") // returns false

*/

function isPalindrome(string){
    var backWards = ""
    for (var i = string.length-1; i >=0; i--){
        backWards += string[i]
    }  
        return backWards === string 
}

console.log((isPalindrome("mom")))

/* Write a function `myIncludes` that receives a string and a letter and 
returns true if the letter is found in the string and false otherwise. 

myIncludes("hello", "e") // returns true  


myIncludes("buddy", "z") // returns false

*/



// function myIncludes(string, letter){
//     if (string.includes(letter)){
//         return true
//     } else {
//         return false
//     }
// }

//     console.log(myIncludes("hello", "e") )

/* Write your own mySubString function that takes three arguments, a string and two 
numbers: a start index and an end index. The substring should include all characters
 from the the start index and up to (but no including) the end index. If either argument 
 is greater than the string's length, treat it as if it were equal to the string's length. 
 if the end index is omitted, also treat it as if it were equal to the string's length.

mySubString("giraffe", 1, 2) // returns "i"
mySubString("giraffe", 2, 8) // returns "raffe"
mySubString("giraffe", 0, 2) // returns "gi"

*/

function mySubString(string, num1,num2){
    return string.slice(num1,num2)
}

console.log(mySubString("hello",0,2))

/* 

Write a function that takes a number num as an argument and logs a triangle - 
using hashtags, with height and base equal to the value of num. For example, 
if the value of num is 5, the triangle will look like this:

#
##
###
####
#####

*/

function triangle(number){
    var triangle2 = ""
    for(var i = 0; i<= number; i++){
        console.log(triangle2+= "#")
    }
}
   

triangle(5)


// make sure to put return outside the loop if we want it to list it 
                                       // typically unless we know we want a specific value 