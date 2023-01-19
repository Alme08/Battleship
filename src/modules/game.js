import Player from './player.js';

function game() {
  const human = new Player();
  const pc = new Player();
  human.gameboard.placeShip(0, 0, 9, 'h');
  pc.gameboard.placeShip(0, 0, 9, 'h');
  human.changeTurn();
  return {
    human,
    pc,
  };
}
const checkPlayerWon = (players) => {
  if (players.human.gameboard.areAllSunk() === true) {
    return players.pc;
  }
  if (players.pc.gameboard.areAllSunk() === true) {
    return players.human;
  }
  return false;
};
export { game, checkPlayerWon };
