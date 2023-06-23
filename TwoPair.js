
function  twoPairKicker(player) {
    var twoPair = 0;    
    var bestPairPower = 0;
    var worstPairPower = 0;
    var kicker = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power == player.hand[j].power && player.hand[j].power != player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    twoPair = 1;    
                    bestPairPower = player.hand[g].power;
                    worstPairPower = player.hand[i].power;
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
    var twoPair = 0;    
    var bestPairPower = 0;
    var worstPairPower = 0;
    var kicker = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power == player.hand[j].power && player.hand[j].power != player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    twoPair = 1;    
                    bestPairPower = player.hand[g].power;
                    worstPairPower = player.hand[i].power;
                    kicker = player.hand[k].power;
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
    var twoPair = 0;    
    var bestPairPower = 0;
    var worstPairPower = 0;
    var kicker = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power == player.hand[j].power && player.hand[j].power != player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    twoPair = 1;    
                    bestPairPower = player.hand[g].power;
                    worstPairPower = player.hand[i].power;
                    kicker = player.hand[k].power;
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
  var bestPairPower = 0;
  var worstPairPower = 0;
  var kicker = 0;
  for (var m = 0; m < player.hand.length; m++) {
    for (var l = 0; l < player.hand.length; l++) {      
      for (var k = 0; k < player.hand.length; k++) {          
        for (var j = 0; j < player.hand.length; j++) {
          for (var i = 0; i < player.hand.length; i++) {  
            for (var h = 0; h < player.hand.length; h++) {
              for (var g = 0; g < player.hand.length; g++) {    
                if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power == player.hand[j].power && player.hand[j].power != player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                  twoPair = 1;    
                  bestPairPower = player.hand[g].power;
                  worstPairPower = player.hand[i].power;
                  kicker = player.hand[k].power;
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