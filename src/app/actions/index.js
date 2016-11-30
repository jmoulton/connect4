export const getNextTurn = (board, turnCount) => {
  const addFourthToken = (board, turn, player) => {
    const checkHorizontal = (board, turn, player) => {
      for (let index = 0; index < board.length; index++) {
        const arr = board.map(elem => {
          return (elem[index]);
        });

        let lastPlayer = "";
        let seqCount = 1;
        for (let x = 0; x < arr.length; x++) {
          if (seqCount === 3) {
            if (arr[x] === undefined) {
              turn = {possible: true, arr: board[x], col: board[x - 1][0].col};
            }
          }

          if (arr[x] !== undefined && arr[x].turn === lastPlayer && lastPlayer === player) {
            seqCount++;
          } else {
            seqCount = 1;
          }

          lastPlayer = arr[x] === undefined ? "" : arr[x].turn;
        }
      }

      return turn;
    };

    const checkVertical = (board, turn, player) => {
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
          } else {
            seqCount = 1;
          }

          lastPlayer = arr[index].turn;
        }
      });

      if (turn.possible !== true) {
        turn = ({possible: false});
      }

      return turn;
    };

    const vertical = checkVertical(board, turn, player);
    const horizontal = checkHorizontal(board, turn, player);

    if (vertical.possible === true) {
      turn = vertical;
    } else if (horizontal.possible === true) {
      turn = horizontal;
    }

    return turn;
  };

  const getNextTurn = (board, turn) => {
    for (let itemIndex = 0; itemIndex < board.length; itemIndex++) {
      const arr = board[itemIndex].filter(x => x !== undefined);
      if (arr.length > 0 && arr[arr.length - 1].turn === "cpu") {
        const item = itemIndex + 1 < board.length ? board[itemIndex + 1] : board[itemIndex - 1];
        turn = {arr: item, col: arr[0].col};
      }
    }

    return turn;
  };

  let turn = {};
  if (turnCount < 5) {
    if (board[3].filter(x => x !== undefined).length > 4) {
      turn = {arr: board[2], col: "C"};
    } else {
      turn = {arr: board[3], col: "D"};
    }
  } else {
    const winGame = addFourthToken(board, turn, "cpu");
    const blockPlayer = addFourthToken(board, turn, "player");
    console.log(winGame);
    console.log(blockPlayer);
    if (winGame.possible === true) {
      turn = {arr: winGame.arr, col: winGame.col};
    } else if (blockPlayer.possible === true) {
      turn = {arr: blockPlayer.arr, col: winGame.col};
    } else {
      turn = getNextTurn(board, turn);
    }
  }

  return turn;
};
