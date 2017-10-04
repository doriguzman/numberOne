/*
Write a function named `arrLength` that takes in an array as an argument. 
The function should return the length of that array. 

arrLength([1, 2, 3, 3, 2, 1]); 
// returns 6

arrLength(["jets", "mets", "giants", "yankees"]); 
//returns 4
*/

function arrLength(array){
    return array.length
}

console.log(arrLength([1,2,3,4,5]))

/* 
Write a function named `longestArr` that takes in two arrays as arguments. 
The function should compare the length of the two arrays and return whichever array 
is longer (aka whichever array has more values in it). If the lengths of the two arrays 
are equal, then return null.


longestArr([1, 2, 3], [1, 2, 3, 4, 5]); 
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]
*/



function longestArr(arr1,arr2){
    if (arr1.length > arr2.length){
        return arr1
    } else if( arr2.length > arr1.length){
        return arr2
    } else{
        return "null"
    }
}

console.log(longestArr([1, 2, 3,4,5,6], [1, 2, 3, 4, 5]));



/* 
Write a function `middleElement` that takes an array as an argument and 
returns the middle element of that array. If the array has an even number of elements, 
the function should return "Oops, there's no middle..."


middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']);
 // returns 'bat'

middleElement([1, 2, 3, 4, 5]); 
// returns 3

middleElement([1, "hmm", "wat", 4, 5]); 
// returns "wat"

middleElement([1, 2, 3, 4, 5, 6]); 
// returns "Oops, there's no middle"

middleElement(["john", "paul", "george", "ringo"]); 
// returns "Oops, there's no middle"

*/ 

function middleElement(array){
    if(array.length % 2 !==0){
        return array[(array.length-1)/2] 
    } else {
        return "Oops , there's no middle"
    }
}

console.log(middleElement([1, 2, 3, 4, 5,]))


/* 
Write a function `sumArray` that takes as argument an array of 
numbers and returns the sum of all these numbers.

 

sumArray([1, 2, 3, 4, 5, 6])
// returns 21

sumArray([1, 2, 3, 4, 5, -6]) 
// returns 15

*/


function sumArray(array){
    var sum = 0 
    for( var i = 0; i<array.length; i++){
        sum+= array[i]
    }
    return sum 
}
console.log(sumArray([1, 2, 3, 4, 5, -6]))


/* Write a function range that takes two numbers as arguments: min and max.
 The function will return and array with all the numbers, inclusive, between min and max.

range(2, 6)
// => [2, 3, 4, 5, 6]

*/ 


function range ( min, max){
    var array= []
    for (var i = min; i <= max ; i++){
        array.push(i)
    }
    return array
}

console.log(range(2,6))





/* 
Write a function rangeWithStep that takes three numbers as arguments: min, max and step.
 The function will return and array with all the numbers, inclusive, between min and max, 
 , going up in increments equal to step. If no step value is provided, the increment will be 1.

rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]

*/



function rangeWithStep(min,max,step){
    var newArray= []
    if (step===undefined){
        step=1
    }
    for (var i = min; i <= max; i+=step){
    newArray.push(i)
    }
    return newArray
}


console.log(rangeWithStep(4,10))




/* 
Write a function named `doubleTrouble` that takes in an array of numbers as an argument. 
The function should return a new array that doubles every number from the original array. 


doubleTrouble([1, 2, 3]); 
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
*/


function doubleTrouble(array){
    var numbers2= []; 
    for (var i = 0; i<array.length; i++){
        numbers2.push(array[i]*2) 
    } return numbers2
}

console.log(doubleTrouble([1, 2, 3])) 



