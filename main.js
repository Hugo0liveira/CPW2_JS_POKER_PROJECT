import { Variables } from "./Variables.js"
import { PhasePreFlop, welcomeDeath, welcomeDeathAdd1, welcomeDeathAdd2, welcomeDeathAdd3, welcomeDeathAdd4, welcomeDeathAdd5 } from "./RoundPhases.js"

function showAlert(message) {
  var customAlert = document.getElementById('myCustomAlert');
  var alertMessage = document.getElementById('custom-alert-message');

  // Set the message text
  alertMessage.textContent = message;

  // Show the custom alert
  customAlert.style.display = 'block';

  // Attach event listener to the OK button
  var okButton = document.getElementById('custom-alert-ok');
  okButton.addEventListener('click', function() {
    // Hide the custom alert
    customAlert.style.display = 'none';
  });
}

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
      showAlert(Variables.messageCohle1);                    
        
        const okButton = document.querySelector("#custom-alert-ok");
        okButton.addEventListener("click", functionOk);

        function functionOk(event) {    
          Variables.okNotOk += 1;       
          event.stopPropagation(); // Stop event propagation
              if(Variables.okNotOk==1){
                showAlert(Variables.messageCohle2);   
              } 
              if(Variables.okNotOk==2){
                console.log(Variables.okNotOk);  
                showAlert(Variables.initialMessage1);         
                alert(Variables.initialMessage1);
                alert(Variables.initialMessage2);
                alert(Variables.initialMessage0);
              } 
              if(Variables.okNotOk==3){
                showAlert(Variables.initialMessage2);
                
              } 
              if(Variables.okNotOk==4){
                showAlert(Variables.initialMessage0);                
              }
        }

      Variables.preflop = 1; 

      PhasePreFlop();    
    }
  }     
  
} //game 

functionStart();

export { functionStart };

