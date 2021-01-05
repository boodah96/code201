
'use strict'

var username = prompt('What is your name?');
console.log('your name : '+ username);
alert('Hello '+username+' and welcome in my website ')

var correct=0;

console.log('my name is Abdalrhman');
console.log('I have 24 years');
console.log('I am a Civil Engineer');
console.log('I am a member at JEA');
console.log( 'I live in Irbid');
console.log( 'I bought 3 cars in my life');
console.log( 'My favorite sports: basketball,football and tennis');


var myname = prompt('Is my name Abdalrhman?');

if (myname.toLowerCase()==='yes'||myname.toLowerCase()==='y') {
    alert('Correct answer my name is Abdalrhman');
    correct++;
    
} else if ( myname.toLowerCase()==='no'||myname.toLowerCase()==='n'){

    alert('false answer my name is Abdalrhman');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

var myage = prompt('Do you think I have 24 years old ?');

if (myage.toLowerCase()==='yes'||myage.toLowerCase()==='y') {
    alert('Correct answer I have 24 years ');
    correct++;
    
} else if ( myage.toLowerCase()==='no'||myage.toLowerCase()==='n'){

    alert('false answer I have 24 years');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

var mymagor = prompt('Do you think I am a Civil Engineer?');

if (mymagor.toLowerCase()==='yes'||mymagor.toLowerCase()==='y') {
    alert('Correct answer I am a Civil Engineer');
    correct++;
    
} else if ( mymagor.toLowerCase()==='no'||mymagor.toLowerCase()==='n'){

    alert('false answer I am a Civil Engineer');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

var memberation = prompt('Do you think I am a member at JEA?');

if (memberation.toLowerCase()==='yes'||memberation.toLowerCase()==='y') {
    alert('Correct answer I am a member at JEA');
    correct++;
    
} else if ( memberation.toLowerCase()==='no'||memberation.toLowerCase()==='n'){

    alert('false answer I am a member at JEA');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

var mycity = prompt('Do you think I live in Irbid?');

if (mycity .toLowerCase()==='yes'||mycity .toLowerCase()==='y') {
    alert('Correct answer I live in Irbid');
    correct++;
    
} else if ( mycity.toLowerCase()==='no'||mycity.toLowerCase()==='n'){

    alert('false answer I live in Irbid');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}



// Q6 : How many cars I bought in my life?
var i = 0
while (i < 4) {
    var carNumber = prompt('How many cars I bought in my life?');
    if (parseInt(carNumber) === 3) {
        alert('exactly');
        i = 5
        correct++;
    }
    if (parseInt(carNumber) < 3) {
        alert('too low');
    }
    if (parseInt(carNumber) > 3) {
        alert('too high');
    }
    i++;
    if (i == 4) {
        alert('I bought 3 cars in my life');
    }


}

//Q7: multiple possible correct 
var x = 0;
while (x < 6) {
    
    var favSport = prompt('What is my favorite sport?');
    switch (favSport.toLowerCase()) {
        case 'basketball':
            alert('correct answer');
            x = 7;
            correct++;
            break;
        case 'football':
            alert('correct answer');
            x = 7;
            correct++;
            break;
        case 'tennis':
            alert('correct answer');
            x = 7;
            correct++;
            break;

            default : 
            alert('invalid value try again')
    }
    x++
    if (x===6){
        alert('My favorite sports: basketball,football and tennis ')
    }
}

alert(username+'  your score : '+ correct +'/7  thank you for your time');



