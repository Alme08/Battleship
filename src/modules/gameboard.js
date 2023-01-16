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
    if (board[x][y] === null) return false;
    const ship = new ShipFactory(length);
    let shipPosition = 0;

    if (dir === 'h') {
      if (y + ship.getLength() > 10) return false;

      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[x][y + i] === null) return false;
      }

      for (let i = y; i < y + ship.getLength(); i += 1) {
        board[x].splice(i, 1, { ship, shipPosition });
        shipPosition += 1;
      }
    } else {
      if (x + ship.getLength() > 10) return false;

      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[x + i][y] === null) return false;
      }

      for (let i = x; i < x + ship.getLength(); i += 1) {
        board[i].splice(y, 1, { ship, shipPosition });
        shipPosition += 1;
      }
    }
  };
  return { board, placeShip };
};

export default GameboardFactory;
