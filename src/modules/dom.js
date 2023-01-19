import { game, checkPlayerWon } from './game.js';

const form = document.querySelector('#form');
const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');
let players = null;

const renderBoards = () => {
  const board = document.querySelector('#board');
  const enemyBoard = document.querySelector('#enemyBoard');
  board.innerHTML = '';
  enemyBoard.innerHTML = '';

  function attack(e) {
    if (!players.human.getTurn()) return;
    players.human.attack(players.pc, e.target.dataset.x, e.target.dataset.y);
    renderBoards();
    if (typeof checkPlayerWon(players) === 'object') {
      console.log(checkPlayerWon(players), 'won');
    }
    players.pc.randomAttack(players.human);
    renderBoards();
    // console.log(checkPlayerWon(players));
  }

  for (let i = 0; i < players.human.gameboard.board.length; i += 1) {
    for (let j = 0; j < players.human.gameboard.board[i].length; j += 1) {
      const div = document.createElement('div');
      div.setAttribute('data-x', i);
      div.setAttribute('data-y', j);
      if (players.human.gameboard.board[i][j] === 'miss') {
        const divMiss = document.createElement('div');
        divMiss.classList.add('miss');
        div.appendChild(divMiss);
      }
      if (typeof players.human.gameboard.board[i][j] === 'object'
      && players.human.gameboard.board[i][j]?.ship?.tiles[players.human.gameboard.board[i][j].shipPosition] === 'hit') {
        const divHit = document.createElement('div');
        divHit.classList.add('hit');
        div.appendChild(divHit);
      }
      board.appendChild(div);
    }
  }
  for (let i = 0; i < players.pc.gameboard.board.length; i += 1) {
    for (let j = 0; j < players.pc.gameboard.board[i].length; j += 1) {
      const div = document.createElement('div');
      div.setAttribute('data-x', i);
      div.setAttribute('data-y', j);
      if (players.pc.gameboard.board[i][j] === 'miss') {
        const divMiss = document.createElement('div');
        divMiss.classList.add('miss');
        div.appendChild(divMiss);
      }
      if (typeof players.pc.gameboard.board[i][j] === 'object'
      && players.pc.gameboard.board[i][j]?.ship?.tiles[players.pc.gameboard.board[i][j].shipPosition] === 'hit') {
        const divHit = document.createElement('div');
        divHit.classList.add('hit');
        div.appendChild(divHit);
      }
      if (!div.hasChildNodes()) {
        div.addEventListener('click', attack);
      }
      enemyBoard.appendChild(div);
    }
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  startScreen.classList.add('display-none');
  players = game();
  renderBoards();
  gameScreen.classList.remove('display-none');
});
