import GameboardFactory from '../gameboard';

test('creates a 10x10 board', () => {
  const g = new GameboardFactory();
  expect(g.board.length).toBe(10);
  g.board.forEach((element) => {
    expect(element.length).toBe(10);
  });
});
