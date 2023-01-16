const ShipFactory = (length) => {
  let hits = 0;
  const hit = () => { hits += 1; };
  const getHits = () => hits;
  const getLength = () => length;
  const isSunk = () => {
    if (length > hits) return false;
    return true;
  };

  return {
    getLength, hit, getHits, isSunk,
  };
};

export default ShipFactory;
