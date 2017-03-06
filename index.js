#!/usr/bin/env node

var prompt = require('prompt');

prompt.start();

// testing the use of `prompt`
prompt.get(['test'], function(err, result) {
  if(err) {
    return err;
  }
  console.log('testing the prompt from user');
  console.log('here is the actual result:', result.test);
})


// below code is the actual game
var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function makeMove(positionX, positionY, mark) {
  if(board[positionY][positionX]) {
    console.error('invalid move');
  }
  board[positionY][positionX] = mark;
}

function printBoard() {
  console.log(
    `${board[0]}
    ${board[1]}
    ${board[2]}`
  )
}
