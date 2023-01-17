import GameboardFactory from './gameboard';

const Player = () => {
  const gameboard = new GameboardFactory();
  let turn = false;

  const changeTurn = () => {
    turn = !turn;
  };
  const getTurn = () => turn;

  const attack = (enemy, x, y) => {
    enemy.gameboard.receiveAttack(x, y);
    changeTurn();
    enemy.changeTurn();
    return enemy.gameboard.board[x][y];
  };

  const randomAttack = (enemy) => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return attack(enemy, x, y);
  };

  return {
    gameboard, changeTurn, getTurn, attack, randomAttack,
  };
};

export default Player;
