
import { Player, deck, originalDeck, allCommunityCards, game, conditionsPreflop, conditionsFlop, conditionsTurn, conditionsRiver, preflop, flop, turn, river, fold, call, comparehands, conditionsComparehands, check, raise, risk, years, gameOver, initialMessage } from './Variables.js';
import { shuffleDeck, cleanAllCommunityCards, distributeCards, addCardOnCommunityCards, concatenateHand } from "./DeckManipulation.js";
import {determineWinnersHand} from "./DetermineWinnersHand.js";

// Buttons functions 
function functionFold(event) {
  event.stopPropagation(); // Stop event propagation
  if(conditionsPreflop==1){
  fold = 1; checkConditionsPreFlop(); 
  } else if(conditionsFlop==1){
  fold = 2; checkConditionsFlop(); 
  } else if(conditionsTurn==1){
    fold = 3; checkConditionsTurn(); 
  } else if(conditionsRiver==1){
    fold = 4; checkConditionsRiver(); 
  }
}

function functionCall(event) {
  event.stopPropagation(); // Stop event propagation     
  if(conditionsPreflop==1){
    call = 1; checkConditionsPreFlop(); 
    } else if(conditionsFlop==1){
    call = 2; checkConditionsFlop(); 
    } else if(conditionsTurn==1){
      call = 3; checkConditionsTurn(); 
    } else if(conditionsRiver==1){
      call = 4; checkConditionsRiver(); 
    }
}

function functionCheck(event) {
  event.stopPropagation(); // Stop event propagation
  if(conditionsPreflop==1){
    check = 1; checkConditionsPreFlop(); 
    } else if(conditionsFlop==1){
    check = 2; checkConditionsFlop(); 
  } else if(conditionsTurn==1){
    check = 3; checkConditionsTurn(); 
  } else if(conditionsRiver==1){
    check = 4; checkConditionsRiver(); 
  }
}

function functionRaise(event) {             //ERRO! raise acionando phaseTurn()
  event.stopPropagation(); // Stop event propagation
  if(conditionsPreflop==1){
    raise=1; checkConditionsPreFlop();
  } else if(conditionsFlop==1){ 
    raise = 2; checkConditionsFlop(); 
  } else if(conditionsTurn==1){ 
    raise = 3; checkConditionsTurn(); 
  } else if(conditionsRiver==1){ 
    raise = 4; checkConditionsRiver(); 
  } 
}

  const foldButton = document.querySelector(".btn-fold");
  const callButton = document.querySelector(".btn-call");
  const checkButton = document.querySelector(".btn-check");
  const raiseButton = document.querySelector(".btn-raise");

//CHECK CONDITIONS BUTTONS on each phase of the game
function checkConditionsPreFlop(player1, player2) {
  if(conditionsPreflop==1){
      if (fold == 1) {
        window.alert("FOLD on Phase PRE-FLOP! ");     
        player1.chips -= risk; player2.chips += risk;  infoRisk.innerHTML = risk;
        preflop = 1; flop = 0; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhasePreFlop(player1, player2);
      }  
      if (call == 1) {        
        window.alert("CALL on Phase PRE-FLOP! ");         
        preflop = 0; flop = 1; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhaseFlop(player1, player2); 
      }  
      if (check == 1) {
        check == 0;
        window.alert("Check button is not used on preflop phase!");          
      }
      if (raise == 1) {
        window.alert("RAISE on Phase PRE-FLOP! ");     
        if(player1.chips >= risk*2){
        risk = risk + risk; 
        infoRisk.innerHTML = risk;        
        raise = 0; flop = 1; turn = 0; river = 0; conditionsPreflop=0;
         console.log("RAISE on Phase PRE-FLOP");                         
         PhaseFlop(player1, player2);
        } else {
          window.alert("Not enough lives!");     
        }
      }
      console.log("CheckConditionsPreFlop");                         
    }                       
}        

function checkConditionsFlop(player1, player2) {  
  
  if(conditionsFlop==1){
      if (fold == 2) {
        window.alert("FOLD on Phase FLOP! ");     
        player1.chips -= risk; player2.chips += risk;  infoRisk.innerHTML = risk;
        preflop = 1; flop = 0; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhasePreFlop(player1, player2);
      }  
      if (call == 2) {          
        call == 0;
        window.alert("Call button is NOT used on Phase FLOP! ");             
      }    
      if (check == 2) {
        window.alert("CHECK on Phase FLOP! ");     
        preflop=0; flop =0; turn = 1; river=0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhaseTurn(player1, player2);
      }    
      if (raise == 2) {
        window.alert("RAISE on Phase FLOP! ");     
        if(player1.chips >= risk*2){
          risk = risk + risk;
          infoRisk.innerHTML = risk;
          preflop = 0; flop = 0; conditionsFlop=0; river = 0; turn = 1;
          console.log("RAISE on Phase FLOP");                                 
          PhaseTurn(player1, player2);
          } else{
            window.alert("Not enough lives!");     
          }
      }
      console.log("CheckConditionsFlop");                         
    }                           
}        

function checkConditionsTurn(player1, player2) {  
  if(conditionsTurn==1){
      if (fold == 3) {
        window.alert("FOLD on Phase TURN! ");     
        player1.chips -= risk; player2.chips += risk;  infoRisk.innerHTML = risk;
        preflop = 1; flop = 0; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhasePreFlop(player1, player2);
      }  
      if (call == 3) {          
        call == 0;
        window.alert("Call button is NOT used on Phase TURN! ");             
      }    
      if (check == 3) {
        window.alert("CHECK on Phase TURN! ");     
        preflop=0; flop =0; turn=0; river=1; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhaseRiver(player1, player2);
      }    
      if (raise == 3) {  
        window.alert("RAISE on Phase TURN! ");         
        if(player1.chips >= risk*2){
          risk = risk + risk;
          infoRisk.innerHTML = risk;
          preflop = 0;  flop = 0; turn = 0; conditionsTurn=0; river = 1; 
          console.log("RAISE on Phase TURN! ");         
        PhaseRiver(player1, player2);        
          } else{
            window.alert("Not enough lives!");     
          }                 
      }
      console.log("CheckConditionsTurn");                         
    }      
}        

function checkConditionsRiver(player1, player2, allCommunityCards) {  
  if(conditionsRiver==1){
      if (fold == 4) {
        window.alert("FOLD on Phase RIVER! ");     
        player1.chips = player1.chips - (risk*2); player2.chips += risk;  infoRisk.innerHTML = risk;
        preflop = 1; flop = 0; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;    
        PhasePreFlop();
      }  
      if (call == 4) {          
        call == 0;
        window.alert("Call button is NOT used on Phase RIVER! ");             
      }    
      if (check == 4) {
        window.alert("CHECK on Phase RIVER! ");     
        preflop=0; flop =0; turn =0; river=0; comparehands=1; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
          compareTheHands(player1, player2, allCommunityCards);
      }    
      if (raise == 4) {        
        window.alert("RAISE on Phase RIVER! ");     
        if(player1.chips >= risk*2){
          risk = risk + risk;
          infoRisk.innerHTML = risk;
          preflop = 0;  flop = 0; turn = 0; conditionsRiver=0; comparehands=1;
          // comparar cartas e decidir vencedor de rodada          
          compareTheHands(player1, player2, allCommunityCards);
          console.log("RAISE on Phase RIVER! ");     
          } else{
            window.alert("Not enough lives!");     
          }       
      }
      console.log("CheckConditionsRIVER");
    } 
  }     

// PHASES OF THE GAME
function PhasePreFlop(originalDeck, player1, player2){
    var deck = originalDeck;
    deck = shuffleDeck(deck);

    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    cleanAllCommunityCards();
    if(preflop==1){
      conditionsPreflop=1; conditionsFlop=0; conditionsTurn=0; conditionsRiver=0; 
      fold = 0; check = 0; call = 0;  raise = 0;      
      deck = distributeCards(deck, player1, player2);             
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhasePreflop");      
    }
  }

  function PhaseFlop(player1, deck){
    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }

    if (flop == 1) { //flop
      conditionsPreflop=0; conditionsFlop=1; conditionsTurn=0; conditionsRiver=0;    
      fold = 0; check = 0; call = 0;  raise = 0;            
      // PUTS 3 COMMUNITY CARDS
      var communityCardsElEl = document.querySelector(".community-cards");
      var randomIndex; var dealtCard; var cardEl;
      // remove previous community cards  
      cleancommunityCardsEl();
      addCardOnCommunityCards(deck); addCardOnCommunityCards(deck); addCardOnCommunityCards(deck);

        foldButton.addEventListener("click", functionFold);
        callButton.addEventListener("click", functionCall);
        checkButton.addEventListener("click", functionCheck);
        raiseButton.addEventListener("click", functionRaise);
        console.log("PhaseFLop");
   }//flop     
  }
  
  function PhaseTurn(player1, deck){
    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    if (turn == 1) { //turn
      conditionsPreflop=0; conditionsFlop=0; conditionsTurn=1;conditionsRiver=0;
      fold = 0; check = 0; call = 0;  raise = 0;
      addCardOnCommunityCards(deck) 
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);     
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseTurn");
    }
  }
  function PhaseRiver(player1, deck){
    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    if (river == 1) { //river
      conditionsPreflop=0; conditionsFlop=0; conditionsTurn=0; conditionsRiver=1;
      fold = 0; check = 0; call = 0;  raise = 0;
      addCardOnCommunityCards(deck) 
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseRiver");
    }//river 
  }

function compareTheHands(player1, player2, allCommunityCards){
    if (comparehands == 1) { //river
      preflop=1;
      fold = 0; check = 0; call = 0;  raise = 0;
      conditionsPreflop=1; conditionsFlop=0; conditionsTurn=0; conditionsRiver=0; 


    console.log("compareTheHands()");  
    window.alert("COMPARING HANDS... ");


    // take all the cards on the community cards and puts in an array
    var allCommunityCards = document.querySelector(".community-cards");


    let roundWinner = determineWinnersHand(player1, player2, allCommunityCards);         
    if(roundWinner == 0){
      window.alert("DRAW!");  
      console.log("DRAW!"); 
    } else if(roundWinner == 1){
      window.alert("PLAYER 1 won the round.");
      console.log("PLAYER 1 won the round.");
      player1.chips += risk;
      player2.chips -= risk;
    } else if(roundWinner == 2){
      window.alert("PLAYER 2 won the round.");
      console.log("PLAYER 2 won the round.");
      player2.chips += risk;
      player1.chips -= risk;
    } else {
      window.alert("ERROR: roundWinner");
      console.log("ERROR: roundWinner");
    }    
    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    } else{        
        years = parseInt(infoYears.innerHTML); 
        years += 1;
        infoYears.innerHTML = years.toString();        
        PhasePreFlop(originalDeck, player1, player2);  
      }
    }
  }

  function resetGame() {
    // Reset variables    
    game = 0; conditionsPreflop = 0;  conditionsFlop = 0;  conditionsTurn = 0;  conditionsRiver = 0;
    preflop = 0;  flop = 0;  turn = 0;  river = 0;  comparehands = 0;
    fold = 0; call = 0; check = 0;  raise = 0;    
    risk = 67100000;
    years = 0;
    player.chips = 8000000000; player2.chips = 107000000000;   
    // Reset DOM elements
    infoYears.innerHTML = years;
    infoRisk.innerHTML = risk;  
    main();
  }

  export { functionFold, functionCall, functionCheck, functionRaise, foldButton, callButton, checkButton, raiseButton, 
        checkConditionsPreFlop, checkConditionsFlop, checkConditionsTurn, checkConditionsRiver,  
         PhasePreFlop, PhaseFlop, PhaseTurn, PhaseRiver, compareTheHands, resetGame };
  