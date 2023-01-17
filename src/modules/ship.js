const ShipFactory = (length) => {
  const tiles = [...Array(length).keys()];
  const hit = (tile) => {
    tiles.splice(tile, 1, 'hit');
  };
  const getLength = () => length;
  const isSunk = () => {
    let sunk = true;
    tiles.forEach((tile) => {
      if (tile !== 'hit') sunk = false;
      return null;
    });
    return sunk;
  };

  return {
    getLength, hit, isSunk, tiles,
  };
};

export default ShipFactory;
