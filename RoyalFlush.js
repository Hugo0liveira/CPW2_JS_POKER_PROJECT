import { Variables } from "./Variables.js"

function royalflush(player) {
    // check for royal flush. If the player's hand has the cards of power 14, 13, 12, 11 and 10 of the same suit in any order on the array hand, then the player has a royal flush.
    var royalflush = 0; 
    console.log("player.hand: ", player.hand);
    
    for (var i = 0; i < player.hand.length; i++) {
      if (player.hand[i].power == 14){
        for (var j = 0; j < player.hand.length; j++) {
          if (player.hand[j].power == 13) {
            for (var k = 0; k < player.hand.length; k++) {
              if (player.hand[k].power == 12) {
                for (var l = 0; l < player.hand.length; l++) {
                  if (player.hand[l].power == 11) {
                    for (var m = 0; m < player.hand.length; m++) {
                      if (player.hand[m].power == 10 && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m ) {
                        royalflush += 1;
                      }
                    }
                  }
                }
              }
            }
          }
        }          
      }
    }    
    console.log("royalflush: " + royalflush);
    return royalflush;
  }
  
  export {royalflush};