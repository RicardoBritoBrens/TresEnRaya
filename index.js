let showSelectPlayers = true;
let showSelectPlayerIcon = false;
let showBoard = false;
let players = 0;
let playerIcon = '';
let gameAlreadyStart = true;
let selectPlayersDivName = 'select-players-div';
let selectPlayerIconDivName = 'select-player-icon-div';
let boardDivName = 'board';

function setVisibilityToDiv(divId, visibility){    
    debugger;    
    let currentDiv = this.document.getElementById(divId);     
    if (currentDiv.style.display === "show") {
        currentDiv.style.display = "block";
      } else {
        currentDiv.style.display = "none";
      }
}

function onePlayerVsIa(){    
    players = 1;
    playAudio('dragonzord-flute');
    setVisibilityToDiv(selectPlayersDivName, 'none');
    setVisibilityToDiv(selectPlayerIconDivName, 'show');
}

function twoPlayers(){    
    players = 2;
    playAudio('dragonzord-sound-effect');
    setVisibilityToDiv(selectPlayersDivName, 'none');
    setVisibilityToDiv(selectPlayerIconDivName, 'show');
}

function useIconX(){    
    playerIcon = 'x';
    playAudio('megaman-3-death-sound-effect');        
    setVisibilityToDiv(selectPlayerIconDivName, 'none');
    setVisibilityToDiv(boardDivName, 'show');
}

function useIconY(){    
    playerIcon = 'y';
    playAudio('mm4-victory');
    setVisibilityToDiv(selectPlayerIconDivName, 'none');
    setVisibilityToDiv(boardDivName, 'show');
}

function enableSelectPlayers(){
    this.showSelectPlayers = false;
}

function disableSelectPlayers(){
    this.showSelectPlayers = false;
}


function enableSelectIcon(){
    this.showSelectPlayerIcon = true;
}

function disableSelectIcon(){
    this.showSelectPlayerIcon = false;
}


function enableBoard(){
    this.showBoard = true;
}

function disableBoard(){
    this.showBoard = false;
}


function playAudio(audioName) {
    var audio = new Audio(`./assets/sounds/${audioName}.mp3`);
    audio.play();
  }


//   const onConfirmRefresh = function (event) {
//     if(event.preventDefault())
//     {
//         return event.returnValue = "Are you sure you want to leave the page, the game is in progress?";
//     }    
//   }
  
//   window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });