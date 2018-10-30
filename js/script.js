"use strict"

let leftArrow = document.getElementById('portfolio-leftArrow');
let rightArrow = document.getElementById('portfolio-rightArrow');
let initImageNumber = 1;
let maxImageNumber = 4;





// leftArrow.addEventListener('click', moveBackward);
// rightArrow.addEventListener('click', moveForward);

leftArrow.onclick = moveBackward;
rightArrow.onclick = moveForward;


function moveBackward() {
  let portfolioHeader = document.getElementById('portfolioHeader');
  let portfolioText = document.getElementById('portfolioText');
  let image = document.getElementById('portfolio-image');
  let gitHub = document.getElementById('gitHubR');
  let currentSite = document.getElementById('currentSite');
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
  let image = document.getElementById('portfolio-image');
  let portfolioHeader = document.getElementById('portfolioHeader');
  let portfolioText = document.getElementById('portfolioText');
  let gitHub = document.getElementById('gitHubR');
  let currentSite = document.getElementById('currentSite');
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

