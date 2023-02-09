function renderPlayerFleet(player) {
  document.querySelectorAll('#boardCarrier > div').forEach((e, i) => {
    let pos1;
    let pos2;
    let pos = `${i}`;

    // transform index string to array of pos1 and pos2
    if (i < 10) {
      pos1 = 0;
      pos2 = i;
    } else {
      pos = pos.split('');
      pos1 = pos[0];
      pos2 = pos[1];
    }

    if (!player.gameboard.board[pos1][pos2]) return;
    e.classList.add('fleet');
  });
}

const shipDrag = (shipName, players) => {
  const ship = document.querySelector(shipName);
  const shipsContainer = document.querySelector('.ships');
  const startGame = document.querySelector('#start-game');
  const cells = document.querySelectorAll('#boardCarrier > div');
  const child = document.querySelectorAll(`${shipName} > div`);
  let dragSelection = null;
  let offset;
  let dir = 'v';

  // offset for ship selection
  if (child[0]) {
    child[0].addEventListener('mouseenter', () => { offset = 0; });
  }
  if (child[1]) {
    child[1].addEventListener('mouseenter', () => { offset = -1; });
  }
  if (child[2]) {
    child[2].addEventListener('mouseenter', () => { offset = -2; });
  }
  if (child[3]) {
    child[3].addEventListener('mouseenter', () => { offset = -3; });
  }

  ship.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('display-none');
    }, 0);
  });

  ship.addEventListener('dragend', (e) => {
    if (dragSelection === -1) {
      e.target.classList.remove('display-none');
      return; // prevents offset error
    }
    let pos1;
    let pos2;
    let pos = `${dragSelection}`;

    // transform index string to array of pos1 and pos2
    if (dragSelection < 10) {
      pos1 = 0;
      pos2 = dragSelection;
    } else {
      pos = pos.split('');
      pos1 = pos[0] * 1;
      pos2 = pos[1] * 1;
    }

    // place ships with proper offset
    if (dir === 'h') pos2 += offset;
    if (dir === 'v') pos1 += offset;
    if (pos2 < 0) return;
    if (shipName === '.ship-1') {
      if (players.human.gameboard.placeShip(pos1, pos2, 1, dir) === false) {
        e.target.classList.remove('display-none');
        return;
      }
    }
    if (shipName === '.ship-2') {
      if (players.human.gameboard.placeShip(pos1, pos2, 2, dir) === false) {
        e.target.classList.remove('display-none');
        return;
      }
    }
    if (shipName === '.ship-3') {
      if (players.human.gameboard.placeShip(pos1, pos2, 3, dir) === false) {
        e.target.classList.remove('display-none');
        return;
      }
    }
    if (shipName === '.ship-4' || shipName === '.ship-4-2') {
      if (players.human.gameboard.placeShip(pos1, pos2, 4, dir) === false) {
        e.target.classList.remove('display-none');
        return;
      }
    }
    e.target.classList.add('display-none');
    renderPlayerFleet(players.human); // renders fleet

    // renders start game button when all ships are in the cells
    let display = true;
    for (let i = 0; i < shipsContainer.children.length; i += 1) {
      if (!shipsContainer.children[i].classList.contains('display-none')) {
        display = false;
      }
    }
    if (display === true) startGame.classList.remove('display-none');
  });

  // event listeners for drag on cells
  cells.forEach((e, i) => {
    e.addEventListener('dragover', (event) => {
      event.preventDefault();
      event.target.classList.add('drag-over');
      dragSelection = i;
    });
  });
  cells.forEach((e) => {
    e.addEventListener('dragleave', (event) => {
      event.target.classList.remove('drag-over');
      // removes index if drop outside of cells
      dragSelection = -1;
    });
  });

  cells.forEach((e) => {
    e.addEventListener('drop', (event) => {
      event.target.classList.remove('drag-over');
    });
  });

  ship.addEventListener('click', (e) => {
    if (dir === 'h') {
      dir = 'v';
      e.target.parentNode.classList.toggle('rotated');
    } else {
      dir = 'h';
      e.target.parentNode.classList.toggle('rotated');
    }
  });
};

export default shipDrag;
