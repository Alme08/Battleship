import { game, checkPlayerWon } from './game.js';

const form = document.querySelector('#form');
const startScreen = document.querySelector('.start-screen');
const shipsScreen = document.querySelector('.ships-screen');
const gameScreen = document.querySelector('.game-screen');
const endScreen = document.querySelector('.end-screen');
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
        const divSunk = document.createElement('div');
        divSunk.classList.add('sunk');
        div.appendChild(divSunk);
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

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const div = document.createElement('div');
      div.setAttribute('data-x', i);
      div.setAttribute('data-y', j);
      div.setAttribute('class', 'box');
      carrierBoard.appendChild(div);
    }
  }
};

function renderPlayerFleet(player) {
  document.querySelectorAll('#boardCarrier > div').forEach((e, i) => {
    let pos1;
    let pos2;
    let pos = `${i}`;

    // transform index string to array of pos1 and pos2
    if (i < 10) {
      pos1 = 0;
      pos2 = i;
    } else {
      pos = pos.split('');
      pos1 = pos[0];
      pos2 = pos[1];
    }

    if (!player.gameboard.board[pos1][pos2]) return;
    e.classList.add('fleet');
  });
}

const shipDrag = (shipName) => {
  const body = document.querySelector('body');
  const ship = document.querySelector(shipName);
  const cells = document.querySelectorAll('#boardCarrier > div');
  const child = document.querySelectorAll(`${shipName} > div`);
  let dragSelection;
  let offset;
  let dir = 'v';

  console.log(ship, child);
  // offset for ship selection
  if (child[0]) {
    child[0].addEventListener('mouseenter', () => {
      console.log('0');
      offset = 0;
    });
  }
  if (child[1]) {
    child[1].addEventListener('mouseenter', () => {
      console.log('1');
      offset = -1;
    });
  }
  if (child[2]) {
    child[2].addEventListener('mouseenter', () => {
      console.log('2');
      offset = -2;
    });
  }
  if (child[3]) {
    child[3].addEventListener('mouseenter', () => {
      console.log('3');
      offset = -3;
    });
  }

  ship.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('display-none');
    }, 0);
  });

  ship.addEventListener('dragend', (e, i) => {
    if (dragSelection === -1) {
      e.target.classList.remove('display-none');
      return; // prevents offset error
    }
    let pos1;
    let pos2;
    let pos = `${dragSelection}`;

    // transform index string to array of pos1 and pos2
    if (dragSelection < 10) {
      pos1 = 0;
      pos2 = dragSelection;
    } else {
      pos = pos.split('');
      pos1 = pos[0] * 1;
      pos2 = pos[1] * 1;
    }

    // place ships with proper offset
    if (dir === 'h') pos2 += offset;
    if (dir === 'v') pos1 += offset;
    if (pos2 < 0) return;
    if (shipName === '.ship-1') { if (players.human.gameboard.placeShip(pos1, pos2, 1, dir) === false) return; }
    if (shipName === '.ship-2') { if (players.human.gameboard.placeShip(pos1, pos2, 2, dir) === false) return; }
    if (shipName === '.ship-3') { if (players.human.gameboard.placeShip(pos1, pos2, 3, dir) === false) return; }
    if (shipName === '.ship-4') { if (players.human.gameboard.placeShip(pos1, pos2, 4, dir) === false) return; }
    console.log(dir, players.human.gameboard.board);
    renderPlayerFleet(players.human); // renders fleet
  });

  // event listeners for drag on cells
  cells.forEach((e, i) => {
    e.addEventListener('dragover', (event) => {
      event.preventDefault();
      event.target.classList.add('drag-over');
      dragSelection = i;
    });
  });
  cells.forEach((e) => {
    e.addEventListener('dragleave', (event) => {
      // event.preventDefault();
      event.target.classList.remove('drag-over');
    });
  });
  // removes index if drop outside of cells
  body.addEventListener('dragenter', () => {
    dragSelection = -1;
  });

  ship.addEventListener('click', (e) => {
    if (dir === 'h') {
      dir = 'v';
      e.target.parentNode.classList.toggle('rotated');
    } else {
      dir = 'h';
      e.target.parentNode.classList.toggle('rotated');
    }
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = document.querySelector('#playerName');
  startScreen.classList.add('display-none');
  renderCarrierShipBoard();
  shipsScreen.classList.remove('display-none');
  shipDrag('.ship-4');
  shipDrag('.ship-3');
  players = game(playerName.value);
  // renderBoards();
  // gameScreen.classList.remove('display-none');
});

restartGame.addEventListener('click', () => {
  startScreen.classList.remove('display-none');
  const playerName = document.querySelector('#playerName');
  playerName.value = '';
  gameScreen.classList.add('display-none');
  endScreen.classList.add('display-none');
});
