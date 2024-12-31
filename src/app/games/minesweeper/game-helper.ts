export const generateBoard = (size: number, bombs: number): number[][] => {
  let board = Array.from({ length: size }, () => Array(size).fill(-1));
  console.log("board: ", board);
  board = placeBombs(board, bombs);
  console.log("bombs placed board: ", board);
  board = populateRemaining(board, size);
  console.log("All Populated Board: ", board);
  return board;
};

const placeBombs = (board: number[][], bombs: number): number[][] => {
  let remainingBombs = bombs;
  while (remainingBombs > 0) {
    board.forEach((row, i) =>
      row.forEach((element, j) => {
        if (element === -1 && remainingBombs > 0) {
          let result = Math.ceil(Math.random() * 100) % 11 === 0;
          console.log("result: ", result);
          result && (remainingBombs -= 1);
          board[i][j] = result ? 0 : element;
        }
      })
    );
  }
  return board;
};

const populateRemaining = (board: number[][], size: number): number[][] => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === 0) {
        foundBomb(board, i, j);
      }
    }
  }
  return board;
};

const foundBomb = (board: number[][], i: number, j: number) => {
  const size = board.length;
  if (i - 1 >= 0) {
    newBombNear(board, i - 1, j);
    if (j - 1 >= 0) {
      newBombNear(board, i - 1, j - 1);
    }
    if (j + 1 < size) {
      newBombNear(board, i - 1, j + 1);
    }
  }
  if (j - 1 >= 0) {
    newBombNear(board, i, j - 1);
  }
  if (j + 1 < size) {
    newBombNear(board, i, j + 1);
  }
  if (i + 1 < size) {
    newBombNear(board, i + 1, j);
    if (j - 1 >= 0) {
      newBombNear(board, i + 1, j - 1);
    }
    if (j + 1 < size) {
      newBombNear(board, i + 1, j + 1);
    }
  }
};

function newBombNear(board: number[][], arg1: number, arg2: number) {
  if (board[arg1][arg2] !== 0) {
    board[arg1][arg2] = board[arg1][arg2] == -1 ? 1 : board[arg1][arg2] + 1;
  }
}
