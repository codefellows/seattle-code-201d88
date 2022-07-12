'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Welcome to my site ${siteVisitor}! Guess these facts about me.`);


let questionOne = prompt('Yes or No...Do I have a daughter?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct!');
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('You are wrong...');
} else{
  alert('Answer yes or no');
}
