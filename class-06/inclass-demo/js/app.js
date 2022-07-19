'use strict';

// Jose is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Jose knows a little bit of javascript... he can make objects!

// what are we going to display?
// Kittens
// figure out what info about each kitten we need to show:
// name
// age with a function - 3 months and 12 months
// interests []
// isGoodWithCats
// isGoodWithDogs
// isGoodWithKids
// photo

// DOM MANIPULATION STEP 1: WINDOW INTO YOUR HTML DOCUMENT

// ****** WINDOW INTO THE DOM *********
// 1 way to do this: document.getElementById = method that will take a string for ID
// 2nd way to do this: document.querySelector = method that takes in a string of either an ID, className, or element type

let kittenSection = document.getElementById('kitten-profiles');

// console.dir(kittenSection);

// ******** HELPER FUNCTIONS - GENERATE A RANDOM NUMBER ***********
// grabbed from MDN docs
function randomAge(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// ********** OBJECTS LITERALS *************

let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'fish toy', 'cat nip'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months`;
  },
  // ********* DOM MANIPULATION pt 2 ********
  // kitty will be responsible for rendering itself to the html document
  render: function(){
    // STEP 2: CREATE THE ELEMENT
    let articleElem = document.createElement('article');
    // STEP 3: optional - give it context
    // STEP 4: add it to the HTML document --> parent.appendChild(child to append);
    kittenSection.appendChild(articleElem);

    // create h2 element
    let h2Elem = document.createElement('h2');
    // context - kittens name
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
  }
};

frankie.getAge(); // need to call this METHOD to generate age for frankie
frankie.render(); // need to call this METHOD to render all the HTML to the page
console.log(frankie);

let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['dry food', 'mouse toy', 'treats'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/jumper.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months`;
  },
  render: function(){
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
  }
};

jumper.getAge();
jumper.render();

let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lazers', 'scratching'],
  isGoodWithCats: false,
  isGoodWithDogs: false,
  isGoodWithKids: true,
  photo: 'img/serena.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months`;
  },
  render: function(){
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
  }
};

serena.getAge();
serena.render();
