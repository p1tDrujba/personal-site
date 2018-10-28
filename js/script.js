"use strict"

var leftArrow = document.getElementById('portfolio-leftArrow');
var rightArrow = document.getElementById('portfolio-rightArrow');
var initImageNumber = 1;
var maxImageNumber = 4;





// leftArrow.addEventListener('click', moveBackward);
// rightArrow.addEventListener('click', moveForward);

leftArrow.onclick = moveBackward;
rightArrow.onclick = moveForward;


function moveBackward() {
  var portfolioHeader = document.getElementById('portfolioHeader');
  var portfolioText = document.getElementById('portfolioText');
  var image = document.getElementById('portfolio-image');
  var gitHub = document.getElementById('gitHubR');
  var currentSite = document.getElementById('currentSite');
  initImageNumber--;
  if (initImageNumber === 0){initImageNumber = maxImageNumber}
  image.setAttribute('src', 'images/site' + initImageNumber + '.jpg');
  if (initImageNumber === 1) {
    portfolioHeader.textContent="Интренет-магазин детских колясок \"Brand\"";
    portfolioText.textContent = "Учебный проект. В стадии разработки.";
    gitHub.setAttribute('href', 'https://github.com/p1tDrujba/pram-shop-2');
    currentSite.setAttribute('href', 'sites/pram-shop-2/index.html');
  }
  if (initImageNumber === 2) {
    portfolioHeader.textContent="Сайт-портфолио Петра Борщева";
    portfolioText.textContent = "Сайт на котором вы находитесь.";
    gitHub.setAttribute('href', 'https://github.com/p1tDrujba/personal-site');
    currentSite.setAttribute('href', '#');
  }
  if (initImageNumber === 3) {
    portfolioHeader.textContent="Кальянный клуб Pur Pur";
    portfolioText.textContent = "Первый опыт коммерческого заказа на фрилансе.";
    gitHub.setAttribute('href', 'https://github.com/p1tDrujba/purpur.hookah');
    currentSite.setAttribute('href', 'sites/purpur.hookah/index.html');
  }
  if (initImageNumber === 4) {
    portfolioHeader.textContent="Интернет-магазин детских колясок";
    portfolioText.textContent = "Самая первая созданная страничка.";
    gitHub.setAttribute('href', 'https://github.com/p1tDrujba/pram-shop-1');
    currentSite.setAttribute('href', 'sites/pram-shop/index.html');
  }
}

function moveForward() {
  var image = document.getElementById('portfolio-image');
  var portfolioHeader = document.getElementById('portfolioHeader');
  var portfolioText = document.getElementById('portfolioText');
  var gitHub = document.getElementById('gitHubR');
  var currentSite = document.getElementById('currentSite');
  initImageNumber++;
  if (initImageNumber > maxImageNumber){initImageNumber = 1}
  image.setAttribute('src', 'images/site' + initImageNumber + '.jpg');
  if (initImageNumber === 1) {
    portfolioHeader.textContent="Интренет-магазин детских колясок \"Brand\"";
    portfolioText.textContent = "Учебный проект. В стадии разработки.";
    gitHub.setAttribute('href', 'https://github.com/p1tDrujba/pram-shop-2');
    currentSite.setAttribute('href', 'sites/pram-shop-2/index.html');
  }
  if (initImageNumber === 2) {
    portfolioHeader.textContent="Сайт-портфолио Петра Борщева";
    portfolioText.textContent = "Сайт на котором вы находитесь.";
    gitHub.setAttribute('href', 'https://github.com/p1tDrujba/personal-site');
    currentSite.setAttribute('href', '#');
  }
  if (initImageNumber === 3) {
    portfolioHeader.textContent="Кальянный клуб Pur Pur";
    portfolioText.textContent = "Первый опыт коммерческого заказа на фрилансе.";
    gitHub.setAttribute('href', 'https://github.com/p1tDrujba/purpur.hookah');
    currentSite.setAttribute('href', 'sites/purpur.hookah/index.html');
  }
  if (initImageNumber === 4) {
    portfolioHeader.textContent="Интернет-магазин детских колясок";
    portfolioText.textContent = "Самая первая созданная страничка.";
    gitHub.setAttribute('href', 'https://github.com/p1tDrujba/pram-shop-1');
    currentSite.setAttribute('href', 'sites/pram-shop/index.html');
  }
}

