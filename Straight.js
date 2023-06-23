
function  straightPower(player) {
    var straight = 0; 
    var straightPower = 0; 
        for (var m = 0; m < player.hand.length; m++) {
          for (var l = 0; l < player.hand.length; l++) {      
            for (var k = 0; k < player.hand.length; k++) {          
              for (var j = 0; j < player.hand.length; j++) {
                for (var i = 0; i < player.hand.length; i++) { 
                  if (player.hand[i].power == player.hand[j].power + 1 && player.hand[j].power == player.hand[k].power + 1 && player.hand[k].power == player.hand[l].power + 1 && player.hand[l].power == player.hand[m].power + 1 && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    straight = 1;
                    straightPower = player.hand[m].power;
                  }
                }
              }
            }
          }
        }     
        console.log("straightPower: " + straightPower);
        return straightPower;
}


  // check for straight 
  function  straight(player) {
    var straight = 0; 
        var straightPower = 0; 
        for (var m = 0; m < player.hand.length; m++) {
          for (var l = 0; l < player.hand.length; l++) {      
            for (var k = 0; k < player.hand.length; k++) {          
              for (var j = 0; j < player.hand.length; j++) {
                for (var i = 0; i < player.hand.length; i++) { 
                  if (player.hand[i].power == player.hand[j].power + 1 && player.hand[j].power == player.hand[k].power + 1 && player.hand[k].power == player.hand[l].power + 1 && player.hand[l].power == player.hand[m].power + 1 && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m ) {
                    straight = 1;
                    straightPower = player.hand[m].power;
                  }
                }
              }
            }
          }
        }
        console.log("straight: " + straight);
        return straight;
}

export {straight, straightPower};