var readline = require('readline')

var options = 'list, show n , reserve n'

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3,
        amenities: ['washer/dryer', 'wifi', 'cable']
    },
    {
        price: 100,
        location: '11 Delancey, NY',
        maxOccupants: 1,
        amenities: []
    },
    {
        price: 2000,
        location: '1 Park Pl, NY',
        maxOccupants: 2,
        amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
    }
];

// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}
//padTo makes sure that the string is exactly to that length, and if its too short it puts blank spaces at the end 
//if its too long it cuts it off
//padLeft puts spaces to the left 
function whatsAvailable() {
    console.log(
        '#',
        '...',
        padTo('Address', 30),
        ' ',
        padLeft('Price', 8)
    );
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].reserved) {
            continue;
        }
        var counter = i + 1;
        console.log(
            counter.toString(),
            padTo(rooms[i].location, 30), 
            ' ', 
            padLeft(toMoney(rooms[i].price), 8)
        );
    }
}

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(n) {
    var room = rooms[n]
    console.log("Details of Room #" + n+1)// add one to it when we want to show it OR when to make an input we have to subtract
    console.log('--------------\n')
    if(rooms.reserved){
        console.log('[RESERVED]')
    }
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
}

function reserve(n) {
    if( rooms[n].reserved){// dont need an === truw bc already a boolean 
        console.log("Sorry, it's already reserved.") // or can be followed by return here 
    }else{                                          // and then it just has a single '}'
        rooms[n].reserved = true
        console.log('Thank you for reserving')
    }
}

rl.on('line', function(input) {
    // console.log("INPUT", input)
    var inputArr = input.split(' ')
    // console.log("inputArr", inputArr)
    if (inputArr[0] === 'list') {
        whatsAvailable();      // even if you put in rooms, or anything in it; since the function is empty it has any types of parameters, it doesnt care, it ignores them   
    } else if ( inputArr[0]==='show'){
        showDetails(inputArr[1]-1) // remove rooms and the brackets of (rooms[inputArr[1]-1])
    } else if (inputArr[0]=== 'reserve'){
        reserve([inputArr[1]-1])
    }else {
        console.log('Unknown command:' + input)
    } 


    console.log('\n\nSelect one of ['+ options +'] $')
})

console.log('Please chose one of ['+ options +'] $')


//change # of maxx occupants with a command line
//command is occupants 