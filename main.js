import { Variables } from "./Variables.js"
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
   
    window.alert(Variables.messageCohle1);
    window.alert(Variables.messageCohle2);  
    window.alert( Variables.initialMessage1 ); 
    window.alert( Variables.initialMessage2 ); 
    window.alert( Variables.initialMessage0 ); 

    welcomeDeath();
    welcomeDeathAdd1();
    welcomeDeathAdd2();
    welcomeDeathAdd3();
    welcomeDeathAdd4();
    welcomeDeathAdd5();    
    // to delay the execution of the next line of code
    setTimeout( awaitWelcome, 2500);
    function awaitWelcome() {           
      Variables.preflop = 1; 

      PhasePreFlop();    
    }
  }
} //game 

functionStart();

export { functionStart };

