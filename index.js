#!/usr/bin/env node

var prompt = require('prompt');

// prompt.start();
//
// // testing the use of `prompt`
// prompt.get(['test'], function(err, result) {
//   if(err) {
//     return err;
//   }
//   console.log('testing the prompt from user');
//   console.log('here is the actual result:', result.test);
// })


// below code is the actual game
var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function makeMove(positionX, positionY, mark) {
  if(board[positionY][positionX] !== null) {
    console.error('invalid move');
    return false;
  }
  board[positionY][positionX] = mark;
  return true;
}

function printBoard() {
  console.log(
    `${board[0]}
    ${board[1]}
    ${board[2]}`
  )
}

function checkWin() {
  if(rowWin(board) || colWin(board) || diagonalWin(board)) {
    return true;
  }
  return false;
}

function play(player) {
  prompt.start();
  console.log(`player ${player} turn: please enter a position in the form (x, y)`);
  prompt.get([`position`], function(err, result) {
    if(err) {
      console.error(err);
    }
    if(validMove(result.position)) {
      var positionX = result.position.slice(0, 1);
      var positionY = result.position.slice(3);
      var mark = player;
      makeMove(positionX, positionY, mark);
      printBoard();
      if(checkWin()) {
        console.log(`WINNER! ${player}`);
        return;
      }
    }

    if(player === 'X') {
      play('O');
    } else {
      play('X');
    }
  })
}

function rowWin(board) {
  if(board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
    return true;
  } else if(board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
    return true;
  } else if(board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
    return true;
  }
  return false;
}

function colWin(board) {
  return rowWin(rotateBoard(board));
}

function rotateBoard(board) {
  return board.map(function(col, i) {
    return board.map(function(row, j) {
      return row[i][j];
    });
  });
}
