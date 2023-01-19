import GameboardFactory from './gameboard.js';

class Player {
  constructor() {
    this.gameboard = new GameboardFactory();
    this.turn = false;
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

  // return {
  //   gameboard, changeTurn, getTurn, attack, randomAttack,
  // };
}

export default Player;
