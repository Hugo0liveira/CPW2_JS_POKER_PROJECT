
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

  // change color of suit according to the type of suit
  function changeColorOfSuit(card, nameHTMLclassOfSuit){    

    if(card.suit == "suicide"){
      const suitHTML = document.querySelector(nameHTMLclassOfSuit);
      suitHTML.style.color = "#e318b7";
    }
    if(card.suit == "domination"){
      const suitHTML = document.querySelector(nameHTMLclassOfSuit);
      suitHTML.style.color = "#eadd00";
    }
    if(card.suit == "contemplation"){
      const suitHTML = document.querySelector(nameHTMLclassOfSuit);
      suitHTML.style.color = "#04c4ff";
    }
    if(card.suit == "revolution"){
      const suitHTML = document.querySelector(nameHTMLclassOfSuit);
      suitHTML.style.color = "#00dd00";
    }
  }

  //   Distribute 2 cards to each player 
 function distributeCards1() {     
  cleanAllCommunityCards();
  cleanHands();
    const [ card1 ] = Variables.deck.splice(0, 1);
    const [ card2 ] = Variables.deck.splice(0, 1);    
    console.log('card1:',card1); console.log('card2:',card2); 
    // to player 1
    Variables.player1.hand = [card1, card2];        

    const playerHandEl = document.querySelector('.player1-hand');
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");        
      cardEl.innerHTML = `
        <div class="author">${card1.author}</div> <BR>
        <div class="suit1">${card1.suit}</div> <BR>        
        <div class="power">${card1.power}</div>        
      `;            
      playerHandEl.appendChild(cardEl);      
      changeColorOfSuit(card1, '.suit1');

    const cardE2 = document.createElement("div");  
      cardE2.classList.add("card");
      cardE2.innerHTML = `
        <div class="author">${card2.author}</div> <BR>
        <div class="suit2">${card2.suit}</div> <BR>
        <div class="power">${card2.power}</div>
      `;
      playerHandEl.appendChild(cardE2);      
      changeColorOfSuit(card2, '.suit2');

      // player 2 cards face down      
      const cardFaceDown1 = document.createElement("div");
      cardFaceDown1.classList.add("card");
      cardFaceDown1.innerHTML = `
        <div class="cardFaceDown"> 
        <img src="https://seeklogo.com/images/P/pearl-jam-do-the-evolution-music-video-logo-BEBC20E26C-seeklogo.com.png"  width="56" height="54" >
        </div>
      `;
      Variables.player2HandHTML.appendChild(cardFaceDown1);     
      const cardFaceDown2 = document.createElement("div");
      cardFaceDown2.classList.add("card");
      cardFaceDown2.innerHTML = `
        <div class="cardFaceDown">
        <img src="https://seeklogo.com/images/P/pearl-jam-do-the-evolution-music-video-logo-BEBC20E26C-seeklogo.com.png"  width="56" height="54" >
        </div>
      `;
      Variables.player2HandHTML.appendChild(cardFaceDown2);     

      return Variables.deck;
    }  


  function distributeCards2() {              
     // clean the player 2 hand
     Variables.player2.hand = [];
     Variables.player2HandHTML.innerHTML = ""; 

    // to player 2
    const [ card3 ] = Variables.deck.splice(0, 1);
    const [ card4 ] = Variables.deck.splice(0, 1);
    console.log('card3:',card3); console.log('card4:',card4);
      Variables.player2.hand = [card3, card4];          
      const cardE3 = document.createElement("div");
      cardE3.classList.add("card");
      cardE3.innerHTML = `
        <div class="author">${card3.author}</div> <BR>
        <div class="suit3">${card3.suit}</div> <BR>
        <div class="power">${card3.power}</div>
      `;
      Variables.player2HandHTML.appendChild(cardE3);
      changeColorOfSuit(card3, '.suit3');

      const cardE4 = document.createElement("div");
      cardE4.classList.add("card");
      cardE4.innerHTML = `
        <div class="author">${card4.author}</div> <BR>
        <div class="suit4">${card4.suit}</div> <BR>
        <div class="power">${card4.power}</div>
      `;
      Variables.player2HandHTML.appendChild(cardE4);
      changeColorOfSuit(card4, '.suit4');

    return Variables.deck;
  }  

// player2 cards face down


  
  // function to put one card at a time on the community cards
  function addCardOnCommunityCards1() {           
      const [card] = Variables.deck.splice(0,1);         
      console.log('card:', card);
      //const cardObject = JSON.parse(JSON.stringify(card));
      Variables.allCommunityCards = [...Variables.allCommunityCards, card];   
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");
      cardEl.innerHTML = `
        <div class="author">${card.author}</div> <BR>
        <div class="suit11">${card.suit}</div> <BR>
        <div class="power">${card.power}</div>
      `;
       Variables.allCommunityCardsHTML.appendChild(cardEl);
       changeColorOfSuit(card, '.suit11');
      return Variables.deck;
  }

  function addCardOnCommunityCards2() {           
    const [card] = Variables.deck.splice(0,1);         
    console.log('card:', card);
    //const cardObject = JSON.parse(JSON.stringify(card));
    Variables.allCommunityCards = [...Variables.allCommunityCards, card];   
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = `
      <div class="author">${card.author}</div> <BR>
      <div class="suit12">${card.suit}</div> <BR>
      <div class="power">${card.power}</div>
    `;
     Variables.allCommunityCardsHTML.appendChild(cardEl);
     changeColorOfSuit(card, '.suit12');
    return Variables.deck;
}

function addCardOnCommunityCards3() {           
  const [card] = Variables.deck.splice(0,1);         
  console.log('card:', card);
  //const cardObject = JSON.parse(JSON.stringify(card));
  Variables.allCommunityCards = [...Variables.allCommunityCards, card];   
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
    <div class="author">${card.author}</div> <BR>
    <div class="suit13">${card.suit}</div> <BR>
    <div class="power">${card.power}</div>
  `;
   Variables.allCommunityCardsHTML.appendChild(cardEl);
   changeColorOfSuit(card, '.suit13');
  return Variables.deck;
}

function addCardOnCommunityCards4() {           
  const [card] = Variables.deck.splice(0,1);         
  console.log('card:', card);
  //const cardObject = JSON.parse(JSON.stringify(card));
  Variables.allCommunityCards = [...Variables.allCommunityCards, card];   
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
    <div class="author">${card.author}</div> <BR>
    <div class="suit14">${card.suit}</div> <BR>
    <div class="power">${card.power}</div>
  `;
   Variables.allCommunityCardsHTML.appendChild(cardEl);
   changeColorOfSuit(card, '.suit14');
  return Variables.deck;
}

function addCardOnCommunityCards5() {           
  const [card] = Variables.deck.splice(0,1);         
  console.log('card:', card);
  //const cardObject = JSON.parse(JSON.stringify(card));
  Variables.allCommunityCards = [...Variables.allCommunityCards, card];   
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
    <div class="author">${card.author}</div> <BR>
    <div class="suit15">${card.suit}</div> <BR>
    <div class="power">${card.power}</div>
  `;
   Variables.allCommunityCardsHTML.appendChild(cardEl);
   changeColorOfSuit(card, '.suit15');
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

  export { shuffleDeck, cleanAllCommunityCards, distributeCards1, distributeCards2, addCardOnCommunityCards1, addCardOnCommunityCards2, addCardOnCommunityCards3, addCardOnCommunityCards4, addCardOnCommunityCards5,  concatenateHand };
