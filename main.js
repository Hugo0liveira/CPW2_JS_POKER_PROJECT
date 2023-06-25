import { Variables } from "./Variables.js"
import { PhasePreFlop } from "./RoundPhases.js"

function functionStart(){
  console.log("deck: ", Variables.deck);
 // window.alert( Variables.initialMessage ); 
 Variables.game = 1;
 // while (Variables.game == 1) {  
    Variables.preflop = 1; 

    PhasePreFlop();    
    //}
    
} //game 

functionStart();

export { functionStart };

