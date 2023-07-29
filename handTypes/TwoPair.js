
function  twoPairKicker(player) {
    var kicker = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power  && player.hand[i].power == player.hand[j].power &&     player.hand[j].power > player.hand[l].power && player.hand[j].power > player.hand[m].power && player.hand[l].power == player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    kicker = player.hand[k].power;
                  }
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power  && player.hand[i].power == player.hand[j].power     && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    kicker = player.hand[k].power;
                  }
                }
              }
            }
          }
        }
      }
    }        
    console.log("kicker: " + kicker);
    return kicker;      
  }

  function  worstPairPower(player) {
    var worstPairPower = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power  && player.hand[i].power == player.hand[j].power &&     player.hand[j].power > player.hand[l].power && player.hand[j].power > player.hand[m].power && player.hand[l].power == player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    worstPairPower = player.hand[i].power;
                  }
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power  && player.hand[i].power == player.hand[j].power     && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    worstPairPower = player.hand[i].power;
                  }
                }
              }
            }
          }
        }
      }
    }        
    console.log("worstPairPower: " + worstPairPower);
    return worstPairPower;      
  }

  function  bestPairPower(player) {  
    var bestPairPower = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power  && player.hand[i].power == player.hand[j].power &&     player.hand[j].power > player.hand[l].power && player.hand[j].power > player.hand[m].power && player.hand[l].power == player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    bestPairPower = player.hand[g].power;
                  }
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power  && player.hand[i].power == player.hand[j].power     && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    bestPairPower = player.hand[g].power;
                  }
                }
              }
            }
          }
        }
      }
    }        
    console.log("bestPairPower: " + bestPairPower);
    return bestPairPower;      
  }

  function  twoPair(player) {
  var twoPair = 0;   
  for (var m = 0; m < player.hand.length; m++) {
    for (var l = 0; l < player.hand.length; l++) {      
      for (var k = 0; k < player.hand.length; k++) {          
        for (var j = 0; j < player.hand.length; j++) {
          for (var i = 0; i < player.hand.length; i++) {  
            for (var h = 0; h < player.hand.length; h++) {
              for (var g = 0; g < player.hand.length; g++) {    
                if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power  && player.hand[i].power == player.hand[j].power &&     player.hand[j].power > player.hand[l].power && player.hand[j].power > player.hand[m].power && player.hand[l].power == player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                  twoPair = 1;    
                }
                if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power  && player.hand[i].power == player.hand[j].power     && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                  twoPair = 1;    
                }
              }
            }
          }
        }
      }
    }
  }        
  console.log("twoPair: " + twoPair);
  return twoPair;      
}

export { twoPairKicker, worstPairPower, bestPairPower, twoPair };