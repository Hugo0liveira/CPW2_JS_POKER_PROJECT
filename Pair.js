
function  pairKickerThree(player) {
    var kickerThree = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    kickerThree = player.hand[k].power;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("kickerThree: " + kickerThree);
    return kickerThree;
  }

  function  pairKickerTwo(player) {
    var kickerTwo = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    kickerTwo = player.hand[j].power;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("kickerTwo: " + kickerTwo);
    return kickerTwo;
  }

  function  pairKickerOne(player) {
    var kickerOne = -10;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    kickerOne = player.hand[i].power;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("kickerOne: " + kickerOne);
    return kickerOne;
  }

  function  pairPower(player) {
    var pairPower = -10; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    pairPower = player.hand[g].power;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("pairPower: " + pairPower);
    return pairPower;
  }

  // check for one pair. Each card on the hand is compared with all the others. If there is a pair, the author of the pair is stored in the variable pair1Power or pair2Power. 
  function  pair(player) {
    var pair = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    pair = 1;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("pair: " + pair);
    return pair;
  }

  export { pair, pairPower, pairKickerOne, pairKickerTwo, pairKickerThree};