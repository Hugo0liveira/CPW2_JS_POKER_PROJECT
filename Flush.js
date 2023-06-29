
// returns the power of the fisrt kicker card of a flush   
function  flushKickerOne(player) {     
    var kickerOne = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {         
                  // check for five of the highest cards on the hand with the same suit
                  if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    // determine the kickers
                    if (player.hand[g].power > player.hand[h].power && player.hand[g].power > player.hand[i].power && player.hand[g].power > player.hand[j].power && player.hand[g].power > player.hand[k].power) {                        
                        kickerOne = player.hand[g].power;                   
                    }                    
                  } // if main
                } // loop g
              } // loop h
            } // loop i
          } // loop j
        } // loop k
      } // loop l
    } // loop m
    
    console.log("kickerOne: " + kickerOne);
    return kickerOne;
    } // end of flush
    
      // check for flush. If all cards on the hand have the same suit, then the player has a flush.         
      function  flushKickerTwo(player) {         
        var kickerTwo = 0;       
        for (var m = 0; m < player.hand.length; m++) {
          for (var l = 0; l < player.hand.length; l++) {      
            for (var k = 0; k < player.hand.length; k++) {          
              for (var j = 0; j < player.hand.length; j++) {
                for (var i = 0; i < player.hand.length; i++) {  
                  for (var h = 0; h < player.hand.length; h++) {
                    for (var g = 0; g < player.hand.length; g++) {                    
                      // check for five of the highest cards on the hand with the same suit
                      if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                        // determine the kickers
                        if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[h].power > player.hand[j].power && player.hand[h].power > player.hand[k].power) {                         
                          kickerTwo = player.hand[h].power;                       
                        }
                      } // if main
                    } // loop g
                  } // loop h
                } // loop i
              } // loop j
            } // loop k
          } // loop l
        } // loop m
        
        console.log("kickerTwo: " + kickerTwo);
        return kickerTwo;
      } // end of flush
    
      // check for flush. If all cards on the hand have the same suit, then the player has a flush.         
      function  flushKickerThree(player) {        
        var kickerThree = 0; 
        for (var m = 0; m < player.hand.length; m++) {
          for (var l = 0; l < player.hand.length; l++) {      
            for (var k = 0; k < player.hand.length; k++) {          
              for (var j = 0; j < player.hand.length; j++) {
                for (var i = 0; i < player.hand.length; i++) {  
                  for (var h = 0; h < player.hand.length; h++) {
                    for (var g = 0; g < player.hand.length; g++) {                    
    
                      // check for five of the highest cards on the hand with the same suit
                      if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                        // determine the kickers
                        if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[i].power > player.hand[k].power ) {
                          kickerThree = player.hand[i].power;
                        }
                      } // if main
                    } // loop g
                  } // loop h
                } // loop i
              } // loop j
            } // loop k
          } // loop l
        } // loop m
        
        console.log("kickerThree: " + kickerThree);
        return kickerThree;
      } // end of flush
    
      // check for flush. If all cards on the hand have the same suit, then the player has a flush.         
      function  flushKickerFour(player) { 
        var kickerFour = 0; 
        for (var m = 0; m < player.hand.length; m++) {
          for (var l = 0; l < player.hand.length; l++) {      
            for (var k = 0; k < player.hand.length; k++) {          
              for (var j = 0; j < player.hand.length; j++) {
                for (var i = 0; i < player.hand.length; i++) {  
                  for (var h = 0; h < player.hand.length; h++) {
                    for (var g = 0; g < player.hand.length; g++) {                    
    
                      // check for five of the highest cards on the hand with the same suit
                      if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                        flush = 1;
                        // determine the kickers
                        if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power ) {
                          kickerFour = player.hand[j].power;
                        }
                      } // if main
                    } // loop g
                  } // loop h
                } // loop i
              } // loop j
            } // loop k
          } // loop l
        } // loop m
        
        console.log("kickerFour: " + kickerFour);
        return kickerFour;
      } // end of flush
    
    
    // check for flush. If all cards on the hand have the same suit, then the player has a flush.         
    function  flushKickerFive(player) { 
      var kickerFive = 0; 
      for (var m = 0; m < player.hand.length; m++) {
        for (var l = 0; l < player.hand.length; l++) {      
          for (var k = 0; k < player.hand.length; k++) {          
            for (var j = 0; j < player.hand.length; j++) {
              for (var i = 0; i < player.hand.length; i++) {  
                for (var h = 0; h < player.hand.length; h++) {
                  for (var g = 0; g < player.hand.length; g++) {                    
    
                    // check for five of the highest cards on the hand with the same suit
                    if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      // determine the kickers
                      if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].suit != player.hand[l].suit &&  player.hand[k].suit != player.hand[m].suit) {
                        kickerFive = player.hand[k].power;
                      } else if(player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].suit != player.hand[l].suit &&  player.hand[k].suit == player.hand[m].suit && player.hand[k].power > player.hand[m].power){
                        kickerFive = player.hand[k].power;
                      } else if(player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].suit == player.hand[l].suit &&  player.hand[k].suit != player.hand[m].suit && player.hand[k].power > player.hand[l].power){
                        kickerFive = player.hand[k].power;
                      } else if(player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].suit == player.hand[l].suit &&  player.hand[k].suit == player.hand[m].suit && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power){
                        kickerFive = player.hand[k].power;
                      }
                    } // if main
                  } // loop g
                } // loop h
              } // loop i
            } // loop j
          } // loop k
        } // loop l
      } // loop m
      
      console.log("kickerFive: " + kickerFive);
      return kickerFive;
    } // end of flush
    
    // check for flush. If all cards on the hand have the same suit, then the player has a flush.         
    function  flushFunction(player) { 
    var flush = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {             
                  // check for five of the highest cards on the hand with the same suit
                  if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    flush = 1;
                  } // if main
                } // loop g
              } // loop h
            } // loop i
          } // loop j
        } // loop k
      } // loop l
    } // loop m
    
    console.log("flush: " + flush);
    return flush;
    } // end of flush  
    
    export {flushFunction, flushKickerOne, flushKickerTwo, flushKickerThree, flushKickerFour, flushKickerFive};