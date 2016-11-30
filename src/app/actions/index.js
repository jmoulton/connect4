export const getNextTurn = (board, turnCount) => {
  const addFourthToken = (board, turn, player) => {
    board.forEach(cols => {
      let lastPlayer = player;
      let seqCount = 1;
      const arr = cols.filter(x => x !== undefined);
      for (let index = 0; index < arr.length; index++) {
        if (seqCount === 3 && arr[index + 1] === undefined) {
          turn = {possible: true, arr: cols, col: cols[0].col};
        }

        if (lastPlayer === player) {
          seqCount++;
        }

        lastPlayer = arr[index].turn;
      }
    });

    if (turn.possible !== true) {
      turn = ({possible: false});
    }

    return turn;
  };

  let turn = {};
  if (turnCount < 4) {
    turn = {arr: board[3], col: "D"};
  } else {
    const winGame = addFourthToken(board, turn, "cpu");
    const blockPlayer = addFourthToken(board, turn, "player");
    if (winGame.possible === true) {
      turn = {arr: winGame.arr, col: winGame.col};
    } else if (blockPlayer.possible === true) {
      turn = {arr: blockPlayer.arr, col: winGame.col};
    } else {
      turn = {arr: board[0], col: "A"};
    }
  }

  return turn;
};
