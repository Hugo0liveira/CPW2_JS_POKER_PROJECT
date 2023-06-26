
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
    Variables.allCommunityCards = [];
    Variables.allCommunityCardsHTML.innerHTML = "";
  }

  function cleanHands() {
    // clean the player hands element
    Variables.player1.hand = [];
    Variables.player2.hand = [];
    Variables.player1HandHTML.innerHTML = "";
    Variables.player2HandHTML.innerHTML = "";   
  }
  
  //   Distribute 2 cards to each player 
 function distributeCards() {     
  cleanAllCommunityCards();
  cleanHands();
    const [ card1 ] = Variables.deck.splice(0, 1);
    const [ card2 ] = Variables.deck.splice(0, 1);
    const [ card3 ] = Variables.deck.splice(0, 1);
    const [ card4 ] = Variables.deck.splice(0, 1);
    console.log('card1:',card1); console.log('card2:',card2); console.log('card3:',card3); console.log('card4:',card4);
    // to player 1
    Variables.player1.hand = [card1, card2];    
    const playerHandEl = document.querySelector('.player1-hand');
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
      cardEl.innerHTML = `
        <div class="author">${card1.author}</div> <BR>
        <div class="suit">${card1.suit}</div> <BR>
        <div class="power">${card1.power}</div>
      `;
      playerHandEl.appendChild(cardEl);
      const cardE2 = document.createElement("div");  
      cardE2.classList.add("card");
      cardE2.innerHTML = `
        <div class="author">${card2.author}</div> <BR>
        <div class="suit">${card2.suit}</div> <BR>
        <div class="power">${card2.power}</div>
      `;
      playerHandEl.appendChild(cardE2);      
    // to player 2
      Variables.player2.hand = [card3, card4];    
      const playerHandE2 = document.querySelector('.player2-hand');
      const cardE3 = document.createElement("div");
      cardE3.classList.add("card");
      cardE3.innerHTML = `
        <div class="author">${card3.author}</div> <BR>
        <div class="suit">${card3.suit}</div> <BR>
        <div class="power">${card3.power}</div>
      `;
      playerHandE2.appendChild(cardE3);
      const cardE4 = document.createElement("div");
      cardE4.classList.add("card");
      cardE4.innerHTML = `
        <div class="author">${card4.author}</div> <BR>
        <div class="suit">${card4.suit}</div> <BR>
        <div class="power">${card4.power}</div>
      `;
      playerHandE2.appendChild(cardE4);
    return Variables.deck;
  }  
  
  // function to put one card at a time on the community cards
  function addCardOnCommunityCards() {     
      const [card] = Variables.deck.splice(0,1);         
      console.log('card:', card);
      //const cardObject = JSON.parse(JSON.stringify(card));
      Variables.allCommunityCards = [...Variables.allCommunityCards, card];   
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");
      cardEl.innerHTML = `
        <div class="author">${card.author}</div> <BR>
        <div class="suit">${card.suit}</div> <BR>
        <div class="power">${card.power}</div>
      `;
       Variables.allCommunityCardsHTML.appendChild(cardEl);
      return Variables.deck;
  }
  
   // concatenate the player's hand with the community cards 
   function concatenateHand(player){    
    //console.log("Variables.allCommunityCards: ", Variables.allCommunityCards );
    player.hand = player.hand.concat(Variables.allCommunityCards );
    // sort the player's hand by power
    player.hand.sort((a, b) => b.power - a.power);
    //console.log("player.hand: ", player.hand);
    //console.log("player.hand.length: ", player.hand.length);

    return player.hand;
  } // end of concatenateHand function

  export { shuffleDeck, cleanAllCommunityCards, distributeCards, addCardOnCommunityCards, concatenateHand };
