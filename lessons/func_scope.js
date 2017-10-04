// var double = function (num){
//     return num + num
// }

// console.log(double (2)) 

// var func = function (num){
//     return num * 3 
// }
// console.log(func(10))
// }

// var myNumber

// function times3(num){
//     myNumber = num *3 
//     return 'hello'
// }

// console.log(times3(10))
// console.log(myNumber)


// // var myNumber
// function times3 (num){
//     var myNum = num *3 
//     return 'hello'
// }

// console.log(times3(10))
// console.log(myNumber)

// Global Scope
// var myNumber = 2
// function incGlobalNum(){
//   myNumber += 1
// }

// incGlobalNum()
// console.log(myNumber)
// incGlobalNum()
// console.log(myNumber)


// Local Scope

// function incLocalNum(){
//     var localNum = 2
//     localNum += 10 
//     console.log(localNum)
// }

// console.log(incLocalNum())



// function getLocalNum(){
//     var localNum=2
//     localNum += 10
//     return localNum
// }
// console.log(getLocalNum())// 12
// console.log(getLocalNum())//12

// var num = 2 
// function incNum(){
//     num += 10
//     return num 
// }
// console.log(incNum()) // 12
// console.log(incNum()) //22
// console.log(num)//22 

// var num = 2 
// function incNum(){
//     var num = 2
//     num += 10
//     return num 
// }
// console.log(incNum()) // 12
// console.log(incNum()) //12
// console.log(num)//2

// function add(num1, num2){
//     return num1+num2
// }

// console.log(add(2,3))//5


// function add (num1, num2){
//     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
//     console.log('numbers only please')
//     }
//     return num1 + num2 
// }
// console.log(add( 2,'cat'))

// function add (num1, num2){
//     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
//     console.log('numbers only please')
//     }
//     return num1 + num2 
// }
// console.log(add( 2,4))


// function add (num1, num2){
//     if (typeof num1 !== 'number' || typeof num2 !== 'number'){
//     return 'numbers only please'
//     }
//     return num1 + num2 
// }
// console.log(add( 2,giraffe))
// // this will print numbers only please and thats it because its the end of the function 




// function power(num){
//     return num *num * num 
// }
// console.log(power(3))

// //ORRRRRR
// function power(num){
//     return Math.power(num, 3)
// }
// console.log(power(3))//9 



// function larger(num1,num2)
//     if (num1>num2){
//         return num 1
//     }

function getDogAge (dog_Humanage){
    return dog_Humanage * 7
}

console.log(getDogAge(5))