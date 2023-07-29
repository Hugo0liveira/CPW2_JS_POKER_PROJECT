
function  higherCardFive(player) {         
    var higherCardFive = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                     higherCardFive = player.hand[k].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCardFive: " + higherCardFive);
    return higherCardFive;
  }   

  function  higherCardFour(player) {      
    var higherCardFour = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[j].power > player.hand[l].power && player.hand[j].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                     higherCardFour = player.hand[j].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCardFour: " + higherCardFour);
    return higherCardFour;
  }   

  function  higherCardThree(player) {   
    var higherCardThree = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[i].power > player.hand[k].power && player.hand[i].power > player.hand[l].power && player.hand[i].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      higherCardThree = player.hand[i].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCardThree: " + higherCardThree);
    return higherCardThree;
  }    

  function  higherCardTwo(player) {      
    var higherCardTwo = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                  if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[h].power > player.hand[j].power && player.hand[h].power > player.hand[k].power && player.hand[h].power > player.hand[l].power && player.hand[h].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      higherCardTwo = player.hand[h].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCardTwo: " + higherCardTwo);
    return higherCardTwo;
  }    

  // check for high card.
  function  higherCard(player) {      
    var higherCard = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[g].power > player.hand[i].power && player.hand[g].power > player.hand[j].power && player.hand[g].power > player.hand[k].power && player.hand[g].power > player.hand[l].power && player.hand[g].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      higherCard = player.hand[g].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCard: " + higherCard);
    return higherCard;
  }    

  export {higherCard, higherCardTwo, higherCardThree, higherCardFour, higherCardFive  };