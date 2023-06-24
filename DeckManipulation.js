
import { Variables } from "./Variables.js"

// shuffle the deck. 
function shuffleDeck() {
    // loop over the deck of cards backwards. 
    for (let i = Variables.deck.length - 1; i > 0; i--) {
      // grab a random index before current element.
      const j = Math.floor(Math.random() * (i + 1));
      // swap the current card with the random card.
      [Variables.deck[i], Variables.deck[j]] = [Variables.deck[j], Variables.deck[i]];
    }
    return Variables.deck;
  }
  
  function cleanAllCommunityCards() {
    // clean the community cards element
    Variables.allCommunityCards = "";
  }
  
  //   Distribute 2 cards to each player 
  function distributeCards() {            
    const [card1, card2, card3, card4] = Variables.deck.splice(0, 4);
    Variables.player1.this.hand = [card1, card2];
    Variables.player2.this.hand = [card3, card4];
    return Variables.deck;
  }  
  
  // function to put one card at a time on the community cards
  function addCardOnCommunityCards() {
      const card = Variables.deck.shift();
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");
      cardEl.innerHTML = `
        <div class="author">${card.author}</div> <BR>
        <div class="suit">${card.suit}</div> <BR>
        <div class="power">${card.power}</div>
      `;
      Variables.allCommunityCards.appendChild(cardEl);
      return Variables.deck;
  }
  
   // concatenate the player's hand with the community cards 
   function concatenateHand(){    
    Variables.player.hand = Variables.player.hand.concat(Variables.allCommunityCards);
    Variables.player.hand.sort((a, b) => b.author - a.author);
    console.log("player.hand: ", Variables.player.hand);
    return Variables.player.hand;
  } // end of concatenateHand function

  export { shuffleDeck, cleanAllCommunityCards, distributeCards, addCardOnCommunityCards, concatenateHand };
