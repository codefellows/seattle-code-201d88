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

function Goat(name, photoExtension = 'jpg') {
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

function randomIndexGenerator() {
  return Math.floor(Math.random() * allGoats.length);
}

function renderImgs() {
  let imgOneIndex = randomIndexGenerator();
  let imgTwoIndex = randomIndexGenerator();

  // make sure they are unique each round
  while (imgOneIndex === imgTwoIndex) {
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

function handleClick(event) {
  // - click - on the imgs - rerender new images(increase the views on the goats that are rendered) - count the vote of the goat that was clicked/ lower our total number of votes
  let imgClicked = event.target.name;
  console.dir(imgClicked);

  for (let i = 0; i < allGoats.length; i++) {
    if (imgClicked === allGoats[i].name) {
      allGoats[i].votes++;
    }
  }
  totalVotes--;

  renderImgs();

  if (totalVotes === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }
}

function handleShowResults() {
  if (totalVotes === 0) {
    renderChart();
    // for(let i = 0; i < allGoats.length; i++){
    //   let liElem = document.createElement('li');
    //   liElem.textContent = `${allGoats[i].name}: views: ${allGoats[i].views}, votes: ${allGoats[i].votes}`;
    //   resultsList.appendChild(liElem);
    // }
    resultBtn.removeEventListener('click', handleShowResults);
  }
}

// ************** CHART DEMO ************************

// *** CANVAS ELEMENT NEEDED TO RENDER THE CHART ***
let canvasElem = document.getElementById('my-chart');

function renderChart() {

  // **** CREATING EMPTY ARRAYS TO POPULATE WITH THE INFO FOR OUR CHART ****

  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  // *** THIS FOR LOOP TAKES ALL THE DATA AFTER THE VOTING ROUNDS ARE COMPLETED AND POPULATES THE ARRAYS CREATED ABOVE ***
  for(let i = 0; i < allGoats.length; i++){
    goatNames.push(allGoats[i].name);
    goatViews.push(allGoats[i].views);
    goatVotes.push(allGoats[i].votes);
  }

  // *** CONFIG OBJECT THAT CHART.JS USES TO RENDER THE CHART ***
  let myObj = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Votes',
        data: goatVotes,
        backgroundColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: goatViews,
        backgroundColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // *** CONSTRUCTOR CALL TO RENDER THE CHART ***
  new Chart(canvasElem, myObj);

}



// ********* EVENT LISTENERS *******************
imgContainer.addEventListener('click', handleClick);
resultBtn.addEventListener('click', handleShowResults);
