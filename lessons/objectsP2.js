
// function listItems(recipe){
//     recipe.ingredients = [1,2,3]
//     recipe.available= false
//     var ingredientList= recipe.ingredients.join 
//     recipe['available']=false //using [] means we have to use a string 
// }



// var o1= {
//     name: 'O',
//     type: "pear"
// }
// var o2 = { 
//     name: 'O',
//     type: "pear"
// }

// console.log(o1===o2)//false

/* 
var o1= {
    name: 'O',
    type: "pear"

    to create an empty object :
function copyObject(o){
    var result = {};
    for(var key in o ){
        result [key] = o[key] || USE SETTER to write setters we use the . or the 
                        [] in order to add things into an object; key-->name and o[key]--> value
    }
    return result
}
    */ 


/* 

var o1 = {
    name: 'O',
    type: 'pear'
}
console.log(o1.type)


in order to delte a type you have to do o1.type= undefined

*/



var people = {
    person1: {
        firstName: 'Erika',
        lastName: 'Kim',
        age: 25
    }, 
    person2:{
        age:25,
        firstName: 'Erika', 
        lastName: 'Kim'
    }
}

function ages(p){
    for (var key in p){
        console.log(p[key].age) //key in p is person 1 and person 2 
    }
}

ages(people)






