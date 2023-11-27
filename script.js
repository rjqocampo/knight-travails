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

function createNode(name, parent, children) {
  return { name, parent, children };
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

  function getChildren(node, visited, queue) {
    const array = [];
    const [row, column] = node.name;
    // console.log(row, column);

    const nodeTTL = board[column + 2]?.[row - 1];
    if (nodeTTL) {
      if (!nodeTTL.parent) nodeTTL.parent = node;
      array.push(nodeTTL);
    }
    // console.log(nodeTTL);

    const nodeTTR = board[column + 2]?.[row + 1];
    if (nodeTTR) {
      if (!nodeTTR.parent) nodeTTR.parent = node;
      array.push(nodeTTR);
    }
    // console.log(nodeTTR);

    const nodeRRT = board[column + 1]?.[row + 2];
    if (nodeRRT) {
      if (!nodeRRT.parent) nodeRRT.parent = node;
      array.push(nodeRRT);
    }
    // console.log(nodeRRT);

    const nodeRRB = board[column - 1]?.[row + 2];
    if (nodeRRB) {
      if (!nodeRRB.parent) nodeRRB.parent = node;
      array.push(nodeRRB);
    }
    // console.log(nodeRRB);

    const nodeBBR = board[column - 2]?.[row + 1];
    if (nodeBBR) {
      if (!nodeBBR.parent) nodeBBR.parent = node;
      array.push(nodeBBR);
    }
    // console.log(nodeBBR);

    const nodeBBL = board[column - 2]?.[row - 1];
    if (nodeBBL) {
      if (!nodeBBL.parent) nodeBBL.parent = node;
      array.push(nodeBBL);
    }
    // console.log(nodeBBL);

    const nodeLLB = board[column - 1]?.[row - 2];
    if (nodeLLB) {
      if (!nodeLLB.parent) nodeLLB.parent = node;
      array.push(nodeLLB);
    }
    // console.log(nodeLLB);

    const nodeLLT = board[column + 1]?.[row - 2];
    if (nodeLLT) {
      if (!nodeLLT.parent) nodeLLT.parent = node;
      array.push(nodeLLT);
    }
    // console.log(nodeLLT);

    const newArray = array
      .map((item) => {
        const a = visited.includes(item);
        const b = queue.includes(item);
        // console.log(a, b);

        if (a || b) {
          // console.log("SIMILAR", item);
          return null;
        }
        return item;
      })
      .filter((item) => item);

    // console.log(newArray);

    // console.log(array);
    return newArray;
  }

  function knightMoves(start, end) {
    /* 
    try bfs
    traverse using indexes
    handle duplicates in queue
    dont search if visited

    sometimes parent is looped, climb up is infinite


    - need to have parent/child relationship to backtrack chain
    - base case recursive that bubbles up parents
    */

    const node = board[start[1]][start[0]];
    node.parent = "origin";
    const visited = [];
    let queue = [];
    queue = queue.concat(getChildren(node, visited, queue));

    console.log("END", end.toString());

    while (queue.length !== 0) {
      console.log("QUEUE", queue);
      console.log("VISITED", visited);
      const current = queue.shift();

      if (current.name.toString() === end.toString()) return current;
      console.log("CURRENT", current.name.toString());

      visited.push(current);

      queue = queue.concat(getChildren(current, visited, queue));
    }

    return "NOT FOUND";
  }

  return { createBoard, knightMoves };
}
const kt = knightTravails();
console.log(kt.createBoard());
// console.log(kt.connectNodes());
console.log(kt.knightMoves([0, 0], [1, 1]));
