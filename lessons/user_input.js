/* Question 1

1 pts
Write a program that reads the user input one line at a time. 
Every time the user inputs a new line, the program will show all the lines that have been input before.

 

Hint: Use a variable to keep track of the input.
*/ 


// var readline = require('readline')

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }


// var str = ''
// rl.on('line', function(input){
  
// str+= input + '\n'
// 
// console.log(str)

// })
// console.log("insert an input")



/*another way to do it is : 

var history = []
rl.on('line', function(input){
    history.push(input)
    console.log(history.join('\n'))
})

*/ 


/////////////////

/*Question 2 

Write a program that reads the user input one line at a time. 
After each input the program will log the sum of all numbers that the user had input. 
If the input is not a number the program will ignore it.


*/ 

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

var counter = 0;
rl.on('line', function(input){
  var num = Number(input)
  if (isNaN(num)){
    counter+=num 
  }
  console.log(counter) 
  })
console.log("insert an input")



/////


var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}


function sumStringArr(arr){
    var counter = 0 
    for(var i = 0; i<arr.length; i++){
        if (!isNan(arr[i])){
        var num = Number(arr[i])
        counter += num ; 
        }
    }
}


var sum = 0;
rl.on('line', function(input){
    var inputArr =input.split(' ')
    var sum= sumStringArr(inputArr)
  if (!isNaN(input)){
    sum+=Number(input)
  }
  console.log(sum) 
  })
console.log("insert an input")
