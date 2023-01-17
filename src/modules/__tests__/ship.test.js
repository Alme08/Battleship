import ShipFactory from '../ship';

test('has length property', () => {
  const ship = new ShipFactory(3);
  expect(ship.getLength()).toBe(3);
});
test('hits the ship', () => {
  const ship = new ShipFactory(3);
  ship.hit(0);
  expect(ship.tiles[0]).toBe('hit');
});
test('sinks the ship', () => {
  const ship = new ShipFactory(3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBeTruthy();
});
