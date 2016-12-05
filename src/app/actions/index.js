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
        let lastPlayer = "";
        let seqCount = 0;
        const arr = cols.filter(x => x !== undefined);
        for (let index = 0; index < arr.length; index++) {
          if ((lastPlayer === player && arr[index].turn === player) || lastPlayer === "") {
            seqCount++;
          } else {
            seqCount = 1;
          }

          if (seqCount === 3 && arr[index + 1] === undefined) {
            turn = {possible: true, arr: cols, col: cols[0].col};
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
    let leftWeight = 0;
    let rightWeight = 0;

    for (let itemIndex = 0; itemIndex < board.length - 4; itemIndex++) {
      const arr = board[itemIndex].filter(x => x !== undefined);
      leftWeight += arr.length;
    }

    for (let itemIndex = board.length - 1; itemIndex > 3; itemIndex--) {
      const arr = board[itemIndex].filter(x => x !== undefined);
      rightWeight += arr.length;
    }

    if (rightWeight > leftWeight) {
      for (let itemIndex = board.length - 1; itemIndex > 3; itemIndex--) {
        const arr = board[itemIndex].filter(x => x !== undefined);
        if (arr.length > 0 && arr[arr.length - 1].turn === "cpu") {
          const item = itemIndex + 1 < board.length ? board[itemIndex + 1] : board[itemIndex - 1];
          turn = {arr: item, col: arr[0].col};
        }
      }
    } else {
      for (let itemIndex = 0; itemIndex < board.length - 4; itemIndex++) {
        const arr = board[itemIndex].filter(x => x !== undefined);
        if (arr.length > 0 && arr[arr.length - 1].turn === "cpu") {
          const item = itemIndex - 1 > 0 ? board[itemIndex - 1] : board[itemIndex + 1];
          turn = {arr: item, col: arr[0].col};
        }
      }
    }

    if (turn.arr === undefined) {
      const columns = ["A", "B", "C", "D", "E", "F", "G"];
      const rand = Math.floor(Math.random() * 6) + 1;
      turn = {arr: board[rand], col: columns[rand]};
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
