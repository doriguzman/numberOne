// // var num1= 2
// // var num2= 4
// // var larger_number = num2>num1

// // if (num1>num2){
// //     console.log('The greater number of' + num1 + 'and' + num2 + "is " num1)
// // } else {
// //     console.log
// // }

// // var en= "Hello World"
// // var es = "Hola Mundo"
// // var de = "Hallo Welt"

// // if (en) {
// //     console.log( en + "World")


// var animal = "Cat"
// var number = 5 

// if (number>1){
//     console.log( animal + "s")
// } else {}
//     console.log( animal)
// }

// var num= 2
// if (num % 2 === 0 ){
//     console.log(num + " is even"
// } else {
//     console.log( num + "is odd")
// }


// var num = 7 
// if (num >=0){
//     console.log
// }


function square (num) {
    return num * num
}
function half(num) {
    return num / 2
}

function percentOf(num1,num2) {
    return num1/num2 *100
}

function areaOfCircle (radius) {
    return Math.Pi * radius * radius
}

function doStuff(num) {
    var sq= square(num)
    var numhalf = half(sq)
    var areaOf1=areaOfCircle(numhalf)
    var result= percentOf1(sq,areaOf1)
    return result
}
console.log(dostuff(5))