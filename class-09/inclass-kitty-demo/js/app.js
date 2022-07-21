'use strict';

// ****** WINDOW INTO THE DOM *********
let kittenSection = document.getElementById('kitten-profiles');

// **** STEP 1: GRAB THE ELEMENT TO LISTEN TO! ******
let myform = document.getElementById('my-form');


// ******** HELPER FUNCTIONS - GENERATE A RANDOM NUMBER ***********
// grabbed from MDN docs
function randomAge(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ************* CONSTRUCTOR REFACTOR *************
let kittenCaboodle = [];

function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo){
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;

  kittenCaboodle.push(this);
}

// ****** PROTOTYPE = INHERITS: EACH OBJECT WILL BE ABLE TO CALL THESE METHODS ********

Kitten.prototype.getAge = function(){
  this.age = `${randomAge(3,12)} months`;
};

Kitten.prototype.render = function(){
  let articleElem = document.createElement('article');
  kittenSection.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  articleElem.appendChild(h2Elem);

  let pElem = document.createElement('p');
  pElem.textContent = `${this.name} is ${this.age}`;
  articleElem.appendChild(pElem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for(let i = 0; i < this.interests.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = this.interests[i];
    ulElem.appendChild(liElem);
  }

  let imgElem = document.createElement('img');
  imgElem.src = this.photo;
  imgElem.alt = `${this.name} is ${this.age} kitten`;
  articleElem.appendChild(imgElem);

  // ******** TABLE DOM RENDERING *************
  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good with Cats 😻';
  row1.appendChild(th1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good with Dogs 🐶';
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Good with Kids 👶🏼';
  row1.appendChild(th3Elem);

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);
  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);

  let td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);

  let td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);
};


// ********* CREATE KITTENS CONSTRUCTOR FUNCTION **********

new Kitten('Frankie',['wet food', 'fish toy', 'cat nip'], true, true, true, 'img/frankie.jpeg');
new Kitten('Jumper', ['dry food', 'mouse toy', 'treats'], true, false, false, 'img/jumper.jpeg');
new Kitten('Serena', ['mice', 'lazers', 'scratching'], false, false, true, 'img/serena.jpeg');


function renderKittens(){
  for(let i = 0; i < kittenCaboodle.length; i++){
    let currentKitten = kittenCaboodle[i];
    currentKitten.getAge();
    currentKitten.render();
  }
}

renderKittens();


// ******** FORM DEMO ************

// **** STEP 3: define our callback *****

function handleSubmit(event){
  event.preventDefault();

  let name = event.target.kittyName.value;
  let photo = event.target.photo.value;

  let interests = event.target.interests.value;
  //playing, eating, napping >> ['playing', 'eating']
  interests = interests.split(',');

  let isGoodWithCats = event.target.isGoodWithCats.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithKids = event.target.isGoodWithKids.checked;

  let newKitten = new Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo);

  newKitten.getAge();
  newKitten.render();

  // HINT FOR YOUR LAB - remove your footer and recreate it

  // resets input fields after submission
  myform.reset();
}


// ****** STEP 2: ATTACH EVENT LISTENER: type of event, and our callback function or event handler ******
myform.addEventListener('submit', handleSubmit);
