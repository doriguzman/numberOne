/* Write a function that takes a decimal number as argument 
 and returns a string with the binary representation of the number. 

decimalToBinary(5) // => "101"
decimalToBinary(8) // => "1000"


2,6 ; 64
2,5 ; 32
2,4; 16
2,3; 8
2,2 ; 4
2,1; 1


*/

function prob3(number){
    var string= ''
    for( var i = number ; i>=0 ; i --){
        if (Math.pow(2,i)<= number){
        number = number - Math.pow(2,i)
        string+=1
        }else {
            string+=0
        }
    }
    return string
}

console.log(prob3(8))


/* 
Write a function that takes as argument a string with the binary representation of a number, 
and returns the decimal representation of the number (as a number).

binaryToDecimal("101") // => 5
binaryToDecimal("1000") // => 8
*/


function binaryToDecimal(string){
    var number = 0
    for (var i = string.length-1 ; i>= 0 ; i--){
        if (string[i]==="1"){
            number += Math.pow(2,i)
        }
    return number
    }
}
console.log(binaryToDecimal("1001"))


/*
function binaryToDec(binaryStr){
  var toAdd = 1;
  var decimalNum = 0;
  for (var i = binaryStr.length - 1; i >= 0; i -= 1){
    if (binaryStr[i] === "1"){
      decimalNum += toAdd;
    }
    toAdd *= 2;
  }
  
  return decimalNum;
}
*/