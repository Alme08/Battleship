import ShipFactory from './ship';

const GameboardFactory = () => {
  const board = [
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

  const placeShip = (x, y, length, dir) => {
    if (board[x][y] !== null) return false;
    const ship = new ShipFactory(length);
    let shipPosition = 0;

    if (dir === 'h') {
      if (y + ship.getLength() > 10) return false;

      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[x][y + i] !== null) return false;
      }

      for (let i = y; i < y + ship.getLength(); i += 1) {
        board[x].splice(i, 1, { ship, shipPosition });
        shipPosition += 1;
      }
    } else {
      if (x + ship.getLength() > 10) return false;

      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[x + i][y] !== null) return false;
      }

      for (let i = x; i < x + ship.getLength(); i += 1) {
        board[i].splice(y, 1, { ship, shipPosition });
        shipPosition += 1;
      }
    }

    return true;
  };

  const receiveAttack = (x, y) => {
    if (board[x][y] === 'miss') return false;
    if (typeof board[x][y] === 'object' && board[x][y].ship.tiles[board[x][y].shipPosition] === 'hit') return false;
    if (board[x][y] === null) {
      board[x][y] = 'miss';
      return board[x][y];
    }
    board[x][y].ship.hit(board[x][y].shipPosition);
    return board[x][y].ship.tiles[board[x][y].shipPosition];
  };

  const isSunk = (x, y) => {
    if (typeof board[x][x] !== 'object') return false;
    return board[x][y].ship.isSunk();
  };

  const areAllSunk = () => {
    let sunk = true;

    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        if (board[i][j] !== null && board[i][j] !== 'miss') {
          if (board[i][j].ship.isSunk() !== true) sunk = false;
        }
      }
    }
    return { sunk };
  };
  return {
    board, placeShip, receiveAttack, isSunk, areAllSunk,
  };
};

export default GameboardFactory;
