import ShipFactory from './ship.js';

class GameboardFactory {
  constructor() {
    this.board = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null]];
  }

  placeShip = (x, y, length, dir) => {
    if (this.board[x][y] !== null) return false;
    const ship = new ShipFactory(length);
    let shipPosition = 0;

    if (dir === 'h') {
      if (y + ship.getLength() > 10) return false;

      for (let i = 0; i < ship.getLength(); i += 1) {
        if (this.board[x][y + i] !== null) return false;
      }

      for (let i = y; i < y + ship.getLength(); i += 1) {
        this.board[x].splice(i, 1, { ship, shipPosition });
        shipPosition += 1;
      }
    } else {
      if (x + ship.getLength() > 10) return false;

      for (let i = 0; i < ship.getLength(); i += 1) {
        if (this.board[x + i][y] !== null) return false;
      }

      for (let i = x; i < x + ship.getLength(); i += 1) {
        this.board[i].splice(y, 1, { ship, shipPosition });
        shipPosition += 1;
      }
    }

    return true;
  };

  receiveAttack = (x, y) => {
    if (this.board[x][y] === null) {
      this.board[x][y] = 'miss';
      return this.board[x][y];
    }
    if (this.board[x][y] === 'miss') return false;
    if (typeof this.board[x][y] === 'object' && this.board[x][y].ship.tiles[this.board[x][y].shipPosition] === 'hit') return false;
    this.board[x][y].ship.hit(this.board[x][y].shipPosition);
    return this.board[x][y].ship.tiles[this.board[x][y].shipPosition];
  };

  isSunk = (x, y) => {
    if (typeof this.board[x][y] !== 'object') return false;
    return this.board[x][y].ship.isSunk();
  };

  areAllSunk = () => {
    let sunk = true;

    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        if (this.board[i][j] !== null && this.board[i][j] !== 'miss') {
          if (this.board[i][j].ship.isSunk() !== true) sunk = false;
        }
      }
    }
    return sunk;
  };
  // return {
  //   board, placeShip, receiveAttack, isSunk, areAllSunk,
  // };
}

export default GameboardFactory;
