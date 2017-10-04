/* so we have a range of (1,5) and we want to fit this range into an array 
while doing loops*/

function range(min, max){
    var arr= [];
    for( var i = min; i<= max; i++){
        arr.push(i)
    }
    return arr;
}

function sumArr(arr){
    var sum = 0;
    for (var i = 0; i< arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}

function sumOfRange(min, max){// call a function(s) within a function
    var arr = range(min,max)
    var sum = sumArr(arr)
    return sum; 
    // return sumArr(range(min,max)); 
}
console.log(sumOfRange(1,5)); 


//////////////////////


function add1(num){
    return num + 1;
}

function add2(num){
    return add1(add1(1))// if num =1 than the inner add 1 returns 2 and then the outer add1= 3 
                        // add1(add1(add1(1)))= add1(add1(2))= add1(3)= 4 
}

function add3(num){
    return add1(add2(num))
}

function add4(num){
    return add1(add3(num))
}

function add5(num){
    return add1(add4(num))
}


console.log(add5(1))


/*The concat array method is used to merge two (or more) arrays. 
Write a removeDupes function that takes an array as an argument and returns a copy
 without any duplicate elements. Then, write a function concatAndRemoveDupes  that 
 combines two arrays and removes any duplicates.

Hint: Use the array method includes (Links to an external site.)Links to an external 
site. to check if an element is in an array.



removeDupes([1,1,2,1,2,3,3]) // Should return [1,2,3]

var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];

removeDupes(arr1.concat(arr2))// Should return [1, 2, 3, 4]
concatAndRemoveDupes(arr1,arr2) // Should return [1, 2, 3, 4]

*/





function removeDupes(arr) {
    var arr2 = []
    
    for (var i = 0; i < arr.length; i++)  {
        if (arr2.includes(arr[i])) {
        } 
        else {
          arr2.push(arr[i])
        }
    }
    return arr2
}
console.log(removeDupes([1,1,2,1,2,3,3]))

function concatAndRemoveDupes(arr, arr2) {
    return removeDupes(arr.concat(arr2))
}
console.log(concatAndRemoveDupes([1,1,2,1,2,3,3], [2,3,4]))

/* 
Given a list of grades, we can get the median grade by sorting the 
list and taking the middle element, or the average of the two middle elements. 
Create the functions sort and middleElement, and then use them to create the functions median.

var grades = [91, 85, 100, 92, 88]

console.log(median(grades)) // Should log 88

*/ 

var grades =  [91, 85, 100, 92, 88]

function compareNumbers(a, b) {
    return a - b;
  }

  grades.sort(compareNumbers(a,b)){
      return a - b
  }



console.log(sort([91, 85, 100, 92, 88]))




