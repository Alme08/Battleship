import Player from '../player';

test('Create a player', () => {
  const player = new Player();
  expect(player).toBeInstanceOf(Object);
});

test('Set initial turn', () => {
  const player = new Player();
  const pc = new Player();
  player.changeTurn();
  expect(player.getTurn()).toBe(true);
  expect(pc.getTurn()).toBe(false);
});

test('Attack to enemy', () => {
  const player = new Player();
  const pc = new Player();
  player.changeTurn();
  expect(player.attack(pc, 0, 0)).toBe('miss');
  expect(player.getTurn()).toBe(false);
  expect(pc.getTurn()).toBeTruthy();
});

// random attack

test('The pc is capable of make randoms attacks', () => {
  const player = new Player();
  const pc = new Player();
  expect(pc.randomAttack(player)).toBe('miss');
});
