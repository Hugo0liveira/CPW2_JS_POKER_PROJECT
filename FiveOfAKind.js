
  function fiveOfaKindPower(player) {
       // check for four of a kind. If the player's hand has 4 cards of the same power, then the player has four of a kind.
       // && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power
       var fiveOfaKindPower = -10;
       for (var m = 0; m < player.hand.length; m++) {
         for (var l = 0; l < player.hand.length; l++) {      
           for (var k = 0; k < player.hand.length; k++) {          
             for (var j = 0; j < player.hand.length; j++) {
               for (var i = 0; i < player.hand.length; i++) {  
                 for (var h = 0; h < player.hand.length; h++) {
                   for (var g = 0; g < player.hand.length; g++) {
                     if (player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[g].power == player.hand[j].power && player.hand[g].power == player.hand[k].power  && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                        fiveOfaKindPower = player.hand[g].power;
                     }
                   }
                 }
               }
             }
           }
         }
       }
       console.log("fiveOfaKindPower: " + fiveOfaKindPower);
       return fiveOfaKindPower;
  }
  
  function fiveOfaKind(player) {
    // check for four of a kind. If the player's hand has 4 cards of the same power, then the player has four of a kind.
    // trecho que dava erro && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power
    var fiveOfaKind = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {
                  if (player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[g].power == player.hand[j].power && player.hand[g].power == player.hand[k].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                    fiveOfaKind = 1;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("fiveOfaKind: " + fiveOfaKind);
    return fiveOfaKind;
  }
  
  export {fiveOfaKindPower, fiveOfaKind};