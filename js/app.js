
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

function answerMe(input){
    var qu=prompt(input);
    if (qu.toLowerCase()==='yes'||qu.toLowerCase()==='y') {
        alert('Correct answer');
        correct++;
        
    } else if ( qu.toLowerCase()==='no'||qu.toLowerCase()==='n'){
    
        alert('false answer');
    }else{
        alert('can you answer by (y/n) or (yes/no) please?');
    }
}

var myname = answerMe('Is my name Abdalrhman?');
var myage = answerMe('Do you think I have 24 years old ?');
var mymagor = answerMe('Do you think I am a Civil Engineer?');
var memberation = answerMe('Do you think I am a member at JEA?');
var mycity = answerMe('Do you think I live in Irbid?');

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
var favsport =['basketball','football ','tennis'];

var x = 0;
while (x < 6) {
    
    var favSport = prompt('What is my favorite sports?');
    switch (favSport.toLowerCase()) {
        case favsport[0]:
            alert('correct answer');
            x = 7;
            correct++;
            break;
        case favsport[1]:
            alert('correct answer');
            x = 7;
            correct++;
            break;
        case favsport[2]:
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



