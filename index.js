// Constants
const selectPlayersDivName = "select-players-div";
const selectPlayerIconDivName = "select-player-icon-div";
const boardDivName = "board-div";
const boardInnerDivName = "board-inner-div";
const youWinDivName = "you-win-div";

// Game Status
let gameAlreadyStart = false;

// Players
let players = 0;
let playerIcon = "";
let machineIcon = "";
let lastMove = "";

// Board
//let board = [, 0, 0, 0, 0, 0, 0, 0, 0];
let board = [[0,''],[0,''],[0,''],[0,''],[0,''],[0,''],[0,''],[0,''],[0,'']];

// Canvas
let canvas;
let context;
let width;
let height;

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

// Setup winner canvas needed to allow drawing
//setupWinnerCanvas();

// Players functions
function onePlayerVsIa() {  
  players = 1;
  playAudio("dragonzord-flute");
  setVisibilityToDiv(selectPlayersDivName, "hide");
  setVisibilityToDiv(selectPlayerIconDivName, "show");
}
function twoPlayers() {
  players = 2;
  playAudio("dragonzord-sound-effect");
  setVisibilityToDiv(selectPlayersDivName, "hide");
  setVisibilityToDiv(selectPlayerIconDivName, "show");
}

// Select Icons functions
function useIconX() {
  playerIcon = "x";
  if (players === 1) {
    machineIcon = "o";
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
function playAudio(audioName) {
  var audio = new Audio(`./assets/sounds/${audioName}.mp3`);
  //audio.play();
}
function setClassToLink(index, iconClass) {
  let innerDiv = document.getElementById("board-inner-div");
  let link = innerDiv.children[index];
  link.classList.add(iconClass);
  link.removeAttribute("onclick");
}

// Draw winners rows
function drawFirstRowWinner() {
  drawHorizontalWinnerGreenLine(1, context, width, height);
  completeDraw();
}
function drawSecondRowWinner() {
  drawHorizontalWinnerGreenLine(2, context, width, height);
  completeDraw();
}
function drawThirdRowWinner() {
  drawHorizontalWinnerGreenLine(3, context, width, height);
  completeDraw();
}

// Draw winners columns
function drawFirstColumnWinner() {
  drawVerticalWinnerGreenLine(1, context, width, height);
  completeDraw();
}
function drawSecondColumnWinner() {
  drawVerticalWinnerGreenLine(2, context, width, height);
  completeDraw();
}
function drawThirdColumnWinner() {
  drawVerticalWinnerGreenLine(3, context, width, height);
  completeDraw();
}

// Draw winner corners
function drawUpLeftToRightDownWinner() {
  drawCornerWinnerGreenLine("up-left-to-right-down", context, width);
  completeDraw();
}
function drawUpRightToLeftDownWinner() {
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
      context.moveTo(width, width - 100);
      context.lineTo(0, width - 100);
      break;
    case 3:
      context.beginPath();
      context.moveTo(0, 275);
      context.lineTo(width, 275);
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

// Board movements functions
function moveTo(id) {
  switch (id) {
    case 0:
      debugger;
      setClassToLink(0, getNextPlayerIcon());
      console.log('Player move');
      board[0] = 1;     
      machineAutoMove();      
      break;
    case 1:
      setClassToLink(1, getNextPlayerIcon());
      board[1] = 1;
      machineAutoMove(); 
      break;
    case 2:
      setClassToLink(2, getNextPlayerIcon());
      board[2] = 1;
      machineAutoMove(); 
      break;
    case 3:
      setClassToLink(3, getNextPlayerIcon());
      board[3] = 1;
      machineAutoMove(); 
      break;
    case 4:
      setClassToLink(4, getNextPlayerIcon());
      board[4] = 1;
      machineAutoMove(); 
      break;
    case 5:
      setClassToLink(5, getNextPlayerIcon());
      board[5] = 1;
      machineAutoMove(); 
      break;
    case 6:
      setClassToLink(6, getNextPlayerIcon());
      board[6] = 1;
      machineAutoMove(); 
      break;
    case 7:
      setClassToLink(7, getNextPlayerIcon());
      board[7] = 1;
      machineAutoMove(); 
      break;
    case 8:
      setClassToLink(8, getNextPlayerIcon());
      board[8] = 1;
      machineAutoMove(); 
      break;
    default:
      break;
  }
}

// Board movements functions
function moveTo(coordinate) {
  
  switch (coordinate[0]) {
    case 0:      
      setClassToLink(0, getNextPlayerIcon());      
      board[0] = [0,'F'];     
      machineAutoMove();      
      break;
    case 1:
      setClassToLink(1, getNextPlayerIcon());      
      board[1] = [1,'F'];           
      machineAutoMove(); 
      break;
    case 2:
      setClassToLink(2, getNextPlayerIcon());
      board[2] = [2,'F'];     
      machineAutoMove(); 
      break;
    case 3:
      setClassToLink(3, getNextPlayerIcon());      
      board[3] = [3,'F'];     
      machineAutoMove(); 
      break;
    case 4:
      setClassToLink(4, getNextPlayerIcon());
      board[4] = [4,'F'];           
      machineAutoMove(); 
      break;
    case 5:
      setClassToLink(5, getNextPlayerIcon());      
      board[5] = [5,'F'];           
      machineAutoMove(); 
      break;
    case 6:
      setClassToLink(6, getNextPlayerIcon());
      board[6] =[6,'F'];
      machineAutoMove(); 
      break;
    case 7:
      setClassToLink(7, getNextPlayerIcon());
      board[7] = [7,'F'];
      machineAutoMove(); 
      break;
    case 8:
      setClassToLink(8, getNextPlayerIcon());
      board[8] = [8,'F'];
      machineAutoMove(); 
      break;
    default:
      break;
  }

  if(isThereAWinner()){
    
  }
}

function isThereAWinner(){
}

function machineAutoMove() 
{        
  if(players === 1){     
     let randomMoveIndex = 0;     
     for(let i = 0; i <= board.length; i++){
          randomMoveIndex = Math.abs(Math.floor(Math.random() * board.length));
          if(board[randomMoveIndex][1]===''){
            break;
          }
     }     
     setClassToLink(randomMoveIndex, machineIcon);     
     board[randomMoveIndex][1] = 'F';
     console.log('Machine move');
    }
    // if(players === 1){

    //  let availeableMoves = board.filter(x => x !== 1);
    //  let unavaileableMoves = board.filter(x => x !== 0);

    //  let randomMoveIndex = 0;
    //  for(let i = 0; availeableMoves.length; i++){
    //       randomMoveIndex = Math.floor(Math.random() * availeableMoves.length);
    //       if(!unavaileableMoves.includes(randomMoveIndex)){             
    //         break;
    //       }
    //  }

    //  setClassToLink(randomMoveIndex, machineIcon);
    //  board[randomMoveIndex] = 1;
    //  console.log('Machine move');
    // }
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

// TODO: PENDING WHEN SOME ONE WINS THEN SHOW CANVAS AND DRAW WINNER LINE

// Testing set icon
//setClassToLink(0,'o');
//setClassToLink(1,'x');
//setClassToLink(2,'o');
//setClassToLink(3,'x');
//setClassToLink(4,'o');
//setClassToLink(5,'x');
//setClassToLink(6,'o');
//setClassToLink(7,'x');
//setClassToLink(8,'o');

// testing Done
//drawFirstRowWinner();
//drawSecondRowWinner();
//drawThirdRowWinner();

//drawFirstColumnWinner();
//drawSecondColumnWinner();
//drawThirdColumnWinner();

//drawUpLeftToRightDownWinner();
//drawUpRightToLeftDownWinner();
