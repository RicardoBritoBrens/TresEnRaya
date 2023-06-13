// Game Status
let gameAlreadyStart = false;

// Players
let players = 0;
let playerIcon = '';

// Constants
const selectPlayersDivName = 'select-players-div';
const selectPlayerIconDivName = 'select-player-icon-div';
const boardDivName = 'board-div';
const boardInnerDivName = 'board-inner-div';
const youWinDivName = 'you-win-div';

// Board
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    playAudio('megaman-3-death-sound-effect');        
    setVisibilityToDiv(selectPlayerIconDivName, 'hide');
    setVisibilityToDiv(boardDivName, 'show');
}
function useIconY(){    
    playerIcon = 'y';
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
}

function drawWinner(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    context.lineWidth = 20;    
    context.beginPath();
    context.moveTo(width, 100);
    context.lineTo(10, 100);    
    context.strokeStyle = 'green';    
    context.stroke();
}
//drawWinner();

drawFirstRowWinner();
drawSecondRowWinner();
drawThirdRowWinner();

function drawFirstRowWinner(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    context.lineWidth = 20;    
    setupWinnerCorner('up-left-to-right-down', context, width, height)
    //setupWinnerRowHorizontal(1, context, width, height);
    //setupWinnerRowVertical(1, context, width, height);
    context.strokeStyle = 'green';    
    context.stroke();
}

function drawSecondRowWinner(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    context.lineWidth = 20;    
    setupWinnerCorner('up-right-to-left-down', context, width, height)
    //setupWinnerRowHorizontal(2, context, width, height);
    //setupWinnerRowVertical(2, context, width, height);
    context.strokeStyle = 'green';    
    context.stroke();
}

function drawThirdRowWinner(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    context.lineWidth = 20;    
    //setupWinnerRowHorizontal(3, context, width, height);
    //setupWinnerRowVertical(3, context, width, height);
    context.strokeStyle = 'green';    
    context.stroke();
}

function setupWinnerRowHorizontal(number, context, width){    
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

function setupWinnerRowVertical(number, context, width){    
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

function setupWinnerCorner(orientation, context, width){    
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

// Testing assign icon
setClassToLink(0,'o');
setClassToLink(1,'x');
setClassToLink(2,'o');

setClassToLink(3,'x');
setClassToLink(4,'o');
setClassToLink(5,'x');

setClassToLink(6,'o');
setClassToLink(7,'x');
setClassToLink(8,'o');
