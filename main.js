import { Variables } from "./Variables.js"
import { PhasePreFlop, welcomeDeath } from "./RoundPhases.js"

function functionStart(){   
  // select <div class="invisible"> HTML element and change the CSS all the elements inside to transparent
  const invisibleHTML = document.querySelector('.invisible');
  invisibleHTML.style.visibility = "hidden";
  // select <div class="invisible2"> HTML element and change the CSS all the elements inside to transparent
  const invisible2HTML = document.querySelector('.invisible2');
  invisible2HTML.style.visibility = "hidden";
  

  setTimeout( await0, 2000);
  function await0() {       
    
    window.alert(Variables.messageCohle1);
    window.alert(Variables.messageCohle2);  
    window.alert( Variables.initialMessage1 ); 
    window.alert( Variables.initialMessage2 ); 
    window.alert( Variables.initialMessage0 ); 

    welcomeDeath();
    // to delay the execution of the next line of code
    setTimeout( awaitWelcome, 2000);
    function awaitWelcome() {           
      Variables.preflop = 1; 

      PhasePreFlop();    
    }
  }
} //game 

functionStart();

export { functionStart };

