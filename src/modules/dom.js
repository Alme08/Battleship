import game from './game.js';

const form = document.querySelector('#form');
const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');
const players = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  startScreen.classList.add('display-none');
  game();
  gameScreen.classList.remove('display-none');
});
