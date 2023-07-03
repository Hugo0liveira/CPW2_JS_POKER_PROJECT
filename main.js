import { Variables } from "./Variables.js"
import { showAlertMessage1, showAlertMessage2, showAlertMessage3, showAlertMessage4, showAlertMessage5 } from "./Messages.js"
import { PhasePreFlop, welcomeDeath, welcomeDeathAdd1, welcomeDeathAdd2, welcomeDeathAdd3, welcomeDeathAdd4, welcomeDeathAdd5 } from "./RoundPhases.js"

function functionStart(){   

  // select <div class="invisible"> HTML element and change the CSS all the elements inside to transparent
  const invisibleHTML = document.querySelector('.invisible');
  invisibleHTML.style.visibility = "hidden";
  // select <div class="invisible2"> HTML element and change the CSS all the elements inside to transparent
  const invisible2HTML = document.querySelector('.invisible2');
  invisible2HTML.style.visibility = "hidden";
  

  setTimeout( await0, 1000);
  function await0() {        

    welcomeDeath();
    welcomeDeathAdd1();
    welcomeDeathAdd2();
    welcomeDeathAdd3();
    welcomeDeathAdd4();
    welcomeDeathAdd5();    
    
    setTimeout( awaitWelcome, 2100);
    function awaitWelcome() {                 
      showAlertMessage1(Variables.messageCohle1);    
        
      Variables.preflop = 1; 

      PhasePreFlop();    
    }
  }     
  
} //game 

functionStart();

export { functionStart };

