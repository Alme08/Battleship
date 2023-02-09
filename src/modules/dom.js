import { game, checkPlayerWon } from './game.js';
import shipDrag from './drag-and-drop.js';

const form = document.querySelector('#form');
const startScreen = document.querySelector('.start-screen');
const shipsScreen = document.querySelector('.ships-screen');
const shipsContainer = document.querySelector('.ships');
const gameScreen = document.querySelector('.game-screen');
const endScreen = document.querySelector('.end-screen');
let startGame = null;
const restartGame = document.querySelector('#restart');
let players = null;

const renderEndScreen = (winner) => {
  const winnerSpan = document.querySelector('#winner');
  endScreen.classList.remove('display-none');
  winnerSpan.textContent = winner.name;
};

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
      renderEndScreen(checkPlayerWon(players));
      return;
    }

    setTimeout(() => {
      players.pc.randomAttack(players.human);
      renderBoards();

      if (typeof checkPlayerWon(players) === 'object') {
        renderEndScreen(checkPlayerWon(players));
      }
    }, 500);
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

      if (players.human.gameboard.board[i][j] !== null
      && players.human.gameboard?.isSunk(i, j) === true) {
        div.classList.add('sunk');
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

      if (players.pc.gameboard.board[i][j] !== null
      && players.pc.gameboard.isSunk(i, j) === true) {
        div.classList.add('sunk');
      }
      if (!div.hasChildNodes()) {
        div.addEventListener('click', attack);
      }
      enemyBoard.appendChild(div);
    }
  }
};

const renderCarrierShipBoard = () => {
  const carrierBoard = document.querySelector('#boardCarrier');
  carrierBoard.textContent = '';

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const div = document.createElement('div');
      div.setAttribute('data-x', i);
      div.setAttribute('data-y', j);
      div.setAttribute('class', 'box');
      carrierBoard.appendChild(div);
    }
  }
  for (let i = 0; i < shipsContainer.children.length; i += 1) {
    if (shipsContainer.children[i].classList.contains('ship')) {
      shipsContainer.children[i].classList.remove('display-none');
    }
  }
};

const createShips = (cells) => {
  if (cells === 42) {
    const ship = document.createElement('div');
    ship.classList.add('ship');
    ship.classList.add('ship-4-2');
    ship.setAttribute('id', 'ship-4-2');
    ship.setAttribute('draggable', true);
    for (let i = 0; i < 4; i += 1) {
      const div = document.createElement('div');
      div.classList.add('cell');
      ship.appendChild(div);
    }
    shipsContainer.appendChild(ship);
  } else {
    const ship = document.createElement('div');
    ship.classList.add('ship');
    ship.classList.add(`ship-${cells}`);
    ship.setAttribute('id', `ship-${cells}`);
    ship.setAttribute('draggable', true);
    for (let i = 0; i < cells; i += 1) {
      const div = document.createElement('div');
      div.classList.add('cell');
      ship.appendChild(div);
    }
    shipsContainer.appendChild(ship);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = document.querySelector('#playerName');
  startScreen.classList.add('display-none');

  players = game(playerName.value);
  renderCarrierShipBoard();
  shipsContainer.textContent = '';
  createShips(4);
  createShips(42);
  createShips(3);
  createShips(2);
  createShips(1);
  shipsContainer.innerHTML += `
  <button id="start-game" class="display-none">start game</button>
  `;
  startGame = document.querySelector('#start-game');
  shipDrag('.ship-4', players);
  shipDrag('.ship-4-2', players);
  shipDrag('.ship-3', players);
  shipDrag('.ship-2', players);
  shipDrag('.ship-1', players);
  shipsScreen.classList.remove('display-none');

  startGame.addEventListener('click', () => {
    shipsScreen.classList.add('display-none');
    renderBoards();
    gameScreen.classList.remove('display-none');
  });
});

restartGame.addEventListener('click', () => {
  startScreen.classList.remove('display-none');
  const playerName = document.querySelector('#playerName');
  playerName.value = '';
  gameScreen.classList.add('display-none');
  endScreen.classList.add('display-none');
});
