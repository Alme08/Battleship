class ShipFactory {
  constructor(length) {
    this.length = length;
    this.tiles = [...Array(length).keys()];
  }

  hit = (tile) => {
    this.tiles.splice(tile, 1, 'hit');
  };

  getLength = () => this.length;

  isSunk = () => {
    let sunk = true;
    this.tiles.forEach((tile) => {
      if (tile !== 'hit') sunk = false;
      return null;
    });
    return sunk;
  };

  // return {
  //   getLength, hit, isSunk, tiles,
  // };
}

export default ShipFactory;
