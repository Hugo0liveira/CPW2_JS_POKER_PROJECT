import { Variables } from "./Variables.js"

function showAlertMessage1(message) {
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
      
        showAlertMessage2(Variables.messageCohle2);   
        
       
    });
  }
  
  function showAlertMessage2(message) {
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
      
        showAlertMessage3(Variables.initialMessage1);   
        
       
    });
  }
  
  function showAlertMessage3(message) {
    
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
      
        showAlertMessage4(Variables.initialMessage2);   
        
       
    });
  }
  
  function showAlertMessage4(message) {
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
      
        showAlertMessage5(Variables.initialMessage3);   
        
       
    });
  }
  
  function showAlertMessage5(message) {
    
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
  



export { showAlertMessage1, showAlertMessage2, showAlertMessage3, showAlertMessage4, showAlertMessage5 };