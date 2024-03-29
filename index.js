// =============================
// Constants
// =============================
const selectPlayersDivName = "select-players-div";
const selectPlayerIconDivName = "select-player-icon-div";
const boardDivName = "board-div";
const boardInnerDivName = "board-inner-div";
const winnerCanvasDiv = "winner-canvas-div";

const playerss = ["playerOne", "playerTwo", "machine"];
const horizontalWinnersMoves = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
const verticalWinnersMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
const upRightToLeftDownWinners = [[6, 4, 2]];
const upLeftRoRightDownWinners = [[0, 4, 8]];

// =============================
// Variables
// =============================
let playerOne = "";
let playerTwo = "";
let turn = "";
let winnersMovesAndCoordinates = ["", []];
let allowGameSounds = false;

// =============================
// Game Status
// =============================
let gameAlreadyStart = false;

// =============================
// Players
// =============================
let players = 0;
let playerIcon = "";
let machineIcon = "";
let lastMove = "";

// =============================
// Board
// =============================
let board = [
  [0, "", ""],
  [0, "", ""],
  [0, "", ""],
  [0, "", ""],
  [0, "", ""],
  [0, "", ""],
  [0, "", ""],
  [0, "", ""],
  [0, "", ""],
];

// =============================
// Canvas
// =============================
let canvas;
let context;
let width;
let height;

// =============================
// The toggle button function
// =============================
function toggleSoundOnOff() {
  if (allowGameSounds === true) {
    allowGameSounds = false;
  } else if (allowGameSounds === false) {
    allowGameSounds = true;
  }
}

function playAudio(audioName) {
  if (allowGameSounds == true) {
    var audio = new Audio(`./assets/sounds/${audioName}.mp3`);
    audio.play();
  }
}

// =============================
// Game Functions
// =============================
function setupWinnerCanvas() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  width = canvas.width;
  height = canvas.height;
  context.lineWidth = 20;
}
function completeDraw() {
  context.strokeStyle = "green";
  context.stroke();
}

// Select player mode functions
function onePlayerVsIa() {
  players = 1;
  playerOne = playerss[0];
  playerTwo = playerss[2];
  playAudio("dragonzord-flute");
  setVisibilityToDiv(selectPlayersDivName, "hide");
  setVisibilityToDiv(selectPlayerIconDivName, "show");
}
function twoPlayers() {
  players = 2;
  playerOne = playerss[0];
  playerTwo = playerss[1];
  playAudio("dragonzord-sound-effect");
  setVisibilityToDiv(selectPlayersDivName, "hide");
  setVisibilityToDiv(selectPlayerIconDivName, "show");
}

// Select icons functions
function useIconX() {
  playerIcon = "x";
  if (players === 1) {
    machineIcon = "o";
  } else {

    turn = playerss[0]
  }
  playAudio("megaman-3-death-sound-effect");
  setVisibilityToDiv(selectPlayerIconDivName, "hide");
  setVisibilityToDiv(boardDivName, "show");
}
function useIconO() {
  playerIcon = "o";
  if (players === 1) {
    machineIcon = "x";
  }
  else {

    turn = playerss[0]
  }
  playAudio("mm4-victory");
  setVisibilityToDiv(selectPlayerIconDivName, "hide");
  setVisibilityToDiv(boardDivName, "show");
}

// Functionalities browser functions
function setVisibilityToDiv(divId, visibility) {
  let currentDiv = this.document.getElementById(divId);
  if (visibility === "hide") {
    if (currentDiv.style.display === "show") {
      currentDiv.style.display = "block";
    } else {
      currentDiv.style.display = "none";
    }
  } else if (visibility === "show") {
    currentDiv.style.display = "block";
  }
}

function setClassToLink(index, iconClass) {
  let innerDiv = document.getElementById("board-inner-div");
  let link = innerDiv.children[index];
  link.classList.add(iconClass);
  link.removeAttribute("onclick");
}

// =============================
// Draw winner functions
// =============================

// Draw winners rows
function drawFirstRowWinner() {
  showWinnerCanvas();
  drawHorizontalWinnerGreenLine(1, context, width, height);
  completeDraw();
}
function drawSecondRowWinner() {
  showWinnerCanvas();
  drawHorizontalWinnerGreenLine(2, context, width, height);
  completeDraw();
}
function drawThirdRowWinner() {
  showWinnerCanvas();
  drawHorizontalWinnerGreenLine(3, context, width, height);
  completeDraw();
}

// Draw winners columns
function drawFirstColumnWinner() {
  showWinnerCanvas();
  drawVerticalWinnerGreenLine(1, context, width, height);
  completeDraw();
}
function drawSecondColumnWinner() {
  showWinnerCanvas();
  drawVerticalWinnerGreenLine(2, context, width, height);
  completeDraw();
}
function drawThirdColumnWinner() {
  showWinnerCanvas();
  drawVerticalWinnerGreenLine(3, context, width, height);
  completeDraw();
}

// Draw winner corners
function drawUpLeftToRightDownWinner() {
  showWinnerCanvas();
  drawCornerWinnerGreenLine("up-left-to-right-down", context, width);
  completeDraw();
}
function drawUpRightToLeftDownWinner() {
  showWinnerCanvas();
  drawCornerWinnerGreenLine("up-right-to-left-down", context, width);
  completeDraw();
}

// Draw main functions
function drawHorizontalWinnerGreenLine(number, context, width) {
  switch (number) {
    case 1:
      context.beginPath();
      context.moveTo(width, 95);
      context.lineTo(0, 95);
      break;
    case 2:
      context.beginPath();
      context.moveTo(0, 275);
      context.lineTo(width, 275);
      break;
    case 3:
      context.beginPath();
      context.moveTo(width, width - 100);
      context.lineTo(0, width - 100);
      break;
  }
}
function drawVerticalWinnerGreenLine(number, context, width) {
  switch (number) {
    case 1:
      context.beginPath();
      context.moveTo(90, width);
      context.lineTo(90, 1);
      break;
    case 2:
      context.beginPath();
      context.moveTo(275, width);
      context.lineTo(275, 1);
      break;
    case 3:
      context.beginPath();
      context.moveTo(460, width);
      context.lineTo(width - 90, 1);
      break;
  }
}
function drawCornerWinnerGreenLine(orientation, context, width) {
  switch (orientation) {
    case "up-left-to-right-down":
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(800, 795);
      break;
    case "up-right-to-left-down":
      context.beginPath();
      context.moveTo(550, 1);
      context.lineTo(1, 550);
      break;
  }
}

// =============================
// Board movements functions
// =============================
function moveTo(coordinate) {
  switch (coordinate[0]) {
    case 0:
      setClassToLink(0, getNextPlayerIcon());
      board[0] = [0, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    case 1:
      setClassToLink(1, getNextPlayerIcon());
      board[1] = [1, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    case 2:
      setClassToLink(2, getNextPlayerIcon());
      board[2] = [2, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    case 3:
      setClassToLink(3, getNextPlayerIcon());
      board[3] = [3, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    case 4:
      setClassToLink(4, getNextPlayerIcon());
      board[4] = [4, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    case 5:
      setClassToLink(5, getNextPlayerIcon());
      board[5] = [5, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    case 6:
      setClassToLink(6, getNextPlayerIcon());
      board[6] = [6, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    case 7:
      setClassToLink(7, getNextPlayerIcon());
      board[7] = [7, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    case 8:

      setClassToLink(8, getNextPlayerIcon());
      board[8] = [8, getPlayerName(), "F"];
      if (isThereAWinner()) {
        return;
      }
      machineAutoMove();
      break;
    default:
      break;
  }
}

function getPlayerName() {

  if (players === 1) {
    return playerOne;
  } else {
    if (turn === playerOne) {
      turn = playerss[1];
    } else if (turn === playerTwo) {
      turn = playerss[0];
    }
  }
  return turn;
}

function isThereAWinner() {
  let tempWinnerBoard = board.slice();
  let playerOneMoves = tempWinnerBoard.filter((x) => x[1] === playerOne);
  let playerTwoMoves = tempWinnerBoard.filter((x) => x[1] === playerTwo);

  if (isThereAHorizontalWinner(playerOneMoves, playerTwoMoves)) {
    if (
      winnersMovesAndCoordinates[1].every((x) =>
        horizontalWinnersMoves[0].includes(x)
      )
    ) {
      drawFirstRowWinner();
      return true;
    }

    if (
      winnersMovesAndCoordinates[1].every((x) =>
        horizontalWinnersMoves[1].includes(x)
      )
    ) {
      drawSecondRowWinner();
      return true;
    }

    if (
      winnersMovesAndCoordinates[1].every((x) =>
        horizontalWinnersMoves[2].includes(x)
      )
    ) {
      drawThirdRowWinner();
      return true;
    }
  }

  if (isThereAVerticalWinner(playerOneMoves, playerTwoMoves)) {
    if (
      winnersMovesAndCoordinates[1].every((x) =>
        verticalWinnersMoves[0].includes(x)
      )
    ) {
      drawFirstColumnWinner();
      return true;
    }

    if (
      winnersMovesAndCoordinates[1].every((x) =>
        verticalWinnersMoves[1].includes(x)
      )
    ) {
      drawSecondColumnWinner();
      return true;
    }

    if (
      winnersMovesAndCoordinates[1].every((x) =>
        verticalWinnersMoves[2].includes(x)
      )
    ) {
      drawThirdColumnWinner();
      return true;
    }
  }

  if (isThereARightToLeftWinner(playerOneMoves, playerTwoMoves)) {
    if (
      winnersMovesAndCoordinates[1].every((x) =>
        upRightToLeftDownWinners[0].includes(x)
      )
    ) {
      drawUpRightToLeftDownWinner();
      return true;
    }
  }

  if (isThereALeftToRightWinner(playerOneMoves, playerTwoMoves)) {
    if (
      winnersMovesAndCoordinates[1].every((x) =>
        upLeftRoRightDownWinners[0].includes(x)
      )
    ) {
      drawUpLeftToRightDownWinner();
      return true;
    }
  }
}

function isThereAHorizontalWinner(playerOneMoves, playerTwoMoves) {
  let output = false;
  if (
    horizontalWinnersMoves.some((winnerMoves) =>
      winnerMoves.every((x) => playerOneMoves.map((a) => a[0]).includes(x))
    )
  ) {
    winnersMovesAndCoordinates = findWinnerDetails(
      horizontalWinnersMoves,
      playerOneMoves
    );
    console.log("player one horizontal winner won");
    output = true;
  }

  if (
    horizontalWinnersMoves.some((winnerMoves) =>
      winnerMoves.every((x) => playerTwoMoves.map((a) => a[0]).includes(x))
    )
  ) {
    winnersMovesAndCoordinates = findWinnerDetails(
      horizontalWinnersMoves,
      playerTwoMoves
    );
    console.log("player two horizontal winner won");
    output = true;
  }
  return output;
}

function isThereAVerticalWinner(playerOneMoves, playerTwoMoves) {
  let output = false;
  if (
    verticalWinnersMoves.some((winnerMoves) =>
      winnerMoves.every((x) => playerOneMoves.map((a) => a[0]).includes(x))
    )
  ) {
    winnersMovesAndCoordinates = findWinnerDetails(
      verticalWinnersMoves,
      playerOneMoves
    );
    console.log("player one vertical winner won");
    output = true;
  }
  if (
    verticalWinnersMoves.some((winnerMoves) =>
      winnerMoves.every((x) => playerTwoMoves.map((a) => a[0]).includes(x))
    )
  ) {
    winnersMovesAndCoordinates = findWinnerDetails(
      verticalWinnersMoves,
      playerTwoMoves
    );
    console.log("player two vertical winner won");
    output = true;
  }
  return output;
}

function isThereARightToLeftWinner(playerOneMoves, playerTwoMoves) {

  let output = false;
  if (
    upRightToLeftDownWinners.some((winnerMoves) =>
      winnerMoves.every((x) => playerOneMoves.map((a) => a[0]).includes(x))
    )
  ) {
    winnersMovesAndCoordinates = findWinnerDetails(
      upRightToLeftDownWinners,
      playerOneMoves
    );
    console.log("player one right to left winner won");
    output = true;
  }

  if (
    upRightToLeftDownWinners.some((winnerMoves) =>
      winnerMoves.every((x) => playerTwoMoves.map((a) => a[0]).includes(x))
    )
  ) {
    winnersMovesAndCoordinates = findWinnerDetails(
      upRightToLeftDownWinners,
      playerTwoMoves
    );
    console.log("player two right to left winner won");
    output = true;
  }
  return output;
}

function isThereALeftToRightWinner(playerOneMoves, playerTwoMoves) {
  let output = false;
  if (
    upLeftRoRightDownWinners.some((winnerMoves) =>
      winnerMoves.every((x) => playerOneMoves.map((a) => a[0]).includes(x))
    )
  ) {
    winnersMovesAndCoordinates = findWinnerDetails(
      upLeftRoRightDownWinners,
      playerOneMoves
    );
    console.log("player one left to right winner won");
    output = true;
  }

  if (
    upLeftRoRightDownWinners.some((winnerMoves) =>
      winnerMoves.every((x) => playerTwoMoves.map((a) => a[0]).includes(x))
    )
  ) {
    winnersMovesAndCoordinates = findWinnerDetails(
      upLeftRoRightDownWinners,
      playerTwoMoves
    );
    console.log("player two left to right winner won");
    output = true;
  }
  return output;
}

function findWinnerDetails(winnerMoves, playerMoves) {
  let output = ["", []];
  for (let i = 0; i < winnerMoves.length; i++) {
    let current = winnerMoves[i].every((x) => playerMoves.map((a) => a[0]).includes(x));
    if (current) {
      output = [playerMoves[0][1], winnerMoves[i]];
      console.log(`player:${playerMoves[0][1]}, coordinates:${winnerMoves[i]}`);
      return output;
    }
  }
  return output;
}

function machineAutoMove() {
  if (players === 1) {
    let randomMoveIndex = 0;
    for (let i = 0; i <= board.length; i++) {
      randomMoveIndex = Math.abs(Math.floor(Math.random() * board.length));
      if (board[randomMoveIndex][2] === "") {
        break;
      }
    }
    setClassToLink(randomMoveIndex, machineIcon);
    board[randomMoveIndex][0] = randomMoveIndex;
    board[randomMoveIndex][1] = playerTwo;
    board[randomMoveIndex][2] = "F";
    console.log("Machine move");
    if (isThereAWinner()) {
      return;
    }
  }
}

function getNextPlayerIcon() {
  if (players === 1) {
    return playerIcon;
  } else if (players === 2) {
    let result = playerIcon;
    if (playerIcon === "o") {
      playerIcon = "x";
    } else if (playerIcon === "x") {
      playerIcon = "o";
    }
    return result;
  }
}

function showWinnerCanvas() {
  setupWinnerCanvas();
  let innerDiv = document.getElementById("winner-canvas-div");
  innerDiv.classList.remove("display-none");
  setVisibilityToDiv(winnerCanvasDiv, "show");
}

// TODO: SHOW WINNER AND DROW WHEN USING TWO PLAYERS