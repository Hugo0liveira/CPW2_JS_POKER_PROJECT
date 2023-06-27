
function threeOfAKindKickerTwo(player) {
    var kickerTwo = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {      
                  // check for three of a kind
                  if ( player.hand[g].power == player.hand[h].power && player.hand[h].power == player.hand[i].power && player.hand[i].power != player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    // detemine the kickerTwo (the second highest card on the hand that is not part of the three of a kind)
                    kickerTwo = player.hand[k].power;
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
  
   // check for three of a kind
   function  threeOfAKindKickerOne(player) {
    var kickerOne = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {      
                  // check for three of a kind
                  if (player.hand[g].power == player.hand[h].power && player.hand[h].power == player.hand[i].power && player.hand[i].power != player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    // determine the kickerOne (the highest card on the hand that is not part of the three of a kind)
                    kickerOne = player.hand[j].power;
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
  
    // check for three of a kind
    function  threeOfAKindPower(player) {      
      var threeOfAKindPower = 0;
      for (var m = 0; m < player.hand.length; m++) {
        for (var l = 0; l < player.hand.length; l++) {      
          for (var k = 0; k < player.hand.length; k++) {          
            for (var j = 0; j < player.hand.length; j++) {
              for (var i = 0; i < player.hand.length; i++) {  
                for (var h = 0; h < player.hand.length; h++) {
                  for (var g = 0; g < player.hand.length; g++) {      
                    // check for three of a kind
                    if ( player.hand[g].power == player.hand[h].power && player.hand[h].power == player.hand[i].power && player.hand[i].power != player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      // determine the kickerOne (the highest card on the hand that is not part of the three of a kind)
                      threeOfAKindPower = player.hand[g].power;
                    }
                  }
                }
              }
            }
          }
        }
      }
      console.log("threeOfAKindPower: " + threeOfAKindPower);      
      return threeOfAKindPower;
    }
  
    // check for three of a kind
    function  threeOfAKind(player) {
      var threeOfAKind = 0;
      for (var m = 0; m < player.hand.length; m++) {
        for (var l = 0; l < player.hand.length; l++) {      
          for (var k = 0; k < player.hand.length; k++) {          
            for (var j = 0; j < player.hand.length; j++) {
              for (var i = 0; i < player.hand.length; i++) {  
                for (var h = 0; h < player.hand.length; h++) {
                  for (var g = 0; g < player.hand.length; g++) {      
                    // check for three of a kind
                    if ( player.hand[g].power == player.hand[h].power && player.hand[h].power == player.hand[i].power && player.hand[i].power != player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      // determine the kickerOne (the highest card on the hand that is not part of the three of a kind)
                      threeOfAKind = 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
      console.log("threeOfAKind: " + threeOfAKind);      
      return threeOfAKind;
    }
    
    export {threeOfAKind, threeOfAKindPower, threeOfAKindKickerOne, threeOfAKindKickerTwo};