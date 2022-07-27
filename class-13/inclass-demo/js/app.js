'use strict';

// *** LOCAL STORAGE STARTS ON LINE 120 AND CONTINUES BACK ON LINE 18 ***


// ******** GLOBAL VARIABLES **************
let totalVotes = 15;
let allGoats = [];

// ********* DOM REFERENCES ****************
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');

let resultBtn = document.getElementById('show-results-btn');


// ************ LOCAL STORAGE CONTINUES **************

// STEP 3: GET DATA OUT OF LOCAL STORAGE

let retreivedGoats = localStorage.getItem('myGoats');

console.log('retrievedGoats', retreivedGoats);

let parsedGoats = JSON.parse(retreivedGoats);

console.log('parsed Goats >>> ', parsedGoats);


// ********* CONSTRUCTOR FUNCTION *************

function Goat(name, photoExtension = 'jpg') {
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allGoats.push(this);
}


// ********* OBJECT CREATION ******************
if (retreivedGoats) {
  allGoats = parsedGoats;

  // REBUILD OUR GOAT INSTANCES - by running parsed back through the Constructor
  // for (let i = 0; i < parsedGoats.length; i++) {
  //   if (parsedGoats[i].name === 'bunny-goat') {
  //     let reconstructedBunnyGoat = new Goat(parsedGoats[i].name, 'png');
  //     reconstructedBunnyGoat.views = parsedGoats[i].views;
  //     reconstructedBunnyGoat.votes = parsedGoats[i].votes;
  //   } else {
  //     let reconstructedGoat = new Goat(parsedGoats[i].name);
  //     reconstructedGoat.views = parsedGoats[i].views;
  //     reconstructedGoat.votes = parsedGoats[i].votes;
  //   }
  // }
} else {
  new Goat('bunny-goat', 'png');
  new Goat('cool-goat');
  new Goat('cruisin-goat');
  new Goat('float-your-goat');
  new Goat('goat-out-of-hand');
  new Goat('kissing-goat');
  new Goat('sassy-goat');
  new Goat('smiling-goat');
  new Goat('sweater-goat');
}


console.log('allgoats from Constructor >>>', allGoats);
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
  let imgClicked = event.target.name;

  for (let i = 0; i < allGoats.length; i++) {
    if (imgClicked === allGoats[i].name) {
      allGoats[i].votes++;
    }
  }
  totalVotes--;

  renderImgs();

  if (totalVotes === 0) {

    // ********** LOCAL STORAGE STARTS HERE ***********
    // STEP 1: STRINGIFY THE DATA
    let stringifiedGoats = JSON.stringify(allGoats);

    console.log('stringified goats >>>', stringifiedGoats);

    // STEP 2: ADD TO LOCAL STORAGE
    localStorage.setItem('myGoats', stringifiedGoats);


    imgContainer.removeEventListener('click', handleClick);
  }
}

function handleShowResults() {
  if (totalVotes === 0) {
    renderChart();
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
  for (let i = 0; i < allGoats.length; i++) {
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
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        },
      },
      plugins: {
        legend: {
          labels: {
            color: 'white',
            padding: 30
          },
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
