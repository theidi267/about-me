'use strict';

//FIXME kkfnbkdfk


alert ('Hello, welcome to About Me');

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
}

else {
    alert('Moving on');
}

console.log('Guest thinks I eat sushi? ' + eatSushi);

var numOfCats = parseInt(prompt('How many cats do I have?'));

if (isNaN(numOfCats)){
    alert ('Well, that\'s not a a number!');
}
else { alert ('Too few in deed');}

console.log('Guest thinks I have ' + numOfCats + ' cats');

alert('Ok, let\'s make it more fun!')



var rightAnswer = 2;

var guessesRemaining = 4;

while(guessesRemaining > 0){ 
    var favNum = parseInt(prompt('How many cheeseburgers does Pepper eat for dinner?')); 
    if (favNum === rightAnswer){
        alert('Heeeey! You know it!')
        break
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

while(guessesLeft > 0)


alert('Thank you for playing along today. You can now go and check out my awesome site')

