
import { Player, deck, originalDeck, allCommunityCards, game, conditionsPreflop, conditionsFlop, conditionsTurn, conditionsRiver, preflop, flop, turn, river, fold, call, comparehands, conditionsComparehands, check, raise, risk, years, gameOver, initialMessage } from "./Variables.js"

// shuffle the deck. 
function shuffleDeck(deck) {
    // loop over the deck of cards backwards. 
    for (let i = deck.length - 1; i > 0; i--) {
      // grab a random index before current element.
      const j = Math.floor(Math.random() * (i + 1));
      // swap the current card with the random card.
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }
  
  function cleanAllCommunityCards() {
    // clean the community cards element
    allCommunityCards = "";
  }
  
  //   Distribute 2 cards to each player 
  function distributeCards(deck, player1, player2) {            
    const [card1, card2, card3, card4] = deck.splice(0, 4);
    player1.this.hand = [card1, card2];
    player2.this.hand = [card3, card4];
    return deck;
  }
  
  
  // function to put one card at a time on the community cards
  function addCardOnCommunityCards(deck) {
      const card = deck.shift();
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");
      cardEl.innerHTML = `
        <div class="author">${card.author}</div> <BR>
        <div class="suit">${card.suit}</div> <BR>
        <div class="power">${card.power}</div>
      `;
      allCommunityCards.appendChild(cardEl);
      return deck;
  }
  
   // concatenate the player's hand with the community cards 
   function concatenateHand(player, allCommunityCards){    
    player.hand = player.hand.concat(allCommunityCards);
    player.hand.sort((a, b) => b.author - a.author);
    console.log("player.hand: ", player.hand);
    return player.hand;
  } // end of concatenateHand function

  export { shuffleDeck, cleanAllCommunityCards, distributeCards, addCardOnCommunityCards, concatenateHand };
