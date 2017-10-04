// var text = "Hello Monday"

// for 





// var name = "Dorian Guzman▲▲"
// console.log(name.length-1)

// var name2 = "Dorian Guzman 😀" // emojis account for 2 characters 
// for ( var i=0; i<name2.length; i++){
//     console.log(name2[i])
// }




// var firstName= "Dorian";
// var lastName= "Guzman";

// function fullName(firstName,lastName){
//     return firstName + " " + lastName;
// }

// console.log(fullName(firstName,lastName))


// var str= " "
// var num = 5 

// for (var i = 1 ; i<=num ; i++)
//     str += i  //what if we dont want comma at the end of 5 
//  //

//  for   (var i = 1 ; i<=num ; i++)
//     if (i<num){
//         str += ","
//     }

//     str+=1
// console.log(str)




// var str = " "
// var num = 5

// for (var i =1; i<= num; i++){
//     var sequence = ""
//         for(j=1; j<= i;j++, sequence+= ", "){
//         sequence += j 
//         }
// //         console.log(i + "   "+ sequence)
// // }


// var str = ''
// var num = 5

// for (var i = 1; i <= num; i++) {
//     if (i > 1) {
//         str += ', '
//     }
//     str += i;
//     console.log(i + ' ' + str);
// }




// var str = ''
// var num = 7

// for (var i = 1; i <= num; i++) {
//     if (i > 1) {
//         str += ', '
//     }
//     str += i;
//     console.log(i + ' ' + str);
// }




// 1 1 BLAST OFF
// 4 4,3,2,1, BLAST OFF
// 7 7,6,5,4,3,2,1, BLAST OFF 


        // var str 
        // var num = 10
        
        // for (var i = 1; i <= num; i+=3) {
        //     str = ''
        //     for (var j = i; j > 0; j--) {
        //         if (j < 1) {
        //             str += j
        //         }
        //         str += j + ', ';
        //     }
        //     console.log(i + ' ' + str + ' Blast Off');
        // }


        // var name = "Andre"
        // console.log(name[(name.length-1)/2]);
        var list;
        var num = 7
        
        function joinList(n) {
            str = ''
            for (var j = n; j >= 1; j--) {
                if (j < n) {
                    str += ', '
                }
                str += j;
            }   
            return str + " " + "Blast Off"
        }
        
        for (var i = 1; i <= num; i += 3) {
            list = joinList(i);
            console.log(i + ' ' + list);
        }



        var name = 'andre'
        // name[0] = name[0].toUpperCase()
        console.log(name)

        // We cannot change the original strings, but what we can do is add them slice and log it into new variables to make 
        // new strings  

        name+= 'the king'


        var name = 'alice'
        console.log(name)

        var capitalized = name[0].toUpperCase()+name.slice(1)

        console.log (capitalized)



        //
        var fullName = "bobby flay";

        function nameCase(name){

        }

        console.log(nameCase('bobby flay'));
        // Bobby Flay

        console.log(nameCase("Gordon Ramsey"));
        //Gordon Ramsey



        function nameCase(name){
            var space = name.indexOf('');
           return name[0].toUpperCase()//B
            + name.slice(1, space +1)//obby
            + name[space+1].toUpperCase()//F
            +name.slice(space+2);//lay
        }
        console.log(nameCase('bobby flay'));

        //indexOf('') is looking for a space in the string name 
        

        function nameCase(name){
            var n = name.toLowerCase()
            var space = name.indexOf(' ');
            return n[0].toUpperCase()
            +n.slice(1,space+1)
            + n[space+1].toUpperCase()
            + n.slice(space +2)
        }

        console.log(nameCase('DRE'));
        // DRE==DDRE

       

        function nameCase(name){
            var theRest= name.toLowerCase();// firstly barack hussein obama 
            var space = theRest.indexOf(' ');// looking for a space so tells us to uppercase stuff here
            var result= ''; 

            while (space!==-1){// !==1 means that it is found 
                var part1= theRest.slice(0,space+1);//Barack 
                theRest= theRest.slice(space+1 );
                result += part1[0].toUpperCase() + part1.slice(1);
                space = theRest.indexOf(' ');// here it looks for the space again 

            }
            result+=theRest[0].toUpperCase()+ theRest.slice(1);
            return result; 

        }

        console.log(nameCase('BARack Hussein Obama'))
        // Barack Hussein Obama


        