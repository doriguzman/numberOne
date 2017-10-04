// var o = {quantity:56, name: 'Gala'}

// console.log(o.name)

// var apple1= {quantity:56, name: 'Gala'}
// var apple2= {quantity:99, name: 'Granny Smith'}
// var apple3= {quantity:1, name: 'Pink Delicious'}

// console.log(apple3.quantity)


// // var apples= [
// //     {quantity:56, name: 'Gala'},
// //     {quantity:99, name: 'Granny Smith'},
// //     {quantity:1, name: 'Pink Delicious'}
// // ]

// // function howmanyApples(a){
// //     var total= 0;
// //     for (var i = 0; i < a.length; i++){
// //         total += apple[i].quantity;
// //     }
// //     return total;
// // }

// // console.log('Number of apples:', howmanyApples())



var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3, 
        amenities:['washer/dryer','wifi', 'cable']
    },
    {
        price:100,
        location:'11 Delancy, NY',
        maxOccupants: 1,
        amentities:[]
    },
    { 
        price:2000,
        location:'1 Park Pl, NY',
        maxOccupants:2,
        amentites:['pool', 'valet', 'butler', 'chef']
    }
];

function whatsAvailable(rooms){
    for (var i = 0;i < rooms.length ; i++) {
        console.log(rooms[i].location, " ", rooms[i].price);
    }
}

whatsAvailable(rooms)



//make the string exactly as long as len 


function padTo(str, len){
    if (str.length>len){
        return str.slice(0,len-3)+ '...'
    }else if (str.length ===len){
       return str;
   }else{
       var spacesNeeded= len - str.length;
       for (var i = 0; i< spacesNeeded; i++)
       str += '';
   }
   return str;  
}


function whatsAvailable(rooms){
    for (var i = 0;i < rooms.length ; i++) {
        console.log(
            padTo(rooms[i].location,20),
            '', 
            rooms[i].price);
        }
    
}

whatsAvailable(rooms)


function showDetails(rooms){
    console.log('Location:' , rooms.location)
    console.log('Price:' , rooms.price)
    console.log('Max Occupancy:' , rooms.maxOccupants)
    console.log('Amenities:' , '\n-'  +  rooms.amenities.join('\n-'))

}

console.log('------')
var selected = 0 // need to access the object
showDetails(rooms[selected]);


