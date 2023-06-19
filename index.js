// Constants
const selectPlayersDivName = 'select-players-div';
const selectPlayerIconDivName = 'select-player-icon-div';
const boardDivName = 'board-div';
const boardInnerDivName = 'board-inner-div';
const youWinDivName = 'you-win-div';

// Game Status
let gameAlreadyStart = false;

// Players
let players = 0;
let playerIcon = '';
let machineIcon = '';
let lastMove = '';

// Board
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Canvas
let canvas;
let context;
let width;
let height;

function setupWinnerCanvas(){
   canvas = document.getElementById("canvas");
   context = canvas.getContext("2d");
   width = canvas.width;
   height = canvas.height;
   context.lineWidth = 20;       
}

function completeDraw(){
    context.strokeStyle = 'green';    
    context.stroke(); 
}

// Setup winner canvas needed to allow drawing
//setupWinnerCanvas();


// Players functions
function onePlayerVsIa(){    
    players = 1;    
    playAudio('dragonzord-flute');
    setVisibilityToDiv(selectPlayersDivName, 'hide');
    setVisibilityToDiv(selectPlayerIconDivName, 'show');
}
function twoPlayers(){    
    players = 2;
    playAudio('dragonzord-sound-effect');
    setVisibilityToDiv(selectPlayersDivName, 'hide');
    setVisibilityToDiv(selectPlayerIconDivName, 'show');
}

// Select Icons functions
function useIconX(){    
    playerIcon = 'x';
    if(players===1){
        machineIcon = 'o'
    }
    playAudio('megaman-3-death-sound-effect');        
    setVisibilityToDiv(selectPlayerIconDivName, 'hide');
    setVisibilityToDiv(boardDivName, 'show');
}
function useIconY(){    
    playerIcon = 'o';
    if(players===1){
        machineIcon = 'x'
    }
    playAudio('mm4-victory');
    setVisibilityToDiv(selectPlayerIconDivName, 'hide');
    setVisibilityToDiv(boardDivName, 'show');
}

// Functionalities browser functions
function setVisibilityToDiv(divId, visibility)
{   
    let currentDiv = this.document.getElementById(divId);
    if(visibility === "hide")
    {
        if (currentDiv.style.display === "show") 
        {
            currentDiv.style.display = "block";
        } else {
            currentDiv.style.display = "none";
        }
    }
    else if(visibility === "show"){
        currentDiv.style.display = "block";
    }  
}
function playAudio(audioName) {
    var audio = new Audio(`./assets/sounds/${audioName}.mp3`);
    //audio.play();
}
function setClassToLink(index, iconClass){        
    let innerDiv = document.getElementById('board-inner-div');    
    let link = innerDiv.children[index];    
    link.classList.add(iconClass);   
    link.removeAttribute("onclick") 
}


// Draw winners rows
function drawFirstRowWinner(){       
    drawHorizontalWinnerGreenLine(1, context, width, height);
    completeDraw();
}
function drawSecondRowWinner(){   
    drawHorizontalWinnerGreenLine(2, context, width, height);
    completeDraw();
}
function drawThirdRowWinner(){   
    drawHorizontalWinnerGreenLine(3, context, width, height);
    completeDraw();
}


// Draw winners columns
function drawFirstColumnWinner(){   
    drawVerticalWinnerGreenLine(1, context, width, height);    
    completeDraw();    
}
function drawSecondColumnWinner(){          
    drawVerticalWinnerGreenLine(2, context, width, height);    
    completeDraw();
}
function drawThirdColumnWinner(){ 
    drawVerticalWinnerGreenLine(3, context, width, height);    
    completeDraw();
}


// Draw winner corners
function drawUpLeftToRightDownWinner(){        
    drawCornerWinnerGreenLine('up-left-to-right-down', context, width);    
    completeDraw();
}
function drawUpRightToLeftDownWinner(){      
    drawCornerWinnerGreenLine('up-right-to-left-down', context, width);    
    completeDraw();
}


// Draw main functions
function drawHorizontalWinnerGreenLine(number, context, width){    
    switch(number) 
    {
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
function drawVerticalWinnerGreenLine(number, context, width){    
    switch(number) 
    {
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
function drawCornerWinnerGreenLine(orientation, context, width){    
    switch(orientation) 
    {
        case 'up-left-to-right-down':
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(800, 795);
          break;
        case 'up-right-to-left-down':
            context.beginPath();
            context.moveTo(550, 1);
            context.lineTo(1,550);
          break;        
      }      
}


// Board movements functions
function moveTo(id){        
    switch (id) {
        case 0:
            setClassToLink(0, whoTurnIs());
            board[1] = 1;            
            break;
        case 1:
            setClassToLink(1, whoTurnIs());
            board[2] = 1;
            break;
        case 2:
            setClassToLink(2, whoTurnIs());
            board[3] = 1;
            break;
        case 3:
            setClassToLink(3, whoTurnIs());
            board[4] = 1;
            break;
        case 4:
            setClassToLink(4, whoTurnIs());
            board[4] = 1;
            break;
        case 5:
            setClassToLink(5, whoTurnIs());
            board[5] = 1;
            break;    
        case 6:
            setClassToLink(6, whoTurnIs());
            board[6] = 1;
            break;
        case 7:
            setClassToLink(7, whoTurnIs());
            board[7] = 1;
            break;
        case 8:
            setClassToLink(8, whoTurnIs());
            board[8] = 1;
            break;            
        default:
            break;
    }
}

function whoTurnIs(){
    debugger;
    if(players === 1){
        let result = playerIcon;        
         if(playerIcon === 'o'){
            playerIcon = 'x';
         }else if(playerIcon === 'x'){
            playerIcon = 'o';
         }        
         return result;
    }else if (players === 2)
    {
        return machineIcon;
    }
}

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
