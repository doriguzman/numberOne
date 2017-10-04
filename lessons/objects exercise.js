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
 var recipe1= {
     name: 'mole',
     servings: 2, 
     ingredients: ["cinnamon","cumin","cocoa"]
 }

 function recipe(){
    for (var key in recipe1)
        console.log(key + "" + recipe1[key])
 ]
recipe()
