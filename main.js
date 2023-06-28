import { Variables } from "./Variables.js"
import { PhasePreFlop } from "./RoundPhases.js"

function functionStart(){  
  window.alert(Variables.messageCohle1);
  window.alert(Variables.messageCohle2);  
  window.alert( Variables.initialMessage1 ); 
  window.alert( Variables.initialMessage2 ); 
  window.alert( Variables.initialMessage0 ); 
 
    Variables.preflop = 1; 
    PhasePreFlop();    
    //}
    
} //game 

functionStart();

export { functionStart };

