import { Variables } from "./Variables.js"
import { showAlertMessage1 } from "./services/Messages.js"
import { PhasePreFlop, welcomeDeath } from "./services/RoundPhases.js"

function functionStart(){   
  document.body.style.backgroundColor = "black";

  // avoid ugly HTML before loading 
  const actions = document.querySelector('.actions');
  actions.style.visibility = "hidden";
  const info = document.querySelector('.info');
  info.style.visibility = "hidden";
  const section1 = document.querySelector('.player-section-1');
  section1.style.visibility = "hidden";
  const section2 = document.querySelector('.player-section-2');
  section2.style.visibility = "hidden";

  const btnContinue = document.getElementById('myCustomAlert2');
  btnContinue.style.display = "none";
  const btnResult= document.getElementById('myCustomAlert3');
  btnResult.style.display = "none";

  // select <div class="invisible"> HTML element and change the CSS all the elements inside to transparent
  const invisibleHTML = document.querySelector('.invisible');
  invisibleHTML.style.visibility = "hidden";
  // select <div class="invisible2"> HTML element and change the CSS all the elements inside to transparent
  const invisible2HTML = document.querySelector('.invisible2');
  invisible2HTML.style.visibility = "hidden";  

  setTimeout( await0, 1000);
  function await0() {        

    welcomeDeath();
    setTimeout( awaitWelcome, 2100);
    function awaitWelcome() {          
      setTimeout( function(){
        showAlertMessage1(Variables.messageCohle1);            
      }, 3000);

      Variables.preflop = 1; 
      PhasePreFlop();    
    }
  }     
  
} //game 

functionStart();

export { functionStart };

