/*Create an object to hold information on your favorite recipe. 
It should have the following properties: title, number of servings, 
and ingredients (an array). Create a function that logs the recipe information, so it looks like this:
name: Mole
servings: 2
ingredients: cinnamon,cumin,cocoa
 
Now change the function to log each ingredient on a separate line:
name: Mole
servings: 2
ingredients:
cinnamon
cumin
cocoa


*/


// var recipe1= {
//     name: 'mole',
//     servings: 2, 
//     ingredients: ["cinnamon","cumin","cocoa"]
// }

// function recipe(){
    // for (var key in recipe1)

//     console.log( "name:" , recipe1.name)
//     console.log("servings:" , recipe1.servings)
//     console.log("ingredients:" , recipe1.ingredients.join())
// }

// recipe()



// var recipe1= {
//     name: 'mole',
//     servings: 2, 
//     ingredients: ["cinnamon","cumin","cocoa"]
// }

// function recipe(){
//     console.log( "name:" , recipe1.name)
//     console.log("servings:" , recipe1.servings)
//     console.log("ingredients:" , '\n'+ recipe1.ingredients.join('\n'))
// }

// recipe()



/* 
Create a function prettyLog that logs a recipe information. 
A recipe is an object to that has the following properties: title, number of servings,
 and ingredients (an array). The output should look like this: (make sure there 

name: Mole
servings: 2
ingredients: cinnamon > cumin > cocoa

*/ 

// var recipe2 = {
//     name: 'Mole',
//     servings: 2,
//     ingredients: ["cinnamon", "cumin", "cocoa"]
// }

// function question2(){
//     console.log("name:" , recipe2.name)
//     console.log("servings:", recipe2.servings)
//     console.log( "ingredients:" , recipe2.ingredients.join('>'))
// }

// question2()


/* 
Write a function getProps that takes an object as an argument and returns all 
the keys of that object in an array.

 

var cat = {
  family: 'Felidae',
  genus: 'Felis',
  species: 'Catus' 
}

getProps(cat)
// will return ['family', 'genus', 'species']

*/



// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
// } 

// function getProps(object){
//     var array = []
//     for (var key in object){
//     array.push(key)
//     }
//     return array
// }

// console.log(getProps(cat))

/*Write a function getObjLength that returns the length of an object. 
For this exercise, the length is the number of properties the object has.

 

var cat = {
  family: 'Felidae',
  genus: 'Felis',
  species: 'Catus' 
}

getObjLength(cat)
// will return 3
*/

// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus',
//     colors: 'blue'
//   }
  
// function getObjLength(object){
//     var array = []
//     for( var key in object){
//         array.push(key)
//     }
//     var counter = 0
//     for (var i = 0; i<array.length; i++){
//         counter += 1 
//     }
//     return counter
// }

// console.log(getObjLength(cat))


/* 

Create an array of films, where each film has the following properties: title, director, 
and a boolean indicating if you started watching it. Create a function that iterates over the array 
and logs the title and director for each film. Like this:

Wonder Woman, directed by Patty Jenkins
Inception, directed by Chrisopher Nolan

Now Change the output depending on whether the film was watched. If it was watched, log a string like


You already watched "Wonder Woman" directed by Patty Jenkins


and if not, log

You still need to watch "Wonder Woman" by director Patty Jenkins. 

*/

// var films= [
//     { 
//         title: "Wonder Woman",
//         director:"Patty Jenkins",
//         started: true
//     }, 
//     { 
//         title: "Inception",
//         director: " Christopher Nolan",
//         started: false 
//     }
// ]

// function listAll(f){
//     for (var key in f){
//         if ( f[key].started === false){
//             console.log("you still need to watch " + f[key].title + " by director " + f[key].director )
//         } else {
//             console.log( "you already watched " + f[key].title + " directed by " + f[key].director)
//     }
// }
// }

// listAll(films)


// function listAll(f){
//     for (var key in f){
//         console.log( o[key].title + "is directed by "+ o[key].director)
//     }
// }


    // console.log(listAll(films))


    /* o[key] is talking about the index of the array that holds the objects
    o[key].key goes into the actual key */





    /*

    Let's put everything together by building a small todo list program. Here are the steps:

Decide what each todo task will look like: create a javascript object with at minimum the properties description and completed
Create a todos array to hold all todo objects.
Create a function that adds a todo to the todos array.
Create a function that shows all todos.
Create function that marks a todo as completed (based on the index number).

*/


var toDo = [
    {
        description: "shower",
        completed: "yes"
    }, 
    { 
        description: "moisturize",
        completed: "no"
    }, 
    { 
        description: "sleep",
        completed: "no"
    }
]

function add( newDescription, newCompleted){
    toDo.push({
        description: newDescription,
        completed: newCompleted
    })
}

// add("dream" , "no")
// console.log(toDo)

function showCompleted(object){
    for (var key in object){
        if (object[key].completed ==="yes"){
            console.log(object[key].description + " is completed")
        }else if (object[key].completed ==="no")
            {
            console.log(object[key].description + " is not completed")
            }
        
        }
    }

    showCompleted(toDo)