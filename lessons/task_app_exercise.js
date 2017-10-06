/*
Level 1

When the user types any text and presses <enter>, create a new task object with the text as description, 
and the completed value false. Add the new task object to the list and log all tasks. 

0. walk dog. Completed: false.

1. wash cat. Completed false.

*/



// var readline = require('readline')


// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })


// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }


// function createTask(description){
//     var task = { 
//         description: description,
//         completed: false
//     }
//     return task
// }



// var tasks = []

// rl.on('line', function(input) {
//     var array = input.split(' ')
//     var newArray = array.slice(1)
//     var string = newArray.join(' ')
//     if (array[0].toUpperCase() === 'ADD')
//         console.log(createTask(string))
//     })

// console.log("Add a task")










/*

Level 2

Modify your code so that it only adds a new task when the first word the user types is 'ADD'.  The new task's description will be everything after the word ADD. For example, if the user types:

ADD buy milk

The new task will have description 'buy milk' and completed: false.

If the first word is not `ADD`, the program will ignore the input or display an explanatory message. 

*/

// var readline = require('readline')


// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })


// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }


// function createTask(description){
//     var task = { 
//         description: description,
//         completed: false
//     }
//     return task
// }



// var tasks = []

// rl.on('line', function(input) {
//     var array = input.split(' ')
//     var newArray = array.slice(1)
//     var string = newArray.join(' ')
//     if (array[0].toUpperCase() === 'ADD')
//         tasks.push(createTask(string))
//         console.log(tasks)
//     })

// console.log("Add a task")


/*  Level 3

Add a toggle command, so that when the user writes:

toggle [id] 

The task with that id will have its `completed` status toggled. 
The id will be equal to the index position of the task in the array.

*/ 


// var readline = require('readline')


// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

//var options = 'all, active, completed, toggle';

// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }


// function createTask(description){
//     var task = { 
//         description: description,
//         completed: false
//     }
//     return task
// }



// var tasks = []

// rl.on('line', function(input) {
//     var array = input.split(' ')
//     var newArray = array.slice(1)
//     var string = newArray.join(' ')
//     if (array[0].toUpperCase() === 'ADD')
//         tasks.push(createTask(string))
//         console.log(tasks)
//     })
//     if 

// console.log("Add a task")


var readline = require('readline')

var option = 'all, active, completed, toggle';


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}


function createTask(description1, completed1){
    var task = { 
        description: description1,
        completed: completed1
    }
    return task
}


function tasksNotCompleted(tasks){
    for (var i = 0; i < tasks.length; i ++){
        if (tasks[i].completed === false) {
      console.log((i + 1) + '. ' + tasks[i].description + '. Active: ' + tasks[i].completed)
    }
  }
}

function tasksCompleted(tasks){
    for (var i = 0; i < tasks.length; i ++){
        if (tasks[i].completed === true) {
      console.log((i + 1)  + '. ' + tasks[i].description + '. Completed: ' + tasks[i].completed)
    }
  }
}

function showAll(task){
    for (var i = 0; i < tasks.length; i ++){
      console.log((i + 1)  + '. ' + tasks[i].description + '. Completed: ' + tasks[i].completed)
  }
}



function toggleCompleted(index) {
  if (tasks[index-1].completed === true){
        tasks[index-1].completed = false
  } else if (tasks[index-1].completed === false){
      tasks[index-1].completed = true
  }
  return tasks
  }

  

var tasks = []

rl.on('line', function(input) {
    var array = input.split(' ')
    //console.log(array)all
    var description = array.slice(1, array.length);
   // console.log(description)
    // var completed = array[array.length-1];
    var description1 = description.join(' ')
    
    
    if (array[0].toUpperCase() === 'ADD'){
        tasks.push(createTask(description1, false))
        showAll(tasks)
    } else if (input === "all"){ 
        showAll(tasks)
    } else if (input === "active"){
        tasksNotCompleted(tasks)
    }
    if (input === "completed"){
    tasksCompleted(tasks)
}
        
    if (array[0] === 'toggle'){
        toggleCompleted(array[1])
        showAll(tasks)
    }

    })
console.log( 'please add a task and if it was completed')


console.log('Please choose one of[' + option + ']$')





/* 

 Level 4

Add a show command with three options 1. all 2. active 3. completed.

1. When the user writes show all the program will display all tasks, as usual.

2. When the user writes show active the program will display only the tasks with 
completed property set to false.

3. When the user writes show completed the program will display only the tasks 
with completed property set to true.
*/ 




// var readline = require('readline')

// var options = 'all, active, completed';


// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })


// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }


// function createTask(description1, completed1){
//     var task = { 
//         description: description1,
//         completed: completed1
//     }
//     return task
// }


// function tasksNotCompleted(tasks){
//     for (var i = 0; i < tasks.length; i ++){
//         if (tasks[i].completed === "false") {
//       console.log((i + 1) + '. ' + tasks[i].description + '. Active: ' + tasks[i].completed)
//     }
//   }
// }

// function tasksCompleted(tasks){
//     for (var i = 0; i < tasks.length; i ++){
//         if (tasks[i].completed === "true") {
//       console.log((i + 1)  + '. ' + tasks[i].description + '. Completed: ' + tasks[i].completed)
//     }
//   }
// }

// var tasks = []

// rl.on('line', function(input) {
//     var array = input.split(' ')
//     //console.log(array)all
//     var description = array.slice(1, array.length-1);
//    // console.log(description)
//     var completed = array[array.length-1];
//     var description1 = description.join(' ')
    
    

//     if (array[0].toUpperCase() === 'ADD')
//         tasks.push(createTask(description1, completed ))
    
//     if (input === "all"){ 
//         console.log(tasks)
//     }
//     if (input === "active"){
//         tasksNotCompleted(tasks)
//     }
//     if (input === "completed")
//     tasksCompleted(tasks)
// }) 
// console.log( 'please add a task and if it was completed')


// console.log('Please choose one of[' + options+ ']$')
