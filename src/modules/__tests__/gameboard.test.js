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
