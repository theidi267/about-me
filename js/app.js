'use strict';

//FIXME kkfnbkdfk

//welcome prompt

var counter = 0

//name intake
function introduction() {
    var userName = prompt ('Please tell me your name');
    window.userName = userName;
    console.log('Guest is ' + userName);
};

//first question
function firstQuestion(){
    var wouldPlay = prompt ('Would you like to play quizzies? Say yes! Or say no.');

    wouldPlay = wouldPlay.toUpperCase();
    
    if (wouldPlay === 'NO') {
    alert ('Please reconsider');
    };

    console.log('Guest likes to play? ' + wouldPlay);
};

//second question
function secondQuestion(){
    var likeCats = prompt('Do I like cats?');

    likeCats = likeCats.toLowerCase();

    if (likeCats === 'yes'){
        alert('You think? We\'ll see');
        counter++
    };

    console.log('Guest thinks I like cats? ' + likeCats);
};

//third question
function thirdQuestion(){
    var eatSushi = prompt ('Would I eat leftover sushi for breakfast?');

    eatSushi = eatSushi.toLowerCase();

<<<<<<< HEAD
var likeCats = prompt('Do you think I like cats?');
=======
    if (eatSushi === 'no'){
        var noSushi = prompt ('Would you?');
        console.log('Guest eats sushi?', noSushi);
    } else  if (eatSushi === 'yes'){ 
        var yesSushi = prompt('Are you sure?');
        console.log('Guest eats sushi?', yesSushi);
        counter++
    } else {
        alert('Moving on');
    };
>>>>>>> e0ae4f9f1c2419806191140da73348c9eb3fd73c

    console.log('Guest thinks I eat sushi? ' + eatSushi);
};

<<<<<<< HEAD
if (likeCats === 'yes'){
    alert('You think? We\'ll see');
    counter++
} else {
    alert('But, they are so likable!')
}
=======
//fouth question
function fourthQuestion(){
    var numOfCats = parseInt(prompt('How many cats do I have?'));
>>>>>>> e0ae4f9f1c2419806191140da73348c9eb3fd73c

    if (isNaN(numOfCats)){
        alert ('Well, that\'s not a a number!');
    } else if (numOfCats === 1){
        alert('Indeed! Her name is Pepper!');
        counter++
    } else { 
        alert ('Too few in deed');
    };

<<<<<<< HEAD
var eatSushi = prompt ('Do you think I would eat leftover sushi for breakfast?');
=======
    console.log('Guest thinks I have ' + numOfCats + ' cats');
};
>>>>>>> e0ae4f9f1c2419806191140da73348c9eb3fd73c

//fifth question
function fifthQuestion(){
    var rightAnswer = 2;

    var guessesRemaining = 3;

    while(guessesRemaining > 0){ 

        var favNum = parseInt(prompt('How many cheeseburgers does Pepper eat for dinner?')); 

<<<<<<< HEAD
var numOfCats = parseInt(prompt('How many cats do you think I have?'));

if (isNaN(numOfCats)){
    alert ('Well, that\'s not a a number!');
}
else { 
    alert ('I wish I had more!');
    counter++
}

console.log('Guest thinks I have ' + numOfCats + ' cats');
=======
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
    console.log('Guest thinks cheeseburger count is ' + favNum + ' .');
};

//question six
function questionSix(){
    var listofAnimals = ['finch', 'dog', 'parrot', 'hamster'];
>>>>>>> e0ae4f9f1c2419806191140da73348c9eb3fd73c

    var guessesLeft = 6;

    while(guessesLeft >0){
        var pets = prompt('Can you guess what kind of animals did I have as a pet?').toLowerCase();

    for(var i=0; i< listofAnimals.length; i++){

        if (pets === listofAnimals[i]){ 

            alert('Good guess, I had a ' + pets)
            guessesLeft = 0
            counter++
            break 
        }
    };
    guessesLeft--

    if (guessesLeft === 0){ alert('Awwww, you didn\'t quite get it right, but no worries, I tell you all about my pets. I had a finch, a few dogs, a parrot and a hamster.')
    };
    };
};

alert ('Hello, welcome to About Me');

introduction();

firstQuestion();

secondQuestion();

thirdQuestion();

fourthQuestion();

alert('Ok, let\'s make it more fun!');

fifthQuestion();

questionSix();

alert('Hey, you got ' + counter + ' of 5 questions right ' + userName + ' ! Great!');

alert('Thank you for playing along today. You can now go and check out my awesome site');

