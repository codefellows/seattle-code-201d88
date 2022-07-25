'use strict';

console.log('hey there hey!');


// ******** GLOBAL VARIABLES **************
let totalVotes = 15;
let allGoats = [];

// ********* DOM REFERENCES ****************
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

let resultBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-list');

// ********* CONSTRUCTOR FUNCTION *************

function Goat(name, photoExtension = 'jpg'){
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allGoats.push(this);
}


// ********* OBJECT CREATION ******************
new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');


// *********** HELPER FUNCTIONS ***************

function randomIndexGenerator(){
  return Math.floor(Math.random() * allGoats.length);
}

function renderImgs(){
  let imgOneIndex = randomIndexGenerator();
  let imgTwoIndex = randomIndexGenerator();

  // make sure they are unique each round
  while(imgOneIndex === imgTwoIndex){
    imgTwoIndex = randomIndexGenerator();
  }

  // *** maybe use a container to store your 3 index numbers and do validation against that collection/container ***

  imgOne.src = allGoats[imgOneIndex].photo;
  imgOne.alt = allGoats[imgOneIndex].name;
  imgOne.name = allGoats[imgOneIndex].name;
  allGoats[imgOneIndex].views++;
  imgTwo.src = allGoats[imgTwoIndex].photo;
  imgTwo.alt = allGoats[imgTwoIndex].name;
  imgTwo.name = allGoats[imgTwoIndex].name;
  allGoats[imgTwoIndex].views++;
}

renderImgs();

// *********** EVENT HANDLERS  *****************

function handleClick(event){
  // - click - on the imgs - rerender new images(increase the views on the goats that are rendered) - count the vote of the goat that was clicked/ lower our total number of votes
  let imgClicked = event.target.name;
  console.dir(imgClicked);

  for(let i=0; i < allGoats.length; i++){
    if(imgClicked === allGoats[i].name){
      allGoats[i].votes++;
    }
  }
  totalVotes--;

  renderImgs();

  if(totalVotes === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
}

function handleShowResults(){
  if(totalVotes === 0){
    for(let i = 0; i < allGoats.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${allGoats[i].name}: views: ${allGoats[i].views}, votes: ${allGoats[i].votes}`;
      resultsList.appendChild(liElem);
    }
    resultBtn.removeEventListener('click', handleShowResults);
  }
}

// ********* EVENT LISTENERS *******************
imgContainer.addEventListener('click', handleClick);
resultBtn.addEventListener('click', handleShowResults);
