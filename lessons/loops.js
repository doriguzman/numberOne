// function descending(num) {
//     for (var i = num; num >= 1; num -= 1) {
//         console.log(num)
//     }
// }

// descending(2)


// Write a a function that takes a number as an argument, 
//and prints all the even numbers between 0 and the number.

// function evenNum(num){
//     for (var i = 0 ; i <=num; i +=2) {
//         console.log(i)
//     }
    
// }

// evenNum(10)



// Write a a function that takes a number as an argument, 
//and prints all the odd numbers between 1 and the number.

// function oddNumbers(maxNum){
//         for(var i = 1; i<= maxNum; i+=2){
//             console.log(i)
//         }
// }

// oddNumbers(13)

// function Multiplesof9(num){
//     for (var i = 1; i>=num ; i+=1 ){
//         console.log(i*9)
//     }
// }

// Multiplesof9(2)
// ///


// function fizzOrBuzz (){
//     for(var i = 1; i<=100; i+=1){
//      if (i%5===0 && i%3===0 ){
//         console.log( "FizzBuzz")
//         } else if (i % 3 ===0){
//         console.log( "Fizz")
//         }else if(i%5===0 && i%3!==0){
//             console.log("Buzz")
//         }else {
//         console.log(i)
//         }
//     }

// }

// fizzOrBuzz()

// #5 Use the assignGrade function (given below). Write a function that logs each number from 60 - 100 
//along with its corresponding letter score. E.g. For each number from 81 to 90, log B, like so:

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }


// function assignGrade22() {
//     for ( var i = 60; i<= 100; i+=1){
//             console.log(i + " - " + assignGrade(i))
//     }
// } 

// assignGrade22()



// function Beers(num){
//     for (var i = num; i>0; i-=1){
//         if (i === 2){
//             console.log( i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottle of beer on the wall.")
//     } else if (i===1){
//             console.log( i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down, pass it around, No more bottles of beer on the wall.")
//     } else { 
//             console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall.")    
//         }
//     }
// }
// Beers(10)


