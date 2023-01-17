import GameboardFactory from '../gameboard';

test('creates a 10x10 board', () => {
  const g = new GameboardFactory();
  expect(g.board.length).toBe(10);
  g.board.forEach((element) => {
    expect(element.length).toBe(10);
  });
});
// place ship
test('place ship', () => {
  const g = new GameboardFactory();
  expect(g.placeShip(0, 0, 3, 'h')).toBeTruthy();
  expect(g.board[0][0]).not.toBe(null);
  expect(g.board[0][1]).not.toBe(null);
  expect(g.board[0][2]).not.toBe(null);
});

test("Returns false if there's already a ship", () => {
  const g = new GameboardFactory();
  g.placeShip(0, 0, 2, 'v');
  expect(g.placeShip(1, 0, 3, 'h')).toBe(false);
});

test('Place horizontal ship of length 4 at pos 4,4', () => {
  const g = new GameboardFactory();
  g.placeShip(4, 4, 4, 'h');
  expect(g.board[4][4] && g.board[4][5] && g.board[4][6] && g.board[4][7]).toBeTruthy();
});

test('Rejects horizontal ship that goes over the edge', () => {
  const g = new GameboardFactory();
  expect(g.placeShip(0, 6, 5, 'h')).toBe(false);
});

test('place vertical ship of length 4 at pos 0,0', () => {
  const g = new GameboardFactory();
  g.placeShip(0, 0, 4, 'v');
  expect(g.board[0][0] && g.board[1][0] && g.board[2][0] && g.board[3][0]).toBeTruthy();
});

test('Rejects vertical ship that goes over the edge', () => {
  const g = new GameboardFactory();
  expect(g.placeShip(7, 0, 4, 'v')).toBe(false);
});

// receive attack

test('hit ship return position with "hit" ', () => {
  const g = new GameboardFactory();
  g.placeShip(0, 0, 5, 'h');
  expect(g.receiveAttack(0, 0)).toBe('hit');
});

test('2x hit ship return position with hit', () => {
  const g = new GameboardFactory();
  g.placeShip(0, 0, 5, 'v');
  g.receiveAttack(0, 0);
  g.receiveAttack(4, 0);
  expect(g.board[0][0].ship.tiles[g.board[0][0].shipPosition]
    && g.board[4][0].ship.tiles[g.board[0][0].shipPosition]).toBe('hit');
});

// a ship is sunk

test('return true if ship is sunk', () => {
  const g = new GameboardFactory();
  g.placeShip(0, 0, 2, 'h');
  g.receiveAttack(0, 0);
  g.receiveAttack(0, 1);
  expect(g.isSunk(0, 0)).toBeTruthy();
});

test('return false if ship is not sunk', () => {
  const g = new GameboardFactory();
  g.placeShip(0, 0, 2, 'h');
  g.receiveAttack(0, 0);
  expect(g.isSunk(0, 0)).toBe(false);
});

// all ships are sunk

test('Check if all ships in the board are sunk', () => {
  const g = new GameboardFactory();
  g.placeShip(0, 0, 3, 'h');
  g.placeShip(2, 3, 4, 'v');
  g.receiveAttack(0, 0);
  g.receiveAttack(0, 1);
  g.receiveAttack(0, 2);
  g.receiveAttack(2, 3);
  g.receiveAttack(3, 3);
  g.receiveAttack(4, 3);

  expect(g.areAllSunk()).toBeTruthy();
});
