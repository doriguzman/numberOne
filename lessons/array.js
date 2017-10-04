var arr= [2, 3, 4, 7 , 11] 
//this give us a list 


var arr2= ["a", "b", "c", "d" , "e"] 
console.log(arr2);

var arr3= ["a", 1, "c", 3 , "e"] 
console.log(arr3)

//or what we could do is 

console.log(arr3[2])
// this prints a specific index in the array 


for (var index = 0; index<arr3.length; index++ ){
    var element = arr3[index];
    console.log(element);
}

// slice basically is taking between an index up until the last inex that we specify

//splice is basically a method where we can tell what characters we want to cut out of the array 

var array= ["a", 1, "c", 3 , "e"] 
var array2 = array.splice(2,2)


console.log(array)// when we console.log the original array we see that it cut out the spliced part
console.log(array2)/* when we console.log the new var of the array we can see WHAT characters we took out 
                        that being the first index --a -- out of .splice(a,b,c); b is up to what 
                        character that we spliced out do we want to see  */




function deepEquals(arr1,arr2){
    if (arr1.length!==arr2length){
        return false;                       //checks if the array lengths are not the same
    }
    for (var i = 0; i < arr1.length; i++){
        if( arr1[i]!== arr2[i]){
            return false;
        }
    }
    return true
}

var arr1 = [2, 3, 4]
var arr2 = [2, 3, 4]
console.log(deepEquals(arr1 === arr2))




var arr = [1,2,3]
arr.push([4,5,6]) // this would make [ 1, 2, 3, [ 4, 5, 6 ] ] which is actually 4 elements when console.log(arr)
                    // if it was arr.push(4,5,6) NO PARENTHESIS it would be 6 elements when console.log(arr)
console.log(arr)



function arrayInsert(a1,a2,where{
        for (var i = 0; i<a2.length; i++){
            a1.splice(where +i, 0, a2[i])
        }
}
arrayInsert(arr1,arr2,where)
console.log(i)