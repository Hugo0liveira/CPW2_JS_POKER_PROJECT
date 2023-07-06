
import { shuffleDeck, cleanAllCommunityCards, distributeCards1, distributeCards2, addCardOnCommunityCards1, addCardOnCommunityCards2, addCardOnCommunityCards3, addCardOnCommunityCards4, addCardOnCommunityCards5, concatenateHand } from "./DeckManipulation.js";
import {determineWinnersHand} from "./DetermineWinnersHand.js";
import { Variables } from "./Variables.js"
import {functionStart} from "./main.js"
import {showAlertMessage, showAlertMessageLost1, showAlertMessageVictory1, showAlertMessageSeeDeathCards} from "./Messages.js"

// checking ERROR of calling function more than once inexplicably relate  Messages.js
function checkBeforeCompare(){
  console.log("checkBeforeCompare");
  console.log("Variables.checkBeforeComparing: ", Variables.checkBeforeComparing);
  if(Variables.checkBeforeComparing==1){
    Variables.checkBeforeComparing=2;
    compareTheHands();
  }
}


// checking ERROR of calling function more than once inexplicably relate  Messages.js
function checkBeforeGoingToNextRound(){
  console.log("checkBeforeGoingToNextRound");
  console.log("Variables.checkBeforeNextRound: ", Variables.checkBeforeNextRound);
  if(Variables.checkBeforeNextRound==1){
    Variables.checkBeforeNextRound = 2;
    PhasePreFlop(); 
  }
}


function continueToNextRound(message) {
  
  const noneDisplayAlert = document.getElementById('myCustomAlert');
  noneDisplayAlert.style.display = 'none';
  
  console.log("continueToNextRound");

  const btnContinue = document.getElementById('myCustomAlert2');
  btnContinue.style.display = "block";
  btnContinue.style.zIndex = "18";

  // Set the message text
  const alertMessage = document.getElementById('custom-alert-message2');
  alertMessage.textContent = message;

  // Attach event listener to the OK button
  const continueButton = document.getElementById('btn-continue');
  continueButton.addEventListener('click', function functionContinue(event) {
      event.stopPropagation();

    // to avoid being called more than once each time button is pressed
    Variables.checkBeforeNextRound += 1;
    console.log('Variables.checkBeforeNextRound', Variables.checkBeforeNextRound);
    // Strange error happening here. The function checkBeforeGoingToNextRound() is being called more than once.
        checkBeforeGoingToNextRound();      
        btnContinue.style.display =  'none';          
  });
}


// Buttons functions 
function functionFold(event) {  
  deathKiss(); 
  // to delay the execution of the next line of code
  setTimeout( awaitToFold, 2000);

  function awaitToFold() {  
    showAlertMessage(Variables.messageFold);
    event.stopPropagation(); // Stop event propagation
        if(Variables.conditionsPreflop==1){
          Variables.fold = 1; checkConditionsPreFlop(); 
        } else if(Variables.conditionsFlop==1){
          Variables.fold = 2; checkConditionsFlop(); 
        } else if(Variables.conditionsTurn==1){
          Variables.fold = 3; checkConditionsTurn(); 
        } else if(Variables.conditionsRiver==1){
          Variables.fold = 4; checkConditionsRiver(); 
        }
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

function functionRaise(event) {            
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
        //window.alert("FOLD on Phase PRE-FLOP! ");             
        Variables.player1.chips -= Math.floor(Variables.risk/5); Variables.player2.chips += Math.floor(Variables.risk/5);  Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 1) {        
       // window.alert("CALL on Phase PRE-FLOP! ");         
        Variables.preflop = 0; Variables.flop = 1; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseFlop(Variables.player1, Variables.player2); 
      }  
      if (Variables.check == 1) {
        Variables.check == 0;
        //showAlertMessage("Check button is not used on preflop phase!");          
      }
      if (Variables.raise == 1) {
        //window.alert("RAISE on Phase PRE-FLOP! ");     
        //if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk; 
          Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');    
          Variables.raise = 0; Variables.flop = 1; Variables.turn = 0; Variables.river = 0; Variables.conditionsPreflop=0;
         console.log("RAISE on Phase PRE-FLOP");                         
         PhaseFlop();
        } /*else {
          window.alert("Not enough lives!");     
        }*/
      
      console.log("CheckConditionsPreFlop");                         
    }                       
}        

function checkConditionsFlop() {  
  
  if(Variables.conditionsFlop==1){
      if (Variables.fold == 2) {
       // window.alert("FOLD on Phase FLOP! ");     
        Variables.player1.chips -= Math.floor(Variables.risk/4); Variables.player2.chips += Math.floor(Variables.risk/4);  Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 2) {          
        Variables.call == 0;
        //showAlertMessage("Call button is NOT used on Phase FLOP! ");             
      }    
      if (Variables.check == 2) {
       // window.alert("CHECK on Phase FLOP! ");     
        Variables.preflop=0; Variables.flop =0; Variables.turn = 1; Variables.river=0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseTurn();
      }    
      if (Variables.raise == 2) {
       // window.alert("RAISE on Phase FLOP! ");     
        //if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');
          Variables.preflop = 0; Variables.flop = 0; Variables.conditionsFlop=0; Variables.river = 0; Variables.turn = 1;
          console.log("RAISE on Phase FLOP");                                 
          PhaseTurn();
          } /* else{
            window.alert("Not enough lives!");     
          }*/
      
      console.log("CheckConditionsFlop");                         
    }                           
}        

function checkConditionsTurn() {  
  if(Variables.conditionsTurn==1){
      if (Variables.fold == 3) {
     //   window.alert("FOLD on Phase TURN! ");     
        Variables.player1.chips -= Math.floor(Variables.risk /3); Variables.player2.chips += Math.floor(Variables.risk/3);  Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhasePreFlop();
      }  
      if (Variables.call == 3) {          
        Variables.call == 0;
        //showAlertMessage("Call button is NOT used on Phase TURN! ");             
      }    
      if (Variables.check == 3) {
    //    window.alert("CHECK on Phase TURN! ");     
        Variables.preflop=0; Variables.flop =0; Variables.turn=0; Variables.river=1; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        PhaseRiver();
      }    
      if (Variables.raise == 3) {  
     //   window.alert("RAISE on Phase TURN! ");         
       // if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');
          Variables.preflop = 0;  Variables.flop = 0; Variables.turn = 0; Variables.conditionsTurn=0; Variables.river = 1; 
      //    console.log("RAISE on Phase TURN! ");         
        PhaseRiver();        
          } /* else{
            window.alert("Not enough lives!");     
          }   */              
      
      console.log("CheckConditionsTurn");                         
    }      
}        

function checkConditionsRiver() {  
  if(Variables.conditionsRiver==1){    
      if (Variables.fold == 4) {
    //    window.alert("FOLD on Phase RIVER! ");     
        Variables.player1.chips -= Math.floor(Variables.risk/2); Variables.player2.chips += Math.floor(Variables.risk/2);  Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');
        Variables.preflop = 1; Variables.flop = 0; Variables.turn = 0; Variables.river = 0; Variables.comparehands=0; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;    
        PhasePreFlop();
      }  
      if (Variables.call == 4) {          
        Variables.call == 0;
        //showAlertMessage("Call button is NOT used on Phase RIVER! ");             
      }    
      if (Variables.check == 4) {        
        // to avoid being called more than once each time button is pressed  
        // Strange error happening here. The function checkBeforeCompare() is being called more than once.
        Variables.checkBeforeNextRound = 0;
        Variables.checkBeforeComparing = 0;          

        Variables.preflop=0; Variables.flop =0; Variables.turn =0; Variables.river=0; Variables.comparehands=1; 
        Variables.conditionsFlop=0; Variables.conditionsRiver=0; Variables.conditionsTurn =0;
        console.log('check', Variables.check);
        console.log('raise', Variables.raise);
        distributeCards2();   
        showAlertMessageSeeDeathCards("Comparing Hands");          
        
      } else if (Variables.raise == 4) {        
        // to avoid being called more than once each time button is pressed  
        // Strange error happening here. The function checkBeforeCompare() is being called more than once.
        Variables.checkBeforeNextRound = 0;
        Variables.checkBeforeComparing = 0; 
        
       // if(Variables.player1.chips >= Variables.risk*2){
          Variables.risk = Variables.risk + Variables.risk;
          Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');
          Variables.preflop = 0;  Variables.flop = 0; Variables.turn = 0; Variables.conditionsRiver=0; Variables.comparehands=1;
          console.log('check', Variables.check);
          console.log('raise', Variables.raise);     
          distributeCards2();   
          showAlertMessageSeeDeathCards("Comparing Hands");          
          
      //    console.log("RAISE on Phase RIVER! ");     
          } /*else{
            window.alert("Not enough lives!");     
          }       */
      
      console.log("CheckConditionsRIVER");      
    } 
  }     

// PHASES OF THE GAME
function PhasePreFlop(){     
  document.body.style.backgroundImage = "url('Calverton-National-Cemetery.jpg')";
  // background no-repeat;
  document.body.style.backgroundRepeat = "no-repeat";  
  document.body.style.backgroundSize = "cover";
  // background center fixed;
  document.body.style.backgroundPosition = "center fixed";
  // background full screen SCROLLING;
  document.body.style.backgroundAttachment = "fixed";

  // void ugly HTML before loading
  const actions = document.querySelector('.actions');
  actions.style.visibility = "visible";
  const info = document.querySelector('.info');
  info.style.visibility = "visible";
  const section1 = document.querySelector('.player-section-1');
  section1.style.visibility = "visible";
  const section2 = document.querySelector('.player-section-2');
  section2.style.visibility = "visible";

  const invisibleHTML = document.querySelector('.invisible');
  invisibleHTML.style.visibility = "visible";
  // select <div class="invisible2"> HTML element and change the CSS all the elements inside to visible
  const invisible2HTML = document.querySelector('.invisible2');
  invisible2HTML.style.visibility = "visible";


  AppearButtonCall();
  DisappearButtonCheck();
  Variables.chips1Html.innerHTML = Variables.player1.chips.toLocaleString('en-US');
  Variables.chips2Html.innerHTML = Variables.player2.chips.toLocaleString('en-US');
  cleanAllCommunityCards();
  // refill deck with original deck
  Variables.deck = [];
  Variables.deck = Variables.deck.concat(Variables.originalDeck);  
  Variables.deck = shuffleDeck();    
    console.log("deck:", Variables.deck);
    console.log("originalDeck:", Variables.originalDeck);
      gameLost();
    if(Variables.preflop==1){
      Variables.conditionsPreflop=1; Variables.conditionsFlop=0; Variables.conditionsTurn=0; Variables.conditionsRiver=0; 
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;      
      Variables.deck = distributeCards1();             
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhasePreflop");      
    }
  }

  function PhaseFlop(){    
    DisappearButtonCall();
    AppearButtonCheck();
    gameLost();
    if (Variables.flop == 1) { //flop
      Variables.conditionsPreflop=0; Variables.conditionsFlop=1; Variables.conditionsTurn=0; Variables.conditionsRiver=0;    
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;                    
      // remove previous community cards  
      cleanAllCommunityCards();
         // PUTS 3 COMMUNITY CARDS
        addCardOnCommunityCards1(); addCardOnCommunityCards2(); addCardOnCommunityCards3();
        foldButton.addEventListener("click", functionFold);
        callButton.addEventListener("click", functionCall);
        checkButton.addEventListener("click", functionCheck);
        raiseButton.addEventListener("click", functionRaise);
        console.log("PhaseFLop");
   }//flop     
  }
  
  function PhaseTurn(){
    gameLost();
    if (Variables.turn == 1) { //turn
      Variables.conditionsPreflop=0; Variables.conditionsFlop=0; Variables.conditionsTurn=1; Variables.conditionsRiver=0;
      Variables.fold = 0; Variables.check = 0; Variables.call = 0;  Variables.raise = 0;
      addCardOnCommunityCards4();
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);     
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseTurn");
    }
  }
  function PhaseRiver(){    
    gameLost();
    if (Variables.river == 1) { //river
      Variables.conditionsPreflop=0; Variables.conditionsFlop=0; Variables.conditionsTurn=0; Variables.conditionsRiver=1;
      Variables.fold = 0; Variables.check = 0; Variables.call = 0; Variables.raise = 0;
      addCardOnCommunityCards5();
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
    
    var roundWinner = determineWinnersHand();       

        if(roundWinner == 0){          
          roundDrawDeathReaction();
         // window.alert("DRAW!");  
          console.log("DRAW!");              
        }

        if(roundWinner == 1){
          roundLostDeathKiss();
         // window.alert("HUMANITY won the round.");
          console.log("HUMANITY won the round.");
          Variables.player1.chips += Variables.risk;      
          Variables.player2.chips -= Variables.risk;             
        } 
        
        if(roundWinner == 2){
          roundWonDeathReaction()
          //window.alert("DEATH won the round.");
          console.log("DEATH won the round.");
          Variables.player1.chips -= Variables.risk;      
          Variables.player2.chips += Variables.risk; 
        } 

        if (roundWinner != 0 && roundWinner != 1 && roundWinner != 2) {
          showAlertMessage("ERROR: roundWinner");
          console.log("ERROR: roundWinner");
        } 
        // update chips on screen
        Variables.chips1Html.innerHTML = Variables.player1.chips.toString();      
        Variables.chips2Html.innerHTML = Variables.player2.chips.toString();   
      
        
      if(Variables.player2.chips <= 0){ 
        setTimeout( deathEndStare(), 3200);
        deathEndStare();
        setTimeout( awaitStare, 3200);
          function awaitStare() {                                 
            showAlertMessageVictory1(Variables.messageNietzscheWin1);               
            
          }
        } else{                  
          Variables.years += 1;
          Variables.infoYears.innerHTML = Variables.years.toLocaleString('en-US');          
          }
        }        
  }

  function resetGame() {
    showAlertMessageLost1(Variables.messageDoTheEvolution1);
    
    
    // Reset variables    
    Variables.game = 0; Variables.conditionsPreflop = 0;  Variables.conditionsFlop = 0;  Variables.conditionsTurn = 0;  Variables.conditionsRiver = 0;
    Variables.preflop = 0;  Variables.flop = 0;  Variables.turn = 0;  Variables.river = 0;  Variables.comparehands = 0;
    Variables.fold = 0; Variables.call = 0; Variables.check = 0;  Variables.raise = 0;    
    Variables.risk = 67100000;
    Variables.years = 300000;
    Variables.player1.chips = 8000000000; Variables.player2.chips = 100000000000;   
    // Reset DOM elements
    Variables.infoYears.innerHTML = Variables.years.toLocaleString('en-US');
    Variables.infoRisk.innerHTML = Variables.risk.toLocaleString('en-US');
    functionStart();
  }

  // Disapear buttons
  function DisappearButtonCheck(){
   const checkButton = document.querySelector('.btn-check');
   checkButton.innerHTML = "";    
   // change css to transparent
     checkButton.style.backgroundColor = "transparent";
      checkButton.style.color = "transparent";
  }
  function DisappearButtonCall(){
    const callButton = document.querySelector('.btn-call');    
    // change css to transparent
    callButton.style.backgroundColor = "transparent";
    callButton.style.color = "transparent";
  }
  function DisappearButtonRaise(){
    const raiseButton = document.querySelector('.btn-raise');
    raiseButton.innerHTML = "";
    // change css to transparent
    raiseButton.style.backgroundColor = "transparent";
    raiseButton.style.color = "transparent";
  }
  function DisappearButtonFold(){
    const foldButton = document.querySelector('.btn-fold');
    foldButton.innerHTML = "";
    // change css to transparent
    foldButton.style.backgroundColor = "transparent";
    foldButton.style.color = "transparent";
  }
  
  // Appear buttons
  function AppearButtonCheck(){
    const checkButton = document.querySelector('.btn-check');
    checkButton.innerHTML = ` 
    <button class="btn-check" onclick="functionCheck()">Check</button>  
    `;  
  }
  function AppearButtonCall(){
    const callButton = document.querySelector('.btn-call');
    // undo the transparence of css     
    callButton.style.backgroundColor = "#f3de21";
    callButton.style.color = "rgb(0, 0, 0)";         
  }
  function AppearButtonRaise(){
    const raiseButton = document.querySelector('.btn-raise');
    raiseButton.innerHTML = `
    <button class="btn-raise" onclick="functionRaise()">Raise</button> 
    `;
  }
  function AppearButtonFold(){
    const foldButton = document.querySelector('.btn-fold');
    foldButton.innerHTML = `
    <button class="btn-fold" onclick="functionFold()">Fold</button>
    `;
  }
     
  // show image when Death wins round
  function deathKiss() {    
    Variables.player2HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('deathKiss');
    container.innerHTML = `
    <div class="deathKiss">
    <img src="https://64.media.tumblr.com/8d92d659587f8434d360c8aaf123e1ca/tumblr_pb39eyKcr71w1y15so1_640.gif" alt="Death" class="deathKiss">
    </div>
    `;
    Variables.player2HandHTML.appendChild(container);
  }

  // show gif when Death wins game
  function deathDancing() {        
    //cleanAllCommunityCards();
    Variables.player2HandHTML.innerHTML = "";   
  //  Variables.player1HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('deathDancing');
    container.innerHTML = `
    <div class="deathDancing">
    <img src="https://steamuserimages-a.akamaihd.net/ugc/158030922591272127/DA8CFF0E533C01FB45C950F858B33501B6DB8F15/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Death" class="deathDancing">
    </div>
    `;        
    document.body.innerHTML = "";
    document.body.appendChild(container);
  }

  function deathDancingAdd() {         
  //  Variables.player1HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('deathDancingAdd');
    container.innerHTML = `
    <div class="deathDancingAdd">
    <img src="https://steamuserimages-a.akamaihd.net/ugc/158030922591272127/DA8CFF0E533C01FB45C950F858B33501B6DB8F15/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Death" class="deathDancingAdd">
    </div>
    `;            
    document.body.appendChild(container);    
  }
  
  function gameLost() {
    if (Variables.player1.chips < 0) {              
      // to delay the execution of the next line of code
      setTimeout( waitPilot, 2000);
      function waitPilot() { 
        deathWinExplosion();
        // to delay the execution of the next line of code
        setTimeout( waitExplosion, 8000);
        function waitExplosion() {
          
            deathDancing(); 
            deathDancingAdd(); deathDancingAdd(); deathDancingAdd();       
            deathDancingAdd(); deathDancingAdd(); deathDancingAdd(); 
            deathDancingAdd(); deathDancingAdd(); deathDancingAdd();  
            
            // to delay the execution of the next line of code
              setTimeout( awaitToEnd, 3000);
              function awaitToEnd() {            
                resetGame();
              }
        }
      }    
    }
  }

  // welcome from Death
  function welcomeDeath() {
    // change document.body background to  deathWelcome.gif 
    document.body.style.backgroundImage = "url('deathWelcome.gif')";
    // centralizing backgorund image
    document.body.style.backgroundPosition = "center";
    
  }  

  // round lost death reaction gif
  function roundLostDeathKiss() {
    Variables.player2HandHTML.innerHTML = "";   
    const container = document.createElement('div');
    container.classList.add('roundLostDeathKiss');
    container.innerHTML = `
    <div class="roundLostDeath">
    <img src="https://64.media.tumblr.com/7245eb81aaa356947db5690c28307d41/8ea40b1b3bd96097-ff/s540x810/19bb94a74b5f74fa9c4fd668f7dd9afdaa6d2777.gifv" alt="Death" class="roundLostDeathKiss">
    </div>
    `;    
    Variables.player2HandHTML.appendChild(container);    
  }
   //alert
  // round won death reaction gif
  function roundWonDeathReaction() {
    Variables.player2HandHTML.innerHTML = "";
    const container = document.createElement('div');
    container.classList.add('roundWonDeathReaction');
    container.innerHTML = `
    <div class="roundWonDeath">
    <img src="https://3.bp.blogspot.com/-KyTwIisMGxg/VlXlvxRNsXI/AAAAAAAAi0Y/R8tSYHJBi1M/s1600/ownnn%2Bmas%2Beh%2Buma%2Bfofa.gif" alt="Death" class="roundWonDeathReaction">
    </div>
    `;
    Variables.player2HandHTML.appendChild(container);
  }

  // round draw death reaction gif
  function roundDrawDeathReaction() {
    Variables.player2HandHTML.innerHTML = "";
    const container = document.createElement('div');
    container.classList.add('roundDrawDeathReaction');
    container.innerHTML = `
    <div class="roundDrawDeath">
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45e35feb-dd85-4aec-9f8d-79b7f9573776/dax9o68-84588eee-db48-4d45-84eb-807cf0d187e6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1ZTM1ZmViLWRkODUtNGFlYy05ZjhkLTc5YjdmOTU3Mzc3NlwvZGF4OW82OC04NDU4OGVlZS1kYjQ4LTRkNDUtODRlYi04MDdjZjBkMTg3ZTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I-JXMGntQmQgSGnKgTLle2PsSpToKkk1V7BIxkeo-I8" alt="Death" class="roundDrawDeathReaction">
    </div>
    `;
    Variables.player2HandHTML.appendChild(container);
  }

  //  death win exploson gif
  function deathWinExplosion() {
    const invisible3HTML = document.querySelector('.invisible3');
    invisible3HTML.style.visibility = "hidden";
    Variables.player1HandHTML.innerHTML = "";
    const container = document.createElement('div');
    container.classList.add('deathWinExplosion');
    container.innerHTML = `
    <div class="deathWinExplosion">
      <img src="explosion.gif">
    </div>
    `;
    Variables.player1HandHTML.appendChild(container);
    container.style.zIndex = "433";
  }

  // death lost game gif
  function deathEndStare() {
    Variables.player2HandHTML.innerHTML = "";
    Variables.player2HandHTML.innerHTML = `
    <div class="deathEndStare">
    <video width="380" height="330" autoplay>
      <source  src="deathEndStare.mp4" type="video/mp4">
    </video>
  </div>
    `;    
  } 


  export { functionFold, functionCall, functionCheck, functionRaise, foldButton, callButton, checkButton, raiseButton, checkConditionsPreFlop, checkConditionsFlop, checkConditionsTurn, checkConditionsRiver, PhasePreFlop, PhaseFlop, PhaseTurn, PhaseRiver, compareTheHands, resetGame, welcomeDeath, DisappearButtonCall, DisappearButtonCheck, DisappearButtonFold, DisappearButtonRaise, AppearButtonCheck, AppearButtonCall, gameLost, deathKiss, deathDancing, checkBeforeCompare, checkBeforeGoingToNextRound, continueToNextRound };
  