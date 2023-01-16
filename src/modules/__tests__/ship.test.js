import ShipFactory from '../ship';

test('has length property', () => {
  const ship = new ShipFactory(3);
  expect(ship.getLength()).toBe(3);
});
test('hits the ship', () => {
  const ship = new ShipFactory(3);
  ship.hit();
  expect(ship.getHits()).toBe(1);
});
test('sinks the ship', () => {
  const ship = new ShipFactory(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
