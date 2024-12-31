export const checkWinningCombination = (
  gameState: ("X" | "O" | "-")[][]
): "X" | "O" | "-" => {
  const rows = gameState.length;
  const cols = gameState[0].length;
  for (let row = 0; row < rows; row++) {
    const result = check(gameState, [row, 0], [0, 1]);
    if (result !== "-") {
      return result;
    }
  }
  for (let col = 0; col < cols; col++) {
    const result = check(gameState, [0, col], [1, 0]);
    if (result !== "-") {
      return result;
    }
  }
  const mainDiag = check(gameState, [0, 0], [1, 1]);
  if (mainDiag !== "-") {
    return mainDiag;
  }
  const secondDiag = check(gameState, [rows - 1, 0], [-1, 1]);

  if (secondDiag !== "-") {
    return secondDiag;
  }
  return "-";
};

const check = (
  gameState: ("X" | "O" | "-")[][],
  start: number[],
  delta: number[]
): "X" | "O" | "-" => {
  const row = gameState.length;
  const col = gameState[0].length;
  const ref = gameState[start[0]][start[1]];
  if (ref === "-") {
    return "-";
  }
  while (start[0] < row && start[1] < col) {
    if (gameState[start[0]][start[1]] !== ref) {
      return "-";
    }
    start[0] += delta[0];
    start[1] += delta[1];
  }
  return ref;
};
