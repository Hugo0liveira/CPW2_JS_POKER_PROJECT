
import { shuffleDeck, cleanAllCommunityCards, distributeCards, addCardOnCommunityCards, concatenateHand } from "./DeckManipulation.js";
import {determineWinnersHand} from "./DetermineWinnersHand.js";
import { Variables } from "./Variables.js"

// Buttons functions 
function functionFold(event) {
  event.stopPropagation(); // Stop event propagation
  if(Variables.conditionsPreflop==1){
    Variables.fold = 1; checkConditionsPreFlop(); 
  } else if(conditionsFlop==1){
    Variables.fold = 2; checkConditionsFlop(); 
  } else if(conditionsTurn==1){
    Variables.fold = 3; checkConditionsTurn(); 
  } else if(conditionsRiver==1){
    Variables.fold = 4; checkConditionsRiver(); 
  }
}

function functionCall(event) {
  event.stopPropagation(); // Stop event propagation     
  if(Variables.conditionsPreflop==1){
    Variables.call = 1; checkConditionsPreFlop(); 
    } else if(Variables.conditionsFlop==1){
      Variables.call = 2; checkConditionsFlop(); 
    } else if(Variables.conditionsTurn==1){
      Variables.call = 3; checkConditionsTurn(); 
    } else if(Variables.conditionsRiver==1){
      Variables.call = 4; checkConditionsRiver(); 
    }
}

function functionCheck(event) {
  event.stopPropagation(); // Stop event propagation
  if(Variables.conditionsPreflop==1){
    Variables.check = 1; checkConditionsPreFlop(); 
    } else if(Variables.conditionsFlop==1){
    Variables.check = 2; checkConditionsFlop(); 
  } else if(Variables.conditionsTurn==1){
    Variables.check = 3; checkConditionsTurn(); 
  } else if(Variables.conditionsRiver==1){
    Variables.check = 4; checkConditionsRiver(); 
  }
}

function functionRaise(event) {             //ERRO! raise acionando phaseTurn()
  event.stopPropagation(); // Stop event propagation
  if(Variables.conditionsPreflop==1){
    Variables.raise=1; checkConditionsPreFlop();
  } else if(Variables.conditionsFlop==1){ 
    Variables.raise = 2; checkConditionsFlop(); 
  } else if(Variables.conditionsTurn==1){ 
    Variables.raise = 3; checkConditionsTurn(); 
  } else if(Variables.conditionsRiver==1){ 
    Variables.raise = 4; checkConditionsRiver(); 
  } 
}

  const foldButton = document.querySelector(".btn-fold");
  const callButton = document.querySelector(".btn-call");
  const checkButton = document.querySelector(".btn-check");
  const raiseButton = document.querySelector(".btn-raise");

//CHECK CONDITIONS BUTTONS on each phase of the game
function checkConditionsPreFlop() {
  if(Variables.conditionsPreflop==1){
      if (Variables.fold == 1) {
        window.alert("FOLD on Phase PRE-FLOP! ");     
        Variables.player1.chips -= Variables.risk; Variables.player2.chips += Variables.risk;  Variables.infoRisk.innerHTML = Variables.risk;
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 1) {        
        window.alert("CALL on Phase PRE-FLOP! ");         
        Variables.preflop = 0; Variables.flop = 1; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseFlop(Variables.player1, Variables.player2); 
      }  
      if (Variables.check == 1) {
        Variables.check == 0;
        window.alert("Check button is not used on preflop phase!");          
      }
      if (Variables.raise == 1) {
        window.alert("RAISE on Phase PRE-FLOP! ");     
        if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk; 
          Variables.infoRisk.innerHTML = Variables.risk;        
          Variables.raise = 0; Variables.flop = 1; Variables.turn = 0; Variables.river = 0; Variables.conditionsPreflop=0;
         console.log("RAISE on Phase PRE-FLOP");                         
         PhaseFlop();
        } else {
          window.alert("Not enough lives!");     
        }
      }
      console.log("CheckConditionsPreFlop");                         
    }                       
}        

function checkConditionsFlop() {  
  
  if(Variables.conditionsFlop==1){
      if (Variables.fold == 2) {
        window.alert("FOLD on Phase FLOP! ");     
        Variables.player1.chips -= Variables.risk; Variables.player2.chips += Variables.risk;  Variables.infoRisk.innerHTML = Variables.risk;
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 2) {          
        Variables.call == 0;
        window.alert("Call button is NOT used on Phase FLOP! ");             
      }    
      if (Variables.check == 2) {
        window.alert("CHECK on Phase FLOP! ");     
        Variables.preflop=0; Variables.flop =0; Variables.turn = 1; Variables.river=0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseTurn();
      }    
      if (Variables.raise == 2) {
        window.alert("RAISE on Phase FLOP! ");     
        if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk;
          Variables.preflop = 0; Variables.flop = 0; Variables.conditionsFlop=0; Variables.river = 0; Variables.turn = 1;
          console.log("RAISE on Phase FLOP");                                 
          PhaseTurn();
          } else{
            window.alert("Not enough lives!");     
          }
      }
      console.log("CheckConditionsFlop");                         
    }                           
}        

function checkConditionsTurn() {  
  if(Variables.conditionsTurn==1){
      if (Variables.fold == 3) {
        window.alert("FOLD on Phase TURN! ");     
        Variables.player1.chips -= Variables.risk; Variables.player2.chips += Variables.risk;  Variables.infoRisk.innerHTML = Variables.risk;
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 3) {          
        Variables.call == 0;
        window.alert("Call button is NOT used on Phase TURN! ");             
      }    
      if (Variables.check == 3) {
        window.alert("CHECK on Phase TURN! ");     
        Variables.preflop=0; Variables.flop =0; Variables.turn=0; Variables.river=1; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseRiver();
      }    
      if (Variables.raise == 3) {  
        window.alert("RAISE on Phase TURN! ");         
        if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk;
          Variables.preflop = 0;  Variables.flop = 0; Variables.turn = 0; Variables.conditionsTurn=0; Variables.river = 1; 
          console.log("RAISE on Phase TURN! ");         
        PhaseRiver();        
          } else{
            window.alert("Not enough lives!");     
          }                 
      }
      console.log("CheckConditionsTurn");                         
    }      
}        

function checkConditionsRiver() {  
  if(Variables.conditionsRiver==1){
      if (Variables.fold == 4) {
        window.alert("FOLD on Phase RIVER! ");     
        Variables.player1.chips = Variables.player1.chips - (Variables.risk*2); Variables.player2.chips += Variables.risk;  Variables.infoRisk.innerHTML = Variables.risk;
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;    
        PhasePreFlop();
      }  
      if (Variables.call == 4) {          
        Variables.call == 0;
        window.alert("Call button is NOT used on Phase RIVER! ");             
      }    
      if (Variables.check == 4) {
        window.alert("CHECK on Phase RIVER! ");     
        Variables.preflop=0; Variables.flop =0; Variables.turn =0; Variables.river=0; Variables.comparehands=1; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
          compareTheHands();
      }    
      if (raise == 4) {        
        window.alert("RAISE on Phase RIVER! ");     
        if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk;
          Variables.preflop = 0;  Variables.flop = 0; Variables.turn = 0; Variables.conditionsRiver=0; Variables.comparehands=1;
          // comparar cartas e decidir vencedor de rodada          
          compareTheHands();
          console.log("RAISE on Phase RIVER! ");     
          } else{
            window.alert("Not enough lives!");     
          }       
      }
      console.log("CheckConditionsRIVER");
    } 
  }     

// PHASES OF THE GAME
function PhasePreFlop(){
    Variables.deck = Variables.originalDeck;    
    Variables.deck = shuffleDeck();    

    if (Variables.player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    cleanAllCommunityCards();
    if(Variables.preflop==1){
      Variables.conditionsPreflop=1; Variables.conditionsFlop=0; Variables.conditionsTurn=0; Variables.conditionsRiver=0; 
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;      
      Variables.deck = distributeCards();             
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhasePreflop");      
    }
  }

  function PhaseFlop(){
    if (Variables.player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }

    if (Variables.flop == 1) { //flop
      Variables.conditionsPreflop=0; Variables.conditionsFlop=1; Variables.conditionsTurn=0; Variables.conditionsRiver=0;    
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;                    
      // remove previous community cards  
      cleanAllCommunityCards();
         // PUTS 3 COMMUNITY CARDS
      addCardOnCommunityCards(); addCardOnCommunityCards(); addCardOnCommunityCards();
        foldButton.addEventListener("click", functionFold);
        callButton.addEventListener("click", functionCall);
        checkButton.addEventListener("click", functionCheck);
        raiseButton.addEventListener("click", functionRaise);
        console.log("PhaseFLop");
   }//flop     
  }
  
  function PhaseTurn(){
    if (Variables.player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    if (Variables.turn == 1) { //turn
      Variables.conditionsPreflop=0; Variables.conditionsFlop=0; Variables.conditionsTurn=1; Variables.conditionsRiver=0;
      Variables.fold = 0; Variables.check = 0; Variables.call = 0;  Variables.raise = 0;
      addCardOnCommunityCards(); 
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);     
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseTurn");
    }
  }
  function PhaseRiver(){
    if (Variables.player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    if (Variables.river == 1) { //river
      Variables.conditionsPreflop=0; Variables.conditionsFlop=0; Variables.conditionsTurn=0; Variables.conditionsRiver=1;
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;
      addCardOnCommunityCards();
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseRiver");
    }//river 
  }

function compareTheHands(){
    if (Variables.comparehands == 1) { //river
      Variables.preflop=1;
      Variables.fold = 0; Variables.check = 0; Variables.call = 0;  Variables.raise = 0;
      Variables.conditionsPreflop=1; Variables.conditionsFlop=0; Variables.conditionsTurn=0; Variables.conditionsRiver=0; 

    console.log("compareTheHands()");  
    window.alert("COMPARING HANDS... ");

    var roundWinner = determineWinnersHand();         
    if(roundWinner == 0){
      window.alert("DRAW!");  
      console.log("DRAW!"); 
    } else if(roundWinner == 1){
      window.alert("PLAYER 1 won the round.");
      console.log("PLAYER 1 won the round.");
      Variables.player1.chips += Variables.risk;
      Variables.player2.chips -= Variables.risk;
    } else if(Variables.roundWinner == 2){
      window.alert("PLAYER 2 won the round.");
      console.log("PLAYER 2 won the round.");
      Variables.player2.chips += Variables.risk;
      Variables.player1.chips -= Variables.risk;
    } else {
      window.alert("ERROR: roundWinner");
      console.log("ERROR: roundWinner");
    }    
    if (Variables.player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    } else{        
      Variables.years = parseInt(Variables.infoYears.innerHTML); 
      Variables.years += 1;
      Variables.infoYears.innerHTML = Variables.years.toString();        
        PhasePreFlop();  
      }
    }
  }

  function resetGame() {
    // Reset variables    
    Variables.game = 0; Variables.conditionsPreflop = 0;  Variables.conditionsFlop = 0;  Variables.conditionsTurn = 0;  Variables.conditionsRiver = 0;
    Variables.preflop = 0;  Variables.flop = 0;  Variables.turn = 0;  Variables.river = 0;  Variables.comparehands = 0;
    Variables.fold = 0; Variables.call = 0; Variables.check = 0;  Variables.raise = 0;    
    Variables.risk = 67100000;
    Variables.years = 0;
    Variables.player1.chips = 8000000000; Variables.player2.chips = 107000000000;   
    // Reset DOM elements
    Variables.infoYears.innerHTML = Variables.years;
    Variables.infoRisk.innerHTML = Variables.risk;  
    functionStart();
  }

  export { functionFold, functionCall, functionCheck, functionRaise, foldButton, callButton, checkButton, raiseButton, checkConditionsPreFlop, checkConditionsFlop, checkConditionsTurn, checkConditionsRiver, PhasePreFlop, PhaseFlop, PhaseTurn, PhaseRiver, compareTheHands, resetGame };
  