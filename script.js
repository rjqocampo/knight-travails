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

function createNode(value) {
  const top = null;
  const right = null;
  const bottom = null;
  const left = null;

  return { value, top, right, bottom, left };
}

function knightMoves(start, end) {}
