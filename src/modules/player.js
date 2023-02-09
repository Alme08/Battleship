import GameboardFactory from './gameboard.js';

class Player {
  constructor(name) {
    this.gameboard = new GameboardFactory();
    this.turn = false;
    this.name = name;
  }

  changeTurn = () => {
    this.turn = !this.turn;
  };

  getTurn = () => this.turn;

  attack = (enemy, x, y) => {
    this.changeTurn();
    enemy.changeTurn();
    return enemy.gameboard.receiveAttack(x, y);
  };

  randomAttack = (enemy) => {
    let check = false;
    do {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      if (enemy.gameboard.board[x][y] !== 'miss'
      && enemy.gameboard.board[x][y]?.ship.tiles[enemy.gameboard.board[x][y].shipPosition] !== 'hit') {
        check = this.attack(enemy, x, y);
      }
    } while (check === false);
    return check;
  };

  // creates a ship with random pos and orientation
  randomShip = (length) => {
    const pos1 = Math.floor(Math.random() * 10);
    const pos2 = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = 'h';
      if (this.gameboard.placeShip(pos1, pos2, length, dir) === false) return false;
    }

    if (dir === 1) {
      dir = 'v';
      if (this.gameboard.placeShip(pos1, pos2, length, dir) === false) return false;
    }

    return true;
  };

  randomFleet = () => {
    // create 1 ships of length 1
    for (let i = 0; i < 1;) {
      if (this.randomShip(1) !== false) i += 1;
    }
    // create 1 ships of length 2
    for (let i = 0; i < 1;) {
      if (this.randomShip(2) !== false) i += 1;
    }
    // create 1 ships of length 3
    for (let i = 0; i < 1;) {
      if (this.randomShip(3) !== false) i += 1;
    }
    // create 2 ship of length 4
    for (let i = 0; i < 2;) {
      if (this.randomShip(4) !== false) i += 1;
    }
  };

  // return {
  //   gameboard, changeTurn, getTurn, attack, randomAttack,
  // };
}

export default Player;
