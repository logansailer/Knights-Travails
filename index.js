// initialize board
// set knights position in board
// have knight do all possible moves until it reaches end location
// add each move to visited variable
// get length of visited variable, if less than best, replace best
// return visited array
function Node(position, path) {
  // sets board bounds
  if (
    position[0] < 0 ||
    position[0] > 7 ||
    position[1] < 0 ||
    position[1] > 7
  ) {
    return null;
  }
  // if in board, return new position and where from
  return { position, path };
}

function knightMoves(start, end) {
  // sets start to first current position and total path position
  let recentMove = [Node(start, [start])];
  // sets current position
  let current = recentMove.shift();

  // runs possible moves until current position is the same as end position
  while (current.position[0] !== end[0] || current.position[1] !== end[1]) {
    const possible = [
      [current.position[0] + 1, current.position[1] + 2],
      [current.position[0] + 1, current.position[1] - 2],
      [current.position[0] - 1, current.position[1] + 2],
      [current.position[0] - 1, current.position[1] - 2],
      [current.position[0] + 2, current.position[1] + 1],
      [current.position[0] + 2, current.position[1] - 1],
      [current.position[0] - 2, current.position[1] + 1],
      [current.position[0] - 2, current.position[1] - 1],
    ];
    //if the move is possible, preforms it
    possible.forEach((move) => {
      let node = Node(move, current.path.concat([move]));
      if (node) {
        recentMove.push(node);
      }
    });
    current = recentMove.shift();
  }
  console.log(
    `You made it in ${current.path.length - 1} moves!  Here's your path:`
  );
  current.path.forEach((position) => {
    console.log(position);
  });
}

knightMoves([0, 0], [2, 4]);
