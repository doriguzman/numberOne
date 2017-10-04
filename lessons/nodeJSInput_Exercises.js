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

  var readline = require('readline')

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  var count = 0 
  rl.on('line', function(input) {
        var new = input.toUpperCase()
        if (new === "inc"){ 
        counter++
        } else if ( new === "dec"){
        counter --
        } else if( new === "res")
             counter = 0 
             
  })


   

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
