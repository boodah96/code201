
'use strict'

var username = prompt('What is your name?');
console.log('your name : '+ username);
alert('Hello '+username+' and welcome in my website ')
alert('We will play a guessing game contain a 5 question you can answer about it by (y/n) or (yes/no), lets go')


console.log('my name is Abdalrhman');
console.log('I have 24 years');
console.log('I am a Civil Engineer');
console.log('I am a member at JEA');
console.log( 'I live in Irbid');

var myname = prompt('Is my name Abdalrhman?');

if (myname.toLowerCase()==='yes'||myname.toLowerCase()==='y') {
    alert('Correct answer my name is Abdalrhman');
    
} else if ( myname.toLowerCase()==='no'||myname.toLowerCase()==='n'){

    alert('false answer my name is Abdalrhman');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

var myage = prompt('Do you think I have 24 years old ?');

if (myage.toLowerCase()==='yes'||myage.toLowerCase()==='y') {
    alert('Correct answer I have 24 years ');
    
} else if ( myage.toLowerCase()==='no'||myage.toLowerCase()==='n'){

    alert('false answer I have 24 years');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

var mymagor = prompt('Do you think I am a Civil Engineer?');

if (mymagor.toLowerCase()==='yes'||mymagor.toLowerCase()==='y') {
    alert('Correct answer I am a Civil Engineer');
    
} else if ( mymagor.toLowerCase()==='no'||mymagor.toLowerCase()==='n'){

    alert('false answer I am a Civil Engineer');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

var memberation = prompt('Do you think I am a member at JEA?');

if (memberation.toLowerCase()==='yes'||memberation.toLowerCase()==='y') {
    alert('Correct answer I am a member at JEA');
    
} else if ( memberation.toLowerCase()==='no'||memberation.toLowerCase()==='n'){

    alert('false answer I am a member at JEA');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

var mycity = prompt('Do you think I live in Irbid?');

if (mycity .toLowerCase()==='yes'||mycity .toLowerCase()==='y') {
    alert('Correct answer I live in Irbid');
    
} else if ( mycity.toLowerCase()==='no'||mycity.toLowerCase()==='n'){

    alert('false answer I live in Irbid');
}else{
    alert('can you answer by (y/n) or (yes/no) please?');
}

alert('Thank you '+username+' for your time :) ')



