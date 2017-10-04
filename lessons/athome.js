var name = "Peter"
var uppercase = name.toUpperCase()
console.log(uppercase)


// print it as "PeTEr"
//print as DorIAn 
console.log(name[0] + name[1]+ name[2].toUpperCase()+ name[3].toUpperCase() + name[4])


var lowercase = name.substring(1, (name.length-=3))
//  console.log(name.toUpperCase+ 

console.log(lowercase)


/* 
Create a function called DrEvil. It should take a single argument, an amount, and return 
' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

*/

function DrEvil(number){
    if (number===1000000){ 
        return number + " dollars" + " (pinky)"
    } else {
        return number + " dollars"
    }
}


console.log(DrEvil(2000000))

/* Create a function called verbing. It should take a single argument, a string.
 If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
 in which case it should add 'ly' instead. If the string length is less than 3, 
 it should leave it unchanged. For example:
 */ 

 function verbing(string){
     if (string.length>=3 && string.substring(string.length-3) === "ing"){
        return string + "ly"
    }else if ( string.length>=3){
        return string + "ing"
    } else {
        return string
    }

     }

     console.log(verbing("swimming"))


                    /*function verbing(string) {
                    if (string.length >= 3 && string.indexOf("ing") !== -1) {      // here indexOf searching the entire string for ing
                        return string + "ly"                                       // it it doesnt have it, it is ===-11, so if it does have it
                    } else if (string.length >=3) {                                 // it is not equal to -1
                        return string + "ing"
                    }
                    return string;
                    }
                    console.log(verbing('swim'))
                    console.log(verbing('swimming'))
                    console.log(verbing('go'))
                    */ 
     


/* Create a function getInitString that takes a string as input and 
return a copy of the string without the last letter.
*/

function getInitString(string){
    return string.substring(0,string.length-1)
}

 console.log(getInitString("hello"))


 /*Create a function getLast that takes a string as input, and returns the last letter of that string.
 */

 function getLast(string){
     return string[string.length-1]
 }


 console.log(getLast("hi"))


 /* Create a function capitalLast that takes a string as input, and 
 returns a copy of the string with the last letter capitalized.

capitalLast(jimmy)
// => 'jimmY'

*/


function capitalLast(string){
    var firstFew = string.substring(0,string.length-1)
    var Last = string[string.length -1]
    return firstFew.toLowerCase()+Last.toUpperCase()
}

console.log(capitalLast("bye"))


/* 

Create a function called mixUp. It should take two strings as input, 
and return the concatenation of the two strings (separated by a space), 
swapping the first 2 characters of each.
 You can assume that the strings are at least 2 characters long.

 */

 function mixUp (string1, string2){
    var first = string2.substring(0,2) + string1.substring(2,string1.length)
    var second = string1.substring(0,2) + string2.substring(2,string2.length)
     return first + " " + second
 }

 

 console.log(mixUp("goodbye","hello"))



 //
 
 
 console.log('testing'.slice(4))

 // here slice prints the fourth character until the end of the string

 console.log('Testing'.split('i'))
 /* here split prints test and then ng so it split the word where 
 we put the character in and omitting that character */ 

 console.log("testing".split('t'))
 //same with putting it for t, 



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
    var subNum= number
    var string= ''
    for( var i = number ; i>=0 ; i --){
        if (Math.pow(2,i)< subnumber){
        subNum = subNumber - Math.power(2,i)
        string+=1
        }else {
            string+=0
        }
    }
}