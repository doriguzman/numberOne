/* 1 
Write a function named `addTwoElements` that takes in three arguments: an array, 
and two values to add to that array. 
The function should add those two values to the end of the array.

 

var arr = [1, 2, 3]
addTwoElements(arr, 4, 5);
console.log(arr)
// logs: [1, 2, 3, 4, 5]

*/


function addTwoElements(array1, value1, value2){
    var arr2= array1
    arr2.push(value1,value2)
    return arr2
}

console.log(addTwoElements([1, 2, 3], 4,5))


/* Write a function `withoutLastTwo` that takes an array as an argument 
and returns a copy of the array without the last two elements. If the original 
array is two elements or less, the function should return an empty array.


removeLastTwo(['dog', 'cat', 'bat', 'octopus']); 
// returns ['dog', 'cat']

*/


function withoutLastTwo(array){
    if (array.length<=2){
        return array
    } else {
        return array.slice(0,array.length-2)
    }
}

console.log(withoutLastTwo(['dog', 'cat']))


/* 2 

Write a function `everyThird` that takes an array as an argument 
and returns a new array that contains every third element of the original array.


everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']); 
// returns ['c','f','i']

everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) 
// returns [ 3, 6, 9, 12 ]

*/ 

function everyThird(array){
    newArray= []
    for (var i = 2; i<array.length ; i+=3){
        newArray.push(array[i])
    }
    return newArray
}   

console.log(everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))

/* 4 
Write a function that takes an array as an argument, and returns a copy of 
the array with the last element at the front. 


var arr = [1, 2, 3, 4]
lastToFront(arr); 
// returns [4, 1, 2, 3]

*/ 

function number4(array){
  var newElements= array.pop()
  var newArr= array.splice(0,0,newElements)
  return array
}



//use splice 

console.log(number4([1, 2, 3, 4]))