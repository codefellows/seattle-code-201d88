'use strict';

// FORM EVENTS DEMO

// STEP 1 - Grab the element I want to listen to
let myForm = document.getElementById('my-form');


// STEP 3 - define our callback function or event handler

function handleSubmit(event){
  event.preventDefault();
  let name = event.target.firstName.value;
  console.log(name);

  let age = +event.target.age.value;
  console.log(age);
  console.log(typeof age);

}


// STEP 2 - ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);

// // BOX CLICK DEMO
// // Step 1: Grab our element we are going to listen to
// let myContainer = document.getElementById('container');
// let parentEl = document.getElementById('results');


// // Step 3: Define our event handler - callback function
// function handleClick(event) {
//   console.log('this is the event', event);
//   console.log('this is the target', event.target);

//   if (event.target.id === 'box-one') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 2 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 was clicked!';
//     parentEl.append(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'CLICK THE BOXES ONLY!';
//     parentEl.append(pEl);
//   }
// }

// // Step 2: Add the Event Listener - 2 args - event type, callback function = function that is passed into to another function // event handler
// myContainer.addEventListener('click', handleClick);
