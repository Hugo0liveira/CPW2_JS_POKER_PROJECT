 
  function elysium(player) {
    var elysium = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {
                  if (player.hand[g].suit == 'Elysium' && player.hand[h].suit == 'Elysium' && player.hand[i].suit == 'Elysium' && player.hand[j].suit == 'Elysium' && player.hand[k].suit == 'Elysium'  && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                    elysium = 1;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("elysium: " + elysium);
    return elysium;
  }
  
  export {elysium};