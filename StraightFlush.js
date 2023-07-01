
function straightflushPower(player) {
    // check for straight flush. If the player's hand has 5 cards of the same suit and each power of the cards is consecutive, then the player has a straight flush.
    var straightflushPower = -10; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              // five cards of the same suit and consecutive power
              if (player.hand[i].suit == player.hand[j].suit && player.hand[i].suit == player.hand[k].suit && player.hand[i].suit == player.hand[l].suit && player.hand[i].suit == player.hand[m].suit && player.hand[i].power == player.hand[j].power - 1 && player.hand[i].power == player.hand[k].power - 2 && player.hand[i].power == player.hand[l].power - 3 && player.hand[i].power == player.hand[m].power - 4 && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m ) {
                straightflushPower = player.hand[i].power;
              }
            }
          }
        }
      }
    }
    console.log("straightflushPower: " + straightflushPower);
    return straightflushPower;        
  }   
  
  
  function straightflush(player) {
    // check for straight flush. If the player's hand has 5 cards of the same suit and each power of the cards is consecutive, then the player has a straight flush.
    var straightflush = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              // five cards of the same suit and consecutive power
              if (player.hand[i].suit == player.hand[j].suit && player.hand[i].suit == player.hand[k].suit && player.hand[i].suit == player.hand[l].suit && player.hand[i].suit == player.hand[m].suit && player.hand[i].power == player.hand[j].power - 1 && player.hand[i].power == player.hand[k].power - 2 && player.hand[i].power == player.hand[l].power - 3 && player.hand[i].power == player.hand[m].power - 4 && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m ) {
                straightflush = 1;
              }
            }
          }
        }
      }
    }
    console.log("straightflush: " + straightflush);    
    return straightflush;
  }
  
  export {straightflushPower, straightflush};