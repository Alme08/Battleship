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
    enemy.gameboard.receiveAttack(x, y);
    this.changeTurn();
    enemy.changeTurn();
    return enemy.gameboard.board[x][y];
  };

  randomAttack = (enemy) => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return this.attack(enemy, x, y);
  };

  // return {
  //   gameboard, changeTurn, getTurn, attack, randomAttack,
  // };
}

export default Player;
