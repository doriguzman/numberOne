/*
Write a counter program that reads the user input one line at a time.
 The count would be initially zero. The app will start by displaying the count and prompting the user for input.
  valid input strings are: 'inc', 'dec', 'res'. 
  The user input may be in uppercase, lowercase, or any combination 
  of the two.
On input of 'inc' and 'dec', the counter will be incremented / decremented by 1. On input of 'res'  
  the counter will be reset. Following each of these, the new count will be displayed, followed by a relevant message
   (e.g. 'the counter has been incremented') followed by a prompt to the user for more input.

   */ 

//   var readline = require('readline')

//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

//   var counter = 0 
//   rl.on('line', function(input) {
//         var newInput = input.toLowerCase()
//         if (newInput === "inc"){ 
//         counter++
//         } else if ( newInput === "dec"){
//         counter -=1
//         } else if( newInput === "res"){
//              counter = 0 
//         }
//     console.log(counter)
//   })

//   console.log("insert an input")


   

 /* var num = Number(input)
  having to write an if statement 
   if (!isNaN(num)){
      counter+=num 
  }else if (input === "inc"){ 
      counter++
  } else if ( input === "dec"){
      counter --
  } else if( input ==="res")
    counter = 0 
}
return counter
  })
  */ 


  //#2 

  /*Write a program that reads the user input one line at a time. It would expect the user input to start with one of four mathematical 
  symbols: + - * / followed by two numbers, separated by spaces. For example: + 4 2 . The program will perform the desired mathematical 
  operation (addition, subtraction, multiplication or division) and log the result. The program will display an explanatory message if:
  
  1. the operation is invalid.
  
  2. The operation is not followed by the expected two numbers (with spaces)
  
  For example, if the user enters: * 2 3 the program will log 6.

*/


// var readline = require('readline')

//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

// function add(num1, num2){
//     console.log( num1+num2)
// }

// function subtract(num1, num2){
//    console.log( num1 - num2)
// }

// function multiply(num1, num2){
//     console.log(  num1 * num2)
// }
// function division(num1, num2){
//     console.log( num1/num2)
// }
//   rl.on('line', function(input) { //+ 4 5 
//       var arr = input.split(' ')
//       var num1= Number(arr[1])
//       var num2 = Number(arr[2])
//     if (arr[0] === "+"){
//          add(num1,num2)
//       }else if (arr[0]==="-"){
//           subtract(num1,num2)
//       }else if (arr[0]==="*"){
//            multiply(num1,num2)
//       }else if (arr[0]==="/"){
//           division(num1,num2)
//       } else{
//           console.log("There is an error")
//       }
//         console.log(arr)
//       })
// console.log("insert an operator and an input")
    
    
    
/*


Write a program that reads the user input one line at a time. 
It would expect the user input to start with one of four mathematical 
symbols: + - * / followed by numbers, separated by spaces. For example: + 2 4 2 .
 The program will perform the desired mathematical operation 
 (addition, subtraction, multiplication or division) on all the numbers, 
 from left to right, and log the result . The program will display an 
 explanatory message if:

1. the operation is invalid.

2. The operation is not followed by at least two numbers (with spaces)

For example, if the user enters:- 6 5 1 2 the program will log -2 (= 6 - 5 - 1 - 2).


*/

var readline = require('readline')

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

function add(num1, num2, num3, num4){
    console.log( num1+num2+ num3 + num4)
}

function subtract(num1, num2, num3, num4){
   console.log( num1 - num2 - num3 - num4)
}

function multiply(num1, num2, num3, num4){
    console.log(  num1 * num2 * num3 * num4)
}
function division(num1, num2, num3, num4){
    console.log( num1/num2/num3/num4)
}
  rl.on('line', function(input) { //+ 4 5 
      var arr = input.split(' ')
      var num1= Number(arr[1])
      var num2 = Number(arr[2])
      var num3= Number(arr[3])
      var num4= Number(arr[4])
    
      var newArray2= arr.slice(1)
    if (arr[0] === "+"){
         add(num1, num2, num3, num4)
      }else if (arr[0]==="-"){
          subtract(num1, num2, num3, num4)
      }else if (arr[0]==="*"){
           multiply(num1, num2, num3, num4) 
      }else if (arr[0]==="/"){
          division(num1, num2, num3, num4)
      } else if( arr.length<1){
          console.log( "We need at least two numbers")
      } else{
          console.log("There is an error")
      }
     
        newArray2.push(")")
        newArray2.splice(0,0,"(=")

        console.log(newArray2)
        var newArray3 = newArray2.join(' ')
        console.log(newArray3)
      })
console.log("insert an operator and an 4 inputs")

// we want to take it from the second index and start adding the plus signs right after before [i] =1
    
    
//For example, if the user enters:- 6 5 1 2 the program will log -2 (= 6 - 5 - 1 - 2).




/// work for # 3 is not right, 