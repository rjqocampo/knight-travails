/* 
  Problem: Find shortest path of knight

  Input: Two arrays, pair of numbers

  Output: Array or List of arrays, pair of numbers

  Example:
  knightMoves([3, 3], [4, 3])
  You made it in 3 moves
  [3, 3]
  [4, 5]
  [2, 4]
  [4, 3]

  Constraints: 
  - Cannot go out of bounds in a 8x8 board
  - Knight moveset

  Solution:

  Pseudocode:

  Todo:
  - Watch a crash course on graph data structure
  - Figure out best data structure (Array, Linked List, BST, Graph)
  - Figure out best search algorithm (Linear, Binary, DFS, BFS)

  */

function createNode(name) {
  const top = null;
  const right = null;
  const bottom = null;
  const left = null;

  return { name, top, right, bottom, left };
}

function knightTravails() {
  function createBoard() {
    const column = [];

    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        const name = `${j}, ${i}`;

        row.push(createNode(name));
      }
      column.push(row);
    }

    return column;
  }

  const board = createBoard();

  function connectNodes() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i !== 7) {
          board[i][j].top = board[i + 1][j];
        }

        if (j !== 7) {
          board[i][j].right = board[i][j + 1];
        }

        if (i !== 0) {
          board[i][j].bottom = board[i - 1][j];
        }

        if (j !== 0) {
          board[i][j].left = board[i][j - 1];
        }
      }
    }

    return board;
  }

  connectNodes();

  function knightMoves(start, end) {}

  return { createBoard, connectNodes };
}
const kt = knightTravails();
console.log(kt.connectNodes());
