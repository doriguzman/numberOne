/* Write a function `XO` to check to see if a string has the same 
amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
The string can contain any characater.

XO("ooxx")    // returns true
XO("xooxx")   // returns false
XO("ooxXm")   // returns true
XO("zpzpzpp") // returns true because zero 'x's and 'o's are present
XO("zzoo")    // returns false
*/



var countX= 0 
var countO = 0
function XO(string1) {
    var string = string1.toLowerCase()
    for( var i = 0; i <= string.length;i++ ){
        if (string[i]==="x"){
            countX +=1
        }else if(string[i] ==="o"){
            countO +=1
        }
    }       if (countX === countO){
            return true
            } else{
                return false
            }
}

console.log(XO("Xxoo"))


/* Write a function `isPalindrome` that receives a string and returns true if 
the string is a palindrome and false if it is not a palindrome. 

isPalindrome("racecar") // returns true 

isPalindrome("tattarrattat") // returns true 

isPalindrome("dog") // returns false
*/

var backWards = ""
function isPalindrome(string){
    for ( var i = string.length-1; i >=0; i--){
        backWards+=string[i] 
        }  return backWards === string
}

console.log(isPalindrome("racecar"))




    /* another way to write this  function is basically comparing if the letters from the word
    is equal to the letter backwards. 
    */

    function isPalindrome(word){                //ex: racecar 
        for (var i = 0; i < (word.length-1)/2 ; i++){
            if (word[i] !== word[word.length-1 - i]){
                return false; 
            }
        }           
        return true;
    }

//  i   word        world.length-1-i        word[0]     word[word.length-1-i]
//  0   racecar     6                       r           r
//  1   racecar     5                       a           a
