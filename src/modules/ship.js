const ShipFactory = (length) => {
  const tiles = [...Array(length).keys()];
  const hit = (tile) => {
    tiles.splice(tile, 1, 'hit');
  };
  // const getHits = () => hits;
  const getLength = () => length;
  const isSunk = () => {
    tiles.forEach((tile) => {
      if (tile !== 'hit') return false;
      return null;
    });
    return true;
  };

  return {
    getLength, hit, isSunk, tiles,
  };
};

export default ShipFactory;
