/* 
  Problem: Find shortest path of knight

  Input: Two arrays, pair of numbers

  Output: Array or Array of arrays, pair of numbers

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
        const name = [j, i];

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

  function getAvailMoves(node) {
    const array = [];

    const nodeTTL = node?.top?.top?.left;
    if (nodeTTL) array.push(nodeTTL);

    const nodeTTR = node?.top?.top?.right;
    if (nodeTTR) array.push(nodeTTR);

    const nodeRRT = node?.right?.right?.top;
    if (nodeRRT) array.push(nodeRRT);

    const nodeRRB = node?.right?.right?.bottom;
    if (nodeRRB) array.push(nodeRRB);

    const nodeBBR = node?.bottom?.bottom?.right;
    if (nodeBBR) array.push(nodeBBR);

    const nodeBBL = node?.bottom?.bottom?.left;
    if (nodeBBL) array.push(nodeBBL);

    const nodeLLB = node?.left?.left?.bottom;
    if (nodeLLB) array.push(nodeLLB);

    const nodeLLT = node?.left?.left?.top;
    if (nodeLLT) array.push(nodeLLT);

    // console.log(array);
    return array;
  }

  function knightMoves(start, end) {
    /* 
    try bfs
    traverse current.top.top.left
    handle duplicates in queue
    dont search if visited

    challenges:
    how to save path
    */

    const node = board[start[1]][start[0]];
    const queue = getAvailMoves(node); // returns array of non-null nodes
    const visited = [];

    while (queue.length !== 0) {
      const current = queue.shift();

      console.log("QUEUE", queue);
      console.log("VISITED", visited);
      console.log("CURRENT", current.name.toString());

      if (current.name.toString() === end.toString()) return "FOUND";

      if (visited.find((node) => current === node)) continue;
      if (queue.find((node) => current === node)) continue;

      const nodeTTL = current?.top?.top?.left;
      if (nodeTTL) queue.push(nodeTTL);

      const nodeTTR = current?.top?.top?.right;
      if (nodeTTR) queue.push(nodeTTR);

      const nodeRRT = current?.right?.right?.top;
      if (nodeRRT) queue.push(nodeRRT);

      const nodeRRB = current?.right?.right?.bottom;
      if (nodeRRB) queue.push(nodeRRB);

      const nodeBBR = current?.bottom?.bottom?.right;
      if (nodeBBR) queue.push(nodeBBR);

      const nodeBBL = current?.bottom?.bottom?.left;
      if (nodeBBL) queue.push(nodeBBL);

      const nodeLLB = current?.left?.left?.bottom;
      if (nodeLLB) queue.push(nodeLLB);

      const nodeLLT = current?.left?.left?.top;
      if (nodeLLT) queue.push(nodeLLT);

      visited.push(current);
    }

    return "NOT FOUND";
  }

  return { createBoard, connectNodes, knightMoves };
}
const kt = knightTravails();
// console.log(kt.connectNodes());
console.log(kt.knightMoves([3, 3], [7, 7]));
