
var grades = [91, 85, 92, 88, 100, 99]


function sort (array) {
    return array.sort(function (a, b) { 
        return a - b 
    })
}
console.log(sort(grades))

function middleElement(array){
    return array[Math.floor(array.length/2)]
}
console.log(middleElement(grades))

function median(array) {
    return (middleElement(sort(array)))
}

console.log(median(grades))



//////////////////////////////

var forEachElem = function (arr, initialValue, callback) {
    var t = initialValue;
    for (var i = 0; i < arr.length; i++) {
      t= callback(arr[i], t);
    }
    return t 
}

var add = function(a,b) {
    return a +b
}

console.log(forEachElem ([5,5,3],0,add))// gives us 13




//////


function logEachElement(array){
     console.log(array)
}

function forEachElement( array, callback){
    for (var i =0; i < array.length; i++){
        callback(array[i])
    }
}

forEachElement([1,2,3,4,5], logEachElement)


///// #2

function forEachElement( array, callback){
    for (var i =0; i < array.length; i++){
        callback(array[i])
    }
}

function logArrTypes(array){
   console.log( array + " is a " + typeof(array))
}


forEachElement([1,"cat" , true], logArrTypes)


//#3

var seconds = 0 

function secondsPassed(){
   console.log(seconds += 1)
}

setInterval(secondsPassed, 1000)


///////#4 

function conservativeSpender(balance){
    return balance >100
}

function liberalSpender(balance){
    return balance>10
}

function horribleSaver(balance){
    return balance>0 
}

function shouldIBuyThis(balance, callback){
    if (balance >100){
        console.log("Sure, I have the money")
    }else if (balance<100 && callback=== conservativeSpender ){
        console.log("Nope, I don't have the money")
    }
        else if( balance<10 &&  callback=== liberalSpender){
            console.log('Nope I dont have the money')
        } else if( balance <=0 && callback===horribleSaver){
            console.log('Nope!, I got to keep my savings up!')
        }else{
            console.log("Sure, I have the money!")
        }
           
    }

    shouldIBuyThis(0, horribleSaver)