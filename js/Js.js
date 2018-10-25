"use strict"

var leftArrow = document.getElementById('portfolio-leftArrow');
var rightArrow = document.getElementById('portfolio-rightArrow');
var initImageNumber = 1;
var maxImageNumber = 4;


leftArrow.addEventListener('click', moveBackward);
rightArrow.addEventListener('click', moveForward);


function moveBackward() {
  var image = document.getElementById('portfolio-image');
  initImageNumber--;
  if (initImageNumber === 0){initImageNumber = maxImageNumber};
  image.setAttribute('src', 'images/site' + initImageNumber + '.jpg');
}

function moveForward() {
  var image = document.getElementById('portfolio-image');
  initImageNumber++;
  if (initImageNumber > maxImageNumber){initImageNumber = 1};
  image.setAttribute('src', 'images/site' + initImageNumber + '.jpg');
}