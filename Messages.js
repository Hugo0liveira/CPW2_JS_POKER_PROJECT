import { Variables } from "./Variables.js"
import {PhasePreFlop, checkBeforeCompare, continueToNextRound} from "./RoundPhases.js"

// comparing hands string
function showAlertMessageSeeDeathCards(message) {
    console.log("showAlertMessageSeeDeathCards");
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';

    customAlert.style.zIndex = "1";
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();

        setTimeout( function () {     
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      // to avoid being called more than once each time button is pressed 
      Variables.checkBeforeComparing += 1;
      // Strange error happening here. The function checkBeforeCompare() is being called more than once.
       checkBeforeCompare();
       seeReaction();       

            }
              , 0 );
          
    });
  }

  function seeReaction() {
    console.log("showAlertMessageSeeDeathCards");
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');  
  
      setTimeout( function () {     
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
        continueToNextRound("Continue...");   
      }
        , 900 );
    
  }

function showAlertMessageNoClick(message) {
    console.log("showAlertMessageRoundWinner");
        
    const btnResult= document.getElementById('myCustomAlert3');
    btnResult.style.display = "block";
    // btnResult above all
    btnResult.style.zIndex = "333";

    const alertMessage = document.getElementById('custom-alert-message3');  
    // Set the message text
    alertMessage.textContent = message;  
  
    setTimeout( function () {     
        
            // Hide the custom alert
            btnResult.style.display =  'none';    
             
            }
              , 2500 );                
  }
  

function showAlertMessage1(message) {
    const noneDisplayAlert = document.getElementById('myCustomAlert');
    noneDisplayAlert.style.display = 'block';

    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
           
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
        showAlertMessage2(Variables.messageCohle2);           
       
    });
  }
  
  function showAlertMessage2(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
           
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
        showAlertMessage3(Variables.initialMessage1);           
       
    });
  }
  
  function showAlertMessage3(message) {
    
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
       
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
        showAlertMessage4(Variables.initialMessage2);           
       
    });
  }
  
  function showAlertMessage4(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
        showAlertMessage5(Variables.initialMessage3);          
       
    });
  }
  
  function showAlertMessage5(message) {
    
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
      
      // Hide the custom alert
      customAlert.style.display = 'none';          
      Variables.endHTML.style.display = "block";   
        
    });
  }

  function showAlertMessage(message) {
    
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
      
      // Hide the custom alert
      customAlert.style.display = 'none';           
    });
  }

  function showAlertMessageLost1(message) {
    const container = document.createElement('div');
    container.innerHTML = `
    <div id="myCustomAlert" class="custom-alert">
        <div class="custom-alert-content">
          <span id="custom-alert-message"></span>
          <BR>
          <button id="custom-alert-ok">
            <img src="ok.png"/>
          </button>
        </div>
      </div>
    `;            
    document.body.appendChild(container);  


    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageLost2(Variables.messageDoTheEvolution2);      
       
    });
  }

  function showAlertMessageLost2(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageLost3(Variables.messageDoTheEvolution3);
       
    });
  }

  function showAlertMessageLost3(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageLost4(Variables.messageDoTheEvolution4);
       
    });
  }

  function showAlertMessageLost4(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
            
    });
  }

  function showAlertMessageVictory1(message) {
    document.body.innerHTML = "";

    const container = document.createElement('div');
    container.innerHTML = `
    <div id="myCustomAlert" class="custom-alert">
        <div class="custom-alert-content">
          <span id="custom-alert-message"></span>
          <BR>
          <button id="custom-alert-ok">
            <img src="ok.png"/>
          </button>
        </div>
      </div>
    `;            
    document.body.appendChild(container);  

    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageVictory2(Variables.messageNietzscheWin2);        
       
    });
  }

  function showAlertMessageVictory2(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageVictory3(Variables.messageYuvalWin);       
       
    });
  }

  function showAlertMessageVictory3(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageVictory4(Variables.messageSapolskyWin);    
       
    });
  }

  function showAlertMessageVictory4(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageVictory5( Variables.messageChurchlandWin);
    });
  }


  function showAlertMessageVictory5(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageVictory6(Variables.messageMetzingerWin);
    });
  }

  function showAlertMessageVictory6(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageVictory7(Variables.messageChomskyWin);
    });
  }

  function showAlertMessageVictory7(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      
      showAlertMessageVictory8(Variables.messageCohleWin);
    });
  }

  function showAlertMessageVictory8(message) {
    const customAlert = document.getElementById('myCustomAlert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    // Set the message text
    alertMessage.textContent = message;
  
    // Show the custom alert
    customAlert.style.display = 'block';
  
    // Attach event listener to the OK button
    const okButton = document.getElementById('custom-alert-ok');
    okButton.addEventListener('click', function(event) {
        event.stopPropagation();
        
      // Hide the custom alert
      customAlert.style.display = 'none';    
      humanityVictory();
    });
  }
  
  // humanity victory
  function humanityVictory() {   
    document.body.innerHTML = ""
    document.body.innerHTML = `
    <div class="humanityVictory">
     <iframe  src="https://www.youtube.com/embed/j800SVeiS5I" frameborder="0" allowfullscreen></iframe> 
     </div>
     `;         
  }



export { showAlertMessage1, showAlertMessage2, showAlertMessage3, showAlertMessage4, showAlertMessage5, showAlertMessage, showAlertMessageLost1, showAlertMessageVictory1, showAlertMessageNoClick, showAlertMessageSeeDeathCards };