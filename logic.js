var DIRECTIONS = {
  NORTH: 'n',
  EAST: 'e',
  SOUTH: 's',
  WEST: 'w'
};

/** PUT YOUR LOGIC HERE **/
exports.nextMove = function(board, snakes) {
  // For now, always move East
  return DIRECTIONS.EAST;
};