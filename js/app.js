'use strict';

//FIXME kkfnbkdfk

//welcome prompt
alert ('Hello, welcome to About Me');

var counter = 0

//name intake
function introduction() {
    var userName = prompt ('Please tell me your name')
    console.log(userName)
    window.userName = userName
};

introduction();

//first question
var wouldPlay = prompt ('Would you like to play quizzies? Say yes! Or say no.');

wouldPlay = wouldPlay.toUpperCase();

if (wouldPlay === 'NO') {
    alert ('Please reconsider');
}

console.log('Guest likes to play? ' + wouldPlay);

var likeCats = prompt('Do I like cats?');

likeCats = likeCats.toLowerCase();

if (likeCats === 'yes'){
    alert('You think? We\'ll see');
    counter++
}

console.log('Guest thinks I like cats? ' + likeCats);

var eatSushi = prompt ('Would I eat leftover sushi for breakfast?');

eatSushi = eatSushi.toLowerCase();

if (eatSushi === 'no'){
    var noSushi = prompt ('Would you?');
    console.log('Guest eats sushi?', noSushi);
}
else  if (eatSushi === 'yes'){ 
    var yesSushi = prompt('Are you sure?');
    console.log('Guest eats sushi?', yesSushi);
    counter++
}

else {
    alert('Moving on');
}

console.log('Guest thinks I eat sushi? ' + eatSushi);

var numOfCats = parseInt(prompt('How many cats do I have?'));

if (isNaN(numOfCats)){
    alert ('Well, that\'s not a a number!');
}
else { 
    alert ('Too few in deed');
    counter++
}


console.log('Guest thinks I have ' + numOfCats + ' cats');

alert('Ok, let\'s make it more fun!')



var rightAnswer = 2;

var guessesRemaining = 4;

while(guessesRemaining > 0){ 
    var favNum = parseInt(prompt('How many cheeseburgers does Pepper eat for dinner?')); 
    if (favNum === rightAnswer){
        alert('Heeeey! You know it!')
        break
        counter++
    } 

    guessesRemaining--

    if (favNum < rightAnswer){
        alert('No! Too low!')
    }
    if (favNum > rightAnswer){
        alert('No! Too high!')
    }
}

var listofAnimals = ['finch', 'dog', 'parrot', 'hamster'];

var guessesLeft = 6;

while(guessesLeft >0){
    var pets = prompt('Can you guess what kind of animals did I have as a pet?').toLowerCase();

   for(var i=0; i< listofAnimals.length; i++){
       if (pets === listofAnimals[i]){ 
           alert('Good guess, I had a ' + pets)
           guessesLeft = 0
           break
           counter++
       }
   }
guessesLeft--

if (guessesLeft === 0){ alert('Awwww, you didn\'t quite get it right, but no worries, I tell you all about my pets. I had a finch, a few dogs, a parrot and a hamster.')
}
}

alert('Hey, you got ' + counter + ' of 5 questions right ' + userName + ' ! Great!');

alert('Thank you for playing along today. You can now go and check out my awesome site');

