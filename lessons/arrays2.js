var a1= [1,2,3]
var a2= [4,5,6]

function arrayInsert(a1, a2 , where){
    for (var i = 0; i < a2.length; i++){
        a1.splice(where +i, 0, a2[i])
    }
}
arrayInsert(a1, a2, where)
console.log(i)