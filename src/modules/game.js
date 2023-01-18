import Player from './player.js';

function game() {
  const human = new Player();
  console.log(human.gameboard.placeShip(0, 0, 2, 'h'));
  human.changeTurn();
}

export default game;
