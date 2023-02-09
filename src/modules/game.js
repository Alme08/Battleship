import Player from './player.js';

function game(name) {
  const human = new Player(name);
  const pc = new Player('Pc');
  pc.randomFleet();
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
