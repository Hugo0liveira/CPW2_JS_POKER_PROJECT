/* 
IFRS CAMPUS Porto Alegre
Sistemas para Internet
Construção de Páginas WEB 2
Professor: Rodrigo Prestes Machado
Aluno: Hugo Romão Lisboa Oliveira
Período: 2023/1*/

      /* Trabalho: Programar um jogo em JAVASCRIPT:

                                 PHILOSOPHIC_POKER 
      */ 

// Cria um array com todas as cartas do baralho
const originalDeck = [
  { power: 1, author: 'Karl Marx', suit: 'suicide' }, { power: 1, author: 'Karl Marx', suit: 'contemplation' }, { power: 1, author: 'Karl Marx', suit: 'domination' }, { power: 1, author: 'Karl Marx', suit: 'revolution' },
  { power: 2, author: 'Nietzsche', suit: 'suicide' }, { power: 2, author: 'Nietzsche', suit: 'contemplation' }, { power: 2, author: 'Nietzsche', suit: 'domination' }, { power: 2, author: 'Nietzsche', suit: 'revolution' },
  { power: 3, author: 'Peter Berger', suit: 'suicide' }, { power: 3, author: 'Peter Berger', suit: 'contemplation' }, { power: 3, author: 'Peter Berger', suit: 'domination' }, { power: 3, author: 'Peter Berger', suit: 'revolution' },
  { power: 4, author: 'Félix Guattari', suit: 'suicide' }, { power: 4, author: 'Félix Guattari', suit: 'contemplation' }, { power: 4, author: 'Félix Guattari', suit: 'domination' }, { power: 4, author: 'Félix Guattari', suit: 'revolution' },
  { power: 5, author: 'Guy Debord', suit: 'suicide' }, { power: 5, author: 'Guy Debord', suit: 'contemplation' }, { power: 5, author: 'Guy Debord', suit: 'domination' }, { power: 5, author: 'Guy Debord', suit: 'revolution' },
  { power: 6, author: 'Slavoj Zizek', suit: 'suicide' }, { power: 6, author: 'Slavoj Zizek', suit: 'contemplation' }, { power: 6, author: 'Slavoj Zizek', suit: 'domination' }, { power: 6, author: 'Slavoj Zizek', suit: 'revolution' },
  { power: 7, author: 'Noam Chomsky', suit: 'suicide' }, { power: 7, author: 'Noam Chomsky', suit: 'contemplation' }, { power: 7, author: 'Noam Chomsky', suit: 'domination' }, { power: 7, author: 'Noam Chomsky', suit: 'revolution' },
  { power: 8, author: 'Jean Baudrillard', suit: 'suicide' }, { power: 8, author: 'Jean Baudrillard', suit: 'contemplation' }, { power: 8, author: 'Jean Baudrillard', suit: 'domination' }, { power: 8, author: 'Jean Baudrillard', suit: 'revolution' },
  { power: 9, author: 'Erving Goffman', suit: 'suicide' }, { power: 9, author: 'Erving Goffman', suit: 'contemplation' }, { power: 9, author: 'Erving Goffman', suit: 'domination' }, { power: 9, author: 'Erving Goffman', suit: 'revolution' },
  { power: 10, author: 'Yuval Harari', suit: 'suicide' }, { power: 10, author: 'Yuval Harari', suit: 'contemplation' }, { power: 10, author: 'Yuval Harari', suit: 'domination' }, { power: 10, author: 'Yuval Harari', suit: 'revolution' },
  { power: 11, author: 'Thomas Metzinger', suit: 'suicide' }, { power: 11, author: 'Thomas Metzinger', suit: 'contemplation' }, { power: 11, author: 'Thomas Metzinger', suit: 'domination' }, { power: 11, author: 'Thomas Metzinger', suit: 'revolution' },
  { power: 12, author: 'Patricia Churchland', suit: 'suicide' }, { power: 12, author: 'Patricia Churchland', suit: 'suicide' }, { power: 12, author: 'Patricia Churchland', suit: 'contemplation' }, { power: 12, author: 'Patricia Churchland', suit: 'domination' },
  { power: 13, author: 'Robert Sapolsky', suit: 'suicide' }, { power: 13, author: 'Robert Sapolsky', suit: 'contemplation' }, { power: 13, author: 'Robert Sapolsky', suit: 'domination' }, { power: 13, author: 'Robert Sapolsky', suit: 'revolution' },
  { power: 14, author: 'Thomas Ligotti', suit: 'suicide' }, { power: 14, author: 'Thomas Ligotti', suit: 'contemplation' }, { power: 14, author: 'Thomas Ligotti', suit: 'domination' }, { power: 14, author: 'Thomas Ligotti', suit: 'revolution' }
];

//  VARIABLES

// array to store all commutity cards
var allCommunityCards = document.querySelectorAll(".community-cards");
var game = 0; var conditionsPreflop=0; var conditionsFlop=0; var conditionsTurn=0; var conditionsRiver=0;
var preflop = 0; var flop=0; var turn=0; var river=0; var fold = 0; var call = 0; var comparehands=0; conditionsComparehands=0;
var check = 0; var raise = 0; var risk = 67100000; var years = 0; var gameOver = "ALL DEAD";
var infoYears = document.querySelector(".yearsSurviving");
infoYears.innerHTML = years; 
var infoRisk = document.querySelector(".riskauthor");
infoRisk.innerHTML = risk;
var deck = originalDeck; 

class Player {
  constructor(name, chips) {
    this.name = name;
    this.chips = chips;
    this.hand = [];
  }
  getHand() {
    return this.hand;
  }
}
const player2 = new Player("DEATH", 107000000000); const player1 = new Player("Humanity", 8000000000);

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

function cleancommunityCardsEl() {
  // clean the community cards element
  const communityCardsElEl = document.querySelector(".community-cards");
  communityCardsElEl.innerHTML = "";
}

//   Distribute 2 cards to each player 
function distributeCards(deck, player1, player2) {        
  
// Take the first 4 cards from the deck
const [card1, card2, card3, card4] = deck.splice(0, 4);

//  Distribute 2 cards to each player
  player1.hand = [card1, card2];
  player2.hand = [card3, card4];

 // update DOM elements with the cards of each player
 function updatePlayerHand(player, playerSectionClass) {
  const playerHandEl = document.querySelector(`.${playerSectionClass} .player-hand`);
  const cards = player.hand.map(card => `<div class="card">${card.author} - ${card.suit}</div>`);
  playerHandEl.innerHTML = cards.join("");
}
updatePlayerHand(player1, "player-1-section");
updatePlayerHand(player2, "player-2-section");

  return deck;
}


// function to put one card at a time on the community cards
function addCardOnCommunityCards(deck) {
  const communityCardsEl = document.querySelector(".community-cards");
  const card = deck.shift();
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
    <div class="author">${card.author}</div> <BR>
    <div class="suit">${card.suit}</div> <BR>
    <div class="power">${card.power}</div>
  `;
  communityCardsEl.appendChild(cardEl);  
  return deck;
}



// Buttons functions 
    function functionFold(event) {
      event.stopPropagation(); // Stop event propagation
      if(conditionsPreflop==1){
      fold = 1; checkConditionsPreFlop(); 
      } else if(conditionsFlop==1){
      fold = 2; checkConditionsFlop(); 
    } else if(conditionsTurn==1){
      fold = 3; checkConditionsTurn(); 
    } else if(conditionsRiver==1){
      fold = 4; checkConditionsRiver(); 
    }
  }

    function functionCall(event) {
      event.stopPropagation(); // Stop event propagation     
      if(conditionsPreflop==1){
        call = 1; checkConditionsPreFlop(); 
        } else if(conditionsFlop==1){
        call = 2; checkConditionsFlop(); 
      } else if(conditionsTurn==1){
        call = 3; checkConditionsTurn(); 
      } else if(conditionsRiver==1){
        call = 4; checkConditionsRiver(); 
      }
    }

    function functionCheck(event) {
      event.stopPropagation(); // Stop event propagation
      if(conditionsPreflop==1){
        check = 1; checkConditionsPreFlop(); 
        } else if(conditionsFlop==1){
        check = 2; checkConditionsFlop(); 
      } else if(conditionsTurn==1){
        check = 3; checkConditionsTurn(); 
      } else if(conditionsRiver==1){
        check = 4; checkConditionsRiver(); 
      }
    }

    function functionRaise(event) {             //ERRO! raise acionando phaseTurn()
      event.stopPropagation(); // Stop event propagation
      if(conditionsPreflop==1){
        raise=1; checkConditionsPreFlop();
      } else if(conditionsFlop==1){ 
        raise = 2; checkConditionsFlop(); 
      } else if(conditionsTurn==1){ 
        raise = 3; checkConditionsTurn(); 
      } else if(conditionsRiver==1){ 
        raise = 4; checkConditionsRiver(); 
      } 
    }

      const foldButton = document.querySelector(".btn-fold");
      const callButton = document.querySelector(".btn-call");
      const checkButton = document.querySelector(".btn-check");
      const raiseButton = document.querySelector(".btn-raise");
      
    //CHECK CONDITIONS
function checkConditionsPreFlop(player1, player2) {
  if(conditionsPreflop==1){
      if (fold == 1) {
        window.alert("FOLD on Phase PRE-FLOP! ");     
        player1.chips -= risk; player2.chips += risk;  infoRisk.innerHTML = risk;
        preflop = 1; flop = 0; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhasePreFlop(player1, player2);
      }  
      if (call == 1) {        
        window.alert("CALL on Phase PRE-FLOP! ");         
        preflop = 0; flop = 1; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhaseFlop(player1, player2); 
      }  
      if (check == 1) {
        check == 0;
        window.alert("Check button is not used on preflop phase!");          
      }
      if (raise == 1) {
        window.alert("RAISE on Phase PRE-FLOP! ");     
        if(player1.chips >= risk*2){
        risk = risk + risk; 
        infoRisk.innerHTML = risk;        
        raise = 0; flop = 1; turn = 0; river = 0; conditionsPreflop=0;
         console.log("RAISE on Phase PRE-FLOP");                         
         PhaseFlop(player1, player2);
        } else {
          window.alert("Not enough lives!");     
        }
      }
      console.log("CheckConditionsPreFlop");                         
    }                       
}        

function checkConditionsFlop(player1, player2) {  
  
  if(conditionsFlop==1){
      if (fold == 2) {
        window.alert("FOLD on Phase FLOP! ");     
        player1.chips -= risk; player2.chips += risk;  infoRisk.innerHTML = risk;
        preflop = 1; flop = 0; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhasePreFlop(player1, player2);
      }  
      if (call == 2) {          
        call == 0;
        window.alert("Call button is NOT used on Phase FLOP! ");             
      }    
      if (check == 2) {
        window.alert("CHECK on Phase FLOP! ");     
        preflop=0; flop =0; turn = 1; river=0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhaseTurn(player1, player2);
      }    
      if (raise == 2) {
        window.alert("RAISE on Phase FLOP! ");     
        if(player1.chips >= risk*2){
          risk = risk + risk;
          infoRisk.innerHTML = risk;
          preflop = 0; flop = 0; conditionsFlop=0; river = 0; turn = 1;
          console.log("RAISE on Phase FLOP");                                 
          PhaseTurn(player1, player2);
          } else{
            window.alert("Not enough lives!");     
          }
      }
      console.log("CheckConditionsFlop");                         
    }                           
}        

function checkConditionsTurn(player1, player2) {  
  if(conditionsTurn==1){
      if (fold == 3) {
        window.alert("FOLD on Phase TURN! ");     
        player1.chips -= risk; player2.chips += risk;  infoRisk.innerHTML = risk;
        preflop = 1; flop = 0; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhasePreFlop(player1, player2);
      }  
      if (call == 3) {          
        call == 0;
        window.alert("Call button is NOT used on Phase TURN! ");             
      }    
      if (check == 3) {
        window.alert("CHECK on Phase TURN! ");     
        preflop=0; flop =0; turn=0; river=1; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
        PhaseRiver(player1, player2);
      }    
      if (raise == 3) {  
        window.alert("RAISE on Phase TURN! ");         
        if(player1.chips >= risk*2){
          risk = risk + risk;
          infoRisk.innerHTML = risk;
          preflop = 0;  flop = 0; turn = 0; conditionsTurn=0; river = 1; 
          console.log("RAISE on Phase TURN! ");         
        PhaseRiver(player1, player2);        
          } else{
            window.alert("Not enough lives!");     
          }                 
      }
      console.log("CheckConditionsTurn");                         
    }      
}        

function checkConditionsRiver(player1, player2, allCommunityCards) {  
  if(conditionsRiver==1){
      if (fold == 4) {
        window.alert("FOLD on Phase RIVER! ");     
        player1.chips = player1.chips - (risk*2); player2.chips += risk;  infoRisk.innerHTML = risk;
        preflop = 1; flop = 0; turn = 0; river = 0; comparehands=0; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;    
        PhasePreFlop();
      }  
      if (call == 4) {          
        call == 0;
        window.alert("Call button is NOT used on Phase RIVER! ");             
      }    
      if (check == 4) {
        window.alert("CHECK on Phase RIVER! ");     
        preflop=0; flop =0; turn =0; river=0; comparehands=1; 
          conditionsFlop=0; conditionsRiver=0; conditionsTurn =0;
          compareTheHands(player1, player2, allCommunityCards);
      }    
      if (raise == 4) {        
        window.alert("RAISE on Phase RIVER! ");     
        if(player1.chips >= risk*2){
          risk = risk + risk;
          infoRisk.innerHTML = risk;
          preflop = 0;  flop = 0; turn = 0; conditionsRiver=0; comparehands=1;
          // comparar cartas e decidir vencedor de rodada          
          compareTheHands(player1, player2, allCommunityCards);
          console.log("RAISE on Phase RIVER! ");     
          } else{
            window.alert("Not enough lives!");     
          }       
      }
      console.log("CheckConditionsRIVER");
    } 
  }                          

// PHASES OF THE GAME
  function PhasePreFlop(originalDeck, deck, player1, player2){
    deck = originalDeck;
    deck = shuffleDeck(deck);

    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    cleancommunityCardsEl();
    if(preflop==1){
      conditionsPreflop=1; conditionsFlop=0; conditionsTurn=0; conditionsRiver=0; 
      fold = 0; check = 0; call = 0;  raise = 0;      
      deck = distributeCards(deck, player1, player2);             
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhasePreflop");      
    }
  }

  function PhaseFlop(player1, deck){
    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }

    if (flop == 1) { //flop
      conditionsPreflop=0; conditionsFlop=1; conditionsTurn=0; conditionsRiver=0;    
      fold = 0; check = 0; call = 0;  raise = 0;            
      // PUTS 3 COMMUNITY CARDS
      var communityCardsElEl = document.querySelector(".community-cards");
      var randomIndex; var dealtCard; var cardEl;
      // remove previous community cards  
      cleancommunityCardsEl();
      addCardOnCommunityCards(deck); addCardOnCommunityCards(deck); addCardOnCommunityCards(deck);

        foldButton.addEventListener("click", functionFold);
        callButton.addEventListener("click", functionCall);
        checkButton.addEventListener("click", functionCheck);
        raiseButton.addEventListener("click", functionRaise);
        console.log("PhaseFLop");
   }//flop     
  }
  function PhaseTurn(player1, deck){
    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    if (turn == 1) { //turn
      conditionsPreflop=0; conditionsFlop=0; conditionsTurn=1;conditionsRiver=0;
      fold = 0; check = 0; call = 0;  raise = 0;
      addCardOnCommunityCards(deck) 
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);     
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseTurn");
    }
  }
  function PhaseRiver(player1, deck){
    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    }
    if (river == 1) { //river
      conditionsPreflop=0; conditionsFlop=0; conditionsTurn=0; conditionsRiver=1;
      fold = 0; check = 0; call = 0;  raise = 0;
      addCardOnCommunityCards(deck) 
      foldButton.addEventListener("click", functionFold);
      callButton.addEventListener("click", functionCall);
      checkButton.addEventListener("click", functionCheck);
      raiseButton.addEventListener("click", functionRaise);
      console.log("PhaseRiver");
    }//river 
  }

  function compareTheHands(player1, player2, allCommunityCards){
    if (comparehands == 1) { //river
      preflop=1;
      fold = 0; check = 0; call = 0;  raise = 0;
      conditionsPreflop=1; conditionsFlop=0; conditionsTurn=0; conditionsRiver=0; 


    console.log("compareTheHands()");  
    window.alert("COMPARING HANDS... ");


    // take all the cards on the community cards and puts in an array
    var allCommunityCards = document.querySelector(".community-cards");


    let roundWinner = determineWinnersHand(player1, player2, allCommunityCards);         
    if(roundWinner == 0){
      window.alert("DRAW!");  
      console.log("DRAW!"); 
    } else if(roundWinner == 1){
      window.alert("PLAYER 1 won the round.");
      console.log("PLAYER 1 won the round.");
      player1.chips += risk;
      player2.chips -= risk;
    } else if(roundWinner == 2){
      window.alert("PLAYER 2 won the round.");
      console.log("PLAYER 2 won the round.");
      player2.chips += risk;
      player1.chips -= risk;
    } else {
      window.alert("ERROR: roundWinner");
      console.log("ERROR: roundWinner");
    }    
    if (player1.chips < 0) {        
      window.alert("ALL DEAD!");
      window.alert("Cohle: \n“Time is a flat circle. \nEverything we have done\n or will do\n we will do\n over and over and over again—forever.” ");
      resetGame();
    } else{        
        years = parseInt(infoYears.innerHTML); 
        years += 1;
        infoYears.innerHTML = years.toString();        
        PhasePreFlop();  
      }
    }
  }

  function resetGame() {
    // Reset variables    
    game = 0; conditionsPreflop = 0;  conditionsFlop = 0;  conditionsTurn = 0;  conditionsRiver = 0;
    preflop = 0;  flop = 0;  turn = 0;  river = 0;  comparehands = 0;
    fold = 0; call = 0; check = 0;  raise = 0;    
    risk = 67100000;
    years = 0;
    player.chips = 8000000000; player2.chips = 107000000000;   
    // Reset DOM elements
    infoYears.innerHTML = years;
    infoRisk.innerHTML = risk;  
    main();
  }
  
main(originalDeck, deck, player1, player2);

function main(originalDeck, deck, player1, player2){
  /*window.alert(" “Behind every man now alive stand thirty ghosts, for that is the ratio by which the dead outnumber the living. Since the dawn of time, roughly a hundred billion human beings have walked the planet Earth.\n\n Now this is an interesting number, for by a curious coincidence there are approximately a hundred billion stars in our local universe, the Milky Way. So for every man who has ever lived, in this Universe there shines a star.\n\n But every one of those stars is a sun, often far more brilliant and glorious than the small, nearby star we call the Sun. And many--perhaps most--of those alien suns have planets circling them. So almost certainly there is enough land in the sky to give every member of the human species, back to the first ape-man, his own private, world-sized heaven--or hell.\n\n How many of those potential heavens and hells are now inhabited, and by what manner of creatures, we have no way of guessing; the very nearest is a million times farther away than Mars or Venus, those still remote goals of the next generation. But the barriers of distance are crumbling; one day we shall meet our equals, or our masters, among the stars.\n\n ");
  window.alert("Men have been slow to face this prospect; \nsome still hope that it may never become reality. Increasing numbers, however are asking; 'Why have such meetings not occurred already, since we ourselves are about to venture into space?'\n\n  Why not, indeed? Here is one possible answer to that very reasonable question. But please remember: this is only a work of fiction.\n\n The truth, as always, will be far stranger.”\n\n ― Arthur C. Clarke, 2001: A Space Odyssey "); */
  game = 1;
  while (game == 1) {  
    preflop = 1;

    PhasePreFlop(originalDeck, deck, player1, player2);    
    }
    
  } //game 

  // concatenate the player's hand with the community cards 
  function concatenateHand(player, allCommunityCards){    
    // take all the cards on the community cards and puts in an array
    allCommunityCards = document.querySelector(".community-cards");
    allCommunityCards = allCommunityCards.querySelectorAll(".card");
    // concatenate the player's hand with the community cards    
    player.hand = player.hand.concat(allCommunityCards);   
    // sort the cards by author (higher to lower) 
    player.hand.sort(function(a, b){return b.author - a.author});   
    console.log("player.hand: " + player.hand);
    return player.hand;
  } // end of concatenateHand function
   
  // returns 0 if is a tie. returns 1 if player1 wins. returns 2 if player2 wins.
  function determineWinnersHand(player1, player2, allCommunityCards) {
    player1 = concatenateHand1(player1, allCommunityCards);
    player2 = concatenateHand2(player2, allCommunityCards);
      // determine winner

      let royalflush1 = royalflush(player1);
      let royalflush2 = royalflush(player2);
      if(royalflush1 == 1 && royalflush2 == 1) {      
          console.log("It's a tie!");  
          window.alert( "It's a tie!");   
          return 0;    
      } else if (royalflush1 == 1 && royalflush2 == 0) {
        console.log("Player 1 wins with a royal flush!");
        window.alert("Player 1 wins with a royal flush!");
        return 1;
      } else if (royalflush1 == 0 && royalflush2 == 1) {
        console.log("Player 2 wins with a royal flush!");
        window.alert("Player 2 wins with a royal flush!");
        return 2;
      } else if (royalflush1 == 0 && royalflush2 == 0) {
      
        let straightflush1 = straightflush(player1);
        let straightflush2 = straightflush(player2);
        let straightflush1Power = straightflushPower(player1);
        let straightflush2Power = straightflushPower(player2);

          if(straightflush1 == 1 && straightflush2 == 1) {      
            if (straightflush1Power > straightflush2Power) {
              console.log("Player 1 wins with a straight flush!");
              window.alert("Player 1 wins with a straight flush!");
              return 1;
            } else if (straightflush2Power > straightflush1Power) {
              console.log("Player 2 wins with a straight flush!");
              window.alert("Player 2 wins with a straight flush!");
              return 2;
            } else {
              console.log("It's a tie!");
              window.alert("It's a tie!");
              return 0;
            }
        } else if(straightflush1 == 1 && straightflush2 == 0) {
          console.log("Player 1 wins with a straight flush!");
          window.alert("Player 1 wins with a straight flush!");
          return 1;
        } else if(straightflush1 == 0 && straightflush2 == 1) {
          console.log("Player 2 wins with a straight flush!");
          window.alert("Player 2 wins with a straight flush!");
          return 2;
        } else if(straightflush1 == 0 && straightflush2 == 0) {

          let four1 = fourOfaKind(player1);
          let four2 = fourOfaKind(player2);
          let four1Power = fourOfaKindPower(player1);
          let four2Power = fourOfaKindPower(player2);
          let kicker1 = fourOfaKindKicker(player1);
          let kicker2 = fourOfaKindKicker(player2);

          if(four1 == 1 && four2 == 1) {
              if (four1Power > four2Power) {
                console.log("Player 1 wins with four of a kind!");
                window.alert("Player 1 wins with four of a kind!");
                return 1;
              } else if (four2Power > four1Power) {
                console.log("Player 2 wins with four of a kind!");
                window.alert("Player 2 wins with four of a kind!");
                return 2;
              } else if (kicker1 > kicker2) {
                console.log("Player 1 wins with four of a kind!");
                window.alert("Player 1 wins with four of a kind!");
                return 1;
              } else if (kicker2 > kicker1) {
                console.log("Player 2 wins with four of a kind!");
                window.alert("Player 2 wins with four of a kind!");
                return 2;
              } else {
                console.log("It's a tie!");
                window.alert("It's a tie!");
                return 0;
              }
          } else if(four1 == 1 && four2 == 0) {
              console.log("Player 1 wins with four of a kind!");
              window.alert("Player 1 wins with four of a kind!");
              return 1;
          } else if(four1 == 0 && four2 == 1) {
              console.log("Player 2 wins with four of a kind!");
              window.alert("Player 2 wins with four of a kind!");
              return 2;
          } else if(four1 == 0 && four2 == 0) {
            
            let fullhouse1 = fullhouse(player1);
            let fullhouse2 = fullhouse(player2);
            let threeOfAKind1Power = fullhouseThreeOfAKindPower(player1);
            let threeOfAKind2Power = fullhouseThreeOfAKindPower(player2);
            let Pair1Power = fullhousePairPower(player1);
            let Pair2Power = fullhousePairPower(player2);
            
            if(fullhouse1 == 1 && fullhouse2 == 1) {
                if (threeOfAKind1Power > threeOfAKind2Power) {
                  console.log("Player 1 wins with a full house!");
                  window.alert("Player 1 wins with a full house!");
                  return 1;
                }
                else if (threeOfAKind2Power > threeOfAKind1Power) {
                  console.log("Player 2 wins with a full house!");
                  window.alert("Player 2 wins with a full house!");
                  return 2;
                }
                else if (Pair1Power > Pair2Power) {
                  console.log("Player 1 wins with a full house!");
                  window.alert("Player 1 wins with a full house!");
                  return 1;
                }
                else if (Pair2Power > Pair1Power) {
                  console.log("Player 2 wins with a full house!");
                  window.alert("Player 2 wins with a full house!");
                  return 2;
                } else {
                  console.log("It's a tie!");
                  window.alert("It's a tie!");
                  return 0;
                }
            } else if(fullhouse1 == 1 && fullhouse2 == 0) {
                console.log("Player 1 wins with a full house!");
                window.alert("Player 1 wins with a full house!");
                return 1;
            } else if(fullhouse1 == 0 && fullhouse2 == 1) {
                console.log("Player 2 wins with a full house!");
                window.alert("Player 2 wins with a full house!");
                return 2;
            } else if(fullhouse1 == 0 && fullhouse2 == 0) {

              let flush1 = flush(player1);
              let flush2 = flush(player2);
              let flush1One = flushKickerOne(player1);
              let flush2One = flushKickerOne(player2);
              let flush1Two = flushKickerTwo(player1);
              let flush2Two = flushKickerTwo(player2);
              let flush1Three = flushKickerThree(player1);
              let flush2Three = flushKickerThree(player2);
              let flush1Four = flushKickerFour(player1);
              let flush2Four = flushKickerFour(player2);
              let flush1Five = flushKickerFive(player1);
              let flush2Five = flushKickerFive(player2);
              
              if(flush1 == 1 && flush2 == 1) {
                  if (flush1One > flush2One) {
                    console.log("Player 1 wins with a flush!");
                    window.alert("Player 1 wins with a flush!");
                    return 1;
                  }
                  else if (flush2One > flush1One) {
                    console.log("Player 2 wins with a flush!");
                    window.alert("Player 2 wins with a flush!");
                    return 2;
                  }
                  else if (flush1Two > flush2Two) {
                    console.log("Player 1 wins with a flush!");
                    window.alert("Player 1 wins with a flush!");
                    return 1;
                  }
                  else if (flush2Two > flush1Two) {
                    console.log("Player 2 wins with a flush!");
                    window.alert("Player 2 wins with a flush!");
                    return 2;
                  }
                  else if (flush1Three > flush2Three) {
                    console.log("Player 1 wins with a flush!");
                    window.alert("Player 1 wins with a flush!");
                    return 1;
                  }
                  else if (flush2Three > flush1Three) {
                    console.log("Player 2 wins with a flush!");
                    window.alert("Player 2 wins with a flush!");
                    return 2;
                  }
                  else if (flush1Four > flush2Four) {
                    console.log("Player 1 wins with a flush!");
                    window.alert("Player 1 wins with a flush!");
                    return 1;
                  }
                  else if (flush2Four > flush1Four) {
                    console.log("Player 2 wins with a flush!");
                    window.alert("Player 2 wins with a flush!");
                    return 2;
                  }
                  else if (flush1Five > flush2Five) {
                    console.log("Player 1 wins with a flush!");
                    window.alert("Player 1 wins with a flush!");
                    return 1;
                  }
                  else if (flush2Five > flush1Five) {
                    console.log("Player 2 wins with a flush!");
                    window.alert("Player 2 wins with a flush!");
                    return 2;
                  } else {
                    console.log("It's a tie!");
                    window.alert("It's a tie!");
                    return 0;
                  }
              } else if(flush1 == 1 && flush2 == 0) {
                  console.log("Player 1 wins with a flush!");
                  window.alert("Player 1 wins with a flush!");
                  return 1;
              } else if(flush1 == 0 && flush2 == 1) {
                  console.log("Player 2 wins with a flush!");
                  window.alert("Player 2 wins with a flush!");
                  return 2;
              } else if(flush1 == 0 && flush2 == 0) {

                let straight1 = straight(player1);
                let straight2 = straight(player2);
                let straight1Power = straightPower(player1);
                let straight2Power = straightPower(player2);
                
                if(straight1 == 1 && straight2 == 1) {
                    if (straight1Power > straight2Power) {
                      console.log("Player 1 wins with a straight!");
                      window.alert("Player 1 wins with a straight!");
                      return 1;
                    }
                    else if (straight2Power > straight1Power) {
                      console.log("Player 2 wins with a straight!");
                      window.alert("Player 2 wins with a straight!");
                      return 2;
                    } else {
                      console.log("It's a tie!");
                      window.alert("It's a tie!");
                      return 0;
                    }
                } else if(straight1 == 1 && straight2 == 0) {
                    console.log("Player 1 wins with a straight!");
                    window.alert("Player 1 wins with a straight!");
                    return 1;
                } else if(straight1 == 0 && straight2 == 1) {
                    console.log("Player 2 wins with a straight!");
                    window.alert("Player 2 wins with a straight!");
                    return 2;
                } else if(straight1 == 0 && straight2 == 0) {

                  let threeOfAKind1 = threeOfAKind(player1);
                  let threeOfAKind2 = threeOfAKind(player2);
                  let threeOfAKind1Power = threeOfAKindPower(player1);
                  let threeOfAKind2Power = threeOfAKindPower(player2);
                  let threeOfAKind1KickerOne = threeOfAKindKickerOne(player1);
                  let threeOfAKind2KickerOne = threeOfAKindKickerOne(player2);
                  let threeOfAKind1KickerTwo = threeOfaKindKickerTwo(player1);                  
                  let threeOfAKind2KickerTwo = threeOfaKindKickerTwo(player2);                  
                  
                  if(threeOfAKind1 == 1 && threeOfAKind2 == 1) {
                      if (threeOfAKin1Power > threeOfAKind2Power) {
                        console.log("Player 1 wins with three of a kind!");
                        window.alert("Player 1 wins with three of a kind!");
                        return 1;
                      }
                      else if (threeOfAKind2Power > threeOfAKind1Power) {
                        console.log("Player 2 wins with three of a kind!");
                        window.alert("Player 2 wins with three of a kind!");
                        return 2;
                      }
                      else if (threeOfAKind1KickerOne > threeOfAKind2KickerOne) {
                        console.log("Player 1 wins with three of a kind!");
                        window.alert("Player 1 wins with three of a kind!");
                        return 1;
                      }
                      else if (threeOfAKind2KickerOne > threeOfAKind1KickerOne) {
                        console.log("Player 2 wins with three of a kind!");
                        window.alert("Player 2 wins with three of a kind!");
                        return 2;
                      }
                      else if (threeOfAKind1KickerTwo > threeOfAKind2KickerTwo) {
                        console.log("Player 1 wins with three of a kind!");
                        window.alert("Player 1 wins with three of a kind!");
                        return 1;
                      }
                      else if (threeOfAKind2KickerTwo > threeOfAKind1KickerTwo) {
                        console.log("Player 2 wins with three of a kind!");
                        window.alert("Player 2 wins with three of a kind!");
                        return 2;
                      } else {
                        console.log("It's a tie!");
                        window.alert("It's a tie!");
                      }                      
                  } else if(threeOfAKind1 == 1 && threeOfAKind2 == 0) {
                      console.log("Player 1 wins with three of a kind!");
                      window.alert("Player 1 wins with three of a kind!");
                      return 1;
                  } else if(threeOfAKind1 == 0 && threeOfAKind2 == 1) {
                      console.log("Player 2 wins with three of a kind!");
                      window.alert("Player 2 wins with three of a kind!");
                      return 2;
                  } else if(threeOfAKind1 == 0 && threeOfAKind2 == 0) {

                    let twoPair1 = twoPair(player1);
                    let twoPair2 = twoPair(player2);
                    let bestPairPower1 = bestPairPower(player1);
                    let bestPairPower2 = bestPairPower(player2);
                    let worstPairPower1 = worstPairPower(player1);
                    let worstPairPower2 = worstPairPower(player2);
                    let kicker1 = twoPairKicker(player1);
                    let kicker2 = twoPairKicker(player2);

                    if(twoPair1 == 1 && twoPair2 == 1) {
                        if (bestPairPower1 > bestPairPower2) {
                          console.log("Player 1 wins with two pair!");
                          window.alert("Player 1 wins with two pair!");
                          return 1;
                        }
                        else if (bestPairPower2 > bestPairPower1) {
                          console.log("Player 2 wins with two pair!");
                          window.alert("Player 2 wins with two pair!");
                          return 2;
                        }
                        else if (worstPairPower1 > worstPairPower2) {
                          console.log("Player 1 wins with two pair!");
                          window.alert("Player 1 wins with two pair!");
                          return 1;
                        }
                        else if (worstPairPower2 > worstPairPower1) {
                          console.log("Player 2 wins with two pair!");
                          window.alert("Player 2 wins with two pair!");
                          return 2;
                        }
                        else if (kicker1 > kicker2) {
                          console.log("Player 1 wins with two pair!");
                          window.alert("Player 1 wins with two pair!");
                          return 1;
                        }
                        else if (kicker2 > kicker1) {
                          console.log("Player 2 wins with two pair!");
                          window.alert("Player 2 wins with two pair!");
                          return 2;
                        } else{
                          console.log("It's a tie!");
                          window.alert("It's a tie!");
                          return 0;
                        }                                              
                    } else if(twoPair1 == 1 && twoPair2 == 0) {
                        console.log("Player 1 wins with two pair!");
                        window.alert("Player 1 wins with two pair!");
                        return 1;
                    } else if(twoPair1 == 0 && twoPair2 == 1) {
                        console.log("Player 2 wins with two pair!");
                        window.alert("Player 2 wins with two pair!");
                        return 2;
                    } else if(twoPair1 == 0 && twoPair2 == 0) {

                        let pair1 = pair(player1);
                        let pair2 = pair(player2);
                        let pair1Power = pairPower(player1);
                        let pair2Power = pairPower(player2);
                        let pair1kickerOne = pairKickerOne(player1);
                        let pair2kickerOne = pairKickerOne(player2);
                        let pair1kickerTwo = pairKickerTwo(player1);
                        let pair2kickerTwo = pairKickerTwo(player2);
                        let pair1kickerThree = pairKickerThree(player1);
                        let pair2kickerThree = pairKickerThree(player2);
                        
                      if(pair1 == 1 && pair2 == 1) {
                          if (pair1Power > pair2Power) {
                            console.log("Player 1 wins with a pair!");
                            window.alert("Player 1 wins with a pair!");
                            return 1;
                          }
                          else if (pair2Power > pair1Power) {
                            console.log("Player 2 wins with a pair!");
                            window.alert("Player 2 wins with a pair!");
                            return 2;
                          }
                          else if (pair1kickerOne > pair2kickerOne) {
                            console.log("Player 1 wins with a pair!");
                            window.alert("Player 1 wins with a pair!");
                            return 1;
                          }
                          else if (pair2kickerOne > pair1kickerOne) {
                            console.log("Player 2 wins with a pair!");
                            window.alert("Player 2 wins with a pair!");
                            return 2;
                          }
                          else if (pair1kickerTwo > pair2kickerTwo) {
                            console.log("Player 1 wins with a pair!");
                            window.alert("Player 1 wins with a pair!");
                            return 1;
                          }
                          else if (pair2kickerTwo > pair1kickerTwo) {
                            console.log("Player 2 wins with a pair!");
                            window.alert("Player 2 wins with a pair!");
                            return 2;
                          }
                          else if (pair1kickerThree > pair2kickerThree) {
                            console.log("Player 1 wins with a pair!");
                            window.alert("Player 1 wins with a pair!");
                            return 1;
                          }
                          else if (pair2kickerThree > pair1kickerThree) {
                            console.log("Player 2 wins with a pair!");
                            window.alert("Player 2 wins with a pair!");
                            return 2;
                          } else {
                            console.log("It's a tie!");
                            window.alert("It's a tie!");
                            return 0;
                          }
                      } else if(pair1 == 1 && pair2 == 0) {
                          console.log("Player 1 wins with a pair!");
                          window.alert("Player 1 wins with a pair!");
                          return 1;
                      } else if(pair1 == 0 && pair2 == 1) {
                          console.log("Player 2 wins with a pair!");
                          window.alert("Player 2 wins with a pair!");
                          return 2;
                      } else if(pair1 == 0 && pair2 == 0) {

                        let higherCard1One = higherCard(player1);
                        let higherCard2One = higherCard(player2);
                        let higherCard1Two = higherCardTwo(player1);
                        let higherCard2Two = higherCardTwo(player2);
                        let higherCard1Three = higherCardThree(player1);
                        let higherCard2Three = higherCardThree(player2);
                        let higherCard1Four = higherCardFour(player1);
                        let higherCard2Four = higherCardFour(player2);
                        let higherCard1Five = higherCardFive(player1);
                        let higherCard2Five = higherCardFive(player2);

                        if(higherCard1One > higherCard2One){
                            console.log("Player 1 wins with a high card!");
                            window.alert("Player 1 wins with a high card!");
                            return 1;
                        } else if(higherCard2One > higherCard1One){
                            console.log("Player 2 wins with a high card!");
                            window.alert("Player 2 wins with a high card!");
                            return 2;
                        } else if(higherCard1One == higherCard2One){
                            if(higherCard1Two > higherCard2Two){
                                console.log("Player 1 wins with a high card!");
                                window.alert("Player 1 wins with a high card!");
                                return 1;
                            } else if(higherCard2Two > higherCard1Two){
                                console.log("Player 2 wins with a high card!");
                                window.alert("Player 2 wins with a high card!");
                                return 2;
                            } else if(higherCard1Two == higherCard2Two){
                                if(higherCard1Three > higherCard2Three){
                                    console.log("Player 1 wins with a high card!");
                                    window.alert("Player 1 wins with a high card!");
                                    return 1;
                                } else if(higherCard2Three > higherCard1Three){  
                                    console.log("Player 2 wins with a high card!");
                                    window.alert("Player 2 wins with a high card!");
                                    return 2;
                                } else if( higherCard1Three == higherCard2Three){
                                    if(higherCard1Four > higherCard2Four){
                                        console.log("Player 1 wins with a high card!"); 
                                        window.alert("Player 1 wins with a high card!");  
                                        return 1;
                                    } else if(higherCard2Four > higherCard1Four){
                                        console.log("Player 2 wins with a high card!");
                                        window.alert("Player 2 wins with a high card!");  
                                        return 2;
                                    } else if( higherCard1Four == higherCard2Four){
                                        if(higherCard1Five > higherCard2Five){
                                            console.log("Player 1 wins with a high card!");
                                            window.alert("Player 1 wins with a high card!");
                                            return 1;
                                        } else if(higherCard2Five > higherCard1Five){
                                            console.log("Player 2 wins with a high card!");
                                            window.alert("Player 2 wins with a high card!");
                                            return 2;
                                        } else if(higherCard1Five == higherCard2Five){
                                            console.log("It's a tie!");
                                            window.alert("It's a tie!");
                                            return 0;
                                        }
                                    }
                                }
                            }
                        }
                      }
                    }
                  }
                }
              } // fullhouse == 0;
            } // four == 0;
          } // straightflush == 0;
        } // royalflush == 0;
      }
    } // end of function determineWinnersHand
  
  // functions to determine the best combination of cards in the hand. +1000 lines of code

  function  higherCardFive(player) {            
    var higherCard = 0;
    var higherCardTwo = 0;
    var higherCardThree = 0;
    var higherCardFour = 0;
    var higherCardFive = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      higherCard = player.hand[g].power;
                      higherCardTwo = player.hand[h].power;
                      higherCardThree = player.hand[i].power;
                      higherCardFour = player.hand[j].power;
                      higherCardFive = player.hand[k].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCardFive: " + higherCardFive);
    return higherCardFive;
  }   

  function  higherCardFour(player) {      
    var higherCard = 0;
    var higherCardTwo = 0;
    var higherCardThree = 0;
    var higherCardFour = 0;
    var higherCardFive = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      higherCard = player.hand[g].power;
                      higherCardTwo = player.hand[h].power;
                      higherCardThree = player.hand[i].power;
                      higherCardFour = player.hand[j].power;
                      higherCardFive = player.hand[k].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCardFour: " + higherCardFour);
    return higherCardFour;
  }   

  function  higherCardThree(player) {   
    var higherCard = 0;
    var higherCardTwo = 0;
    var higherCardThree = 0;
    var higherCardFour = 0;
    var higherCardFive = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      higherCard = player.hand[g].power;
                      higherCardTwo = player.hand[h].power;
                      higherCardThree = player.hand[i].power;
                      higherCardFour = player.hand[j].power;
                      higherCardFive = player.hand[k].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCardThree: " + higherCardThree);
    return higherCardThree;
  }    

  function  higherCardTwo(player) {      
    var higherCard = 0;
    var higherCardTwo = 0;
    var higherCardThree = 0;
    var higherCardFour = 0;
    var higherCardFive = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      higherCard = player.hand[g].power;
                      higherCardTwo = player.hand[h].power;
                      higherCardThree = player.hand[i].power;
                      higherCardFour = player.hand[j].power;
                      higherCardFive = player.hand[k].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCardTwo: " + higherCardTwo);
    return higherCardTwo;
  }    

  // check for high card.
  function  higherCard(player) {      
    var higherCard = 0;
    var higherCardTwo = 0;
    var higherCardThree = 0;
    var higherCardFour = 0;
    var higherCardFive = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) { 
                    if( player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                      higherCard = player.hand[g].power;
                      higherCardTwo = player.hand[h].power;
                      higherCardThree = player.hand[i].power;
                      higherCardFour = player.hand[j].power;
                      higherCardFive = player.hand[k].power;
                    }
                }
              }
            }
          }
        }
      }
    }
    console.log("higherCard: " + higherCard);
    return higherCard;
  }    

  function  pairKickerThree(player) {
    var pair = 0; 
    var pairPower = 0; 
    var kickerOne = 0;
    var kickerTwo = 0;
    var kickerThree = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    pair = 1;
                    pairPower = player.hand[g].power;
                    kickerOne = player.hand[i].power;
                    kickerTwo = player.hand[j].power;
                    kickerThree = player.hand[k].power;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("kickerThree: " + kickerThree);
    return kickerThree;
  }

  function  pairKickerTwo(player) {
    var pair = 0; 
    var pairPower = 0; 
    var kickerOne = 0;
    var kickerTwo = 0;
    var kickerThree = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    pair = 1;
                    pairPower = player.hand[g].power;
                    kickerOne = player.hand[i].power;
                    kickerTwo = player.hand[j].power;
                    kickerThree = player.hand[k].power;
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

  function  pairKickerOne(player) {
    var pair = 0; 
    var pairPower = 0; 
    var kickerOne = 0;
    var kickerTwo = 0;
    var kickerThree = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    pair = 1;
                    pairPower = player.hand[g].power;
                    kickerOne = player.hand[i].power;
                    kickerTwo = player.hand[j].power;
                    kickerThree = player.hand[k].power;
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

  function  pairPower(player) {
    var pair = 0; 
    var pairPower = 0; 
    var kickerOne = 0;
    var kickerTwo = 0;
    var kickerThree = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    pair = 1;
                    pairPower = player.hand[g].power;
                    kickerOne = player.hand[i].power;
                    kickerTwo = player.hand[j].power;
                    kickerThree = player.hand[k].power;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("pairPower: " + pairPower);
    return pairPower;
  }

  // check for one pair. Each card on the hand is compared with all the others. If there is a pair, the author of the pair is stored in the variable pair1Power or pair2Power. 
  function  pair(player) {
    var pair = 0; 
    var pairPower = 0; 
    var kickerOne = 0;
    var kickerTwo = 0;
    var kickerThree = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {   
                  if(player.hand[g].power == player.hand[h].power && player.hand[h].power != player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    pair = 1;
                    pairPower = player.hand[g].power;
                    kickerOne = player.hand[i].power;
                    kickerTwo = player.hand[j].power;
                    kickerThree = player.hand[k].power;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("pair: " + pair);
    return pair;
  }

  function  twoPairKicker(player) {
    var twoPair = 0;    
    var bestPairPower = 0;
    var worstPairPower = 0;
    var kicker = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power == player.hand[j].power && player.hand[j].power != player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    twoPair = 1;    
                    bestPairPower = player.hand[g].power;
                    worstPairPower = player.hand[i].power;
                    kicker = player.hand[k].power;
                  }
                }
              }
            }
          }
        }
      }
    }        
    console.log("kicker: " + kicker);
    return kicker;      
  }

  function  worstPairPower(player) {
    var twoPair = 0;    
    var bestPairPower = 0;
    var worstPairPower = 0;
    var kicker = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power == player.hand[j].power && player.hand[j].power != player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    twoPair = 1;    
                    bestPairPower = player.hand[g].power;
                    worstPairPower = player.hand[i].power;
                    kicker = player.hand[k].power;
                  }
                }
              }
            }
          }
        }
      }
    }        
    console.log("worstPairPower: " + worstPairPower);
    return worstPairPower;      
  }

  function  bestPairPower(player) {
    var twoPair = 0;    
    var bestPairPower = 0;
    var worstPairPower = 0;
    var kicker = 0;
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {    
                  if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power == player.hand[j].power && player.hand[j].power != player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    twoPair = 1;    
                    bestPairPower = player.hand[g].power;
                    worstPairPower = player.hand[i].power;
                    kicker = player.hand[k].power;
                  }
                }
              }
            }
          }
        }
      }
    }        
    console.log("bestPairPower: " + bestPairPower);
    return bestPairPower;      
  }

  function  twoPair(player) {
  var twoPair = 0;    
  var bestPairPower = 0;
  var worstPairPower = 0;
  var kicker = 0;
  for (var m = 0; m < player.hand.length; m++) {
    for (var l = 0; l < player.hand.length; l++) {      
      for (var k = 0; k < player.hand.length; k++) {          
        for (var j = 0; j < player.hand.length; j++) {
          for (var i = 0; i < player.hand.length; i++) {  
            for (var h = 0; h < player.hand.length; h++) {
              for (var g = 0; g < player.hand.length; g++) {    
                if( player.hand[g].power == player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power == player.hand[j].power && player.hand[j].power != player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                  twoPair = 1;    
                  bestPairPower = player.hand[g].power;
                  worstPairPower = player.hand[i].power;
                  kicker = player.hand[k].power;
                }
              }
            }
          }
        }
      }
    }
  }        
  console.log("twoPair: " + twoPair);
  return twoPair;      
}

function threeOfaKindKickerTwo(player) {
  var threeOfAKind = 0;
  var threeOfAKindPower = 0;
  var kickerOne = 0;
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
                  // determine the kickerOne (the highest card on the hand that is not part of the three of a kind)
                  threeOfAKind = 1;
                  threeOfAKindPower = player.hand[g].power;
                  kickerOne = player.hand[j].power;
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
  var threeOfAKind = 0;
  var threeOfAKindPower = 0;
  var kickerOne = 0;
  var kickerTwo = 0;
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
                  threeOfAKind = 1;
                  threeOfAKindPower = player.hand[g].power;
                  kickerOne = player.hand[j].power;
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
  console.log("kickerOne: " + kickerOne);      
  return kickerOne;
}

  // check for three of a kind
  function  threeOfAKindPower(player) {
    var threeOfAKind = 0;
    var threeOfAKindPower = 0;
    var kickerOne = 0;
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
                    // determine the kickerOne (the highest card on the hand that is not part of the three of a kind)
                    threeOfAKind = 1;
                    threeOfAKindPower = player.hand[g].power;
                    kickerOne = player.hand[j].power;
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
    console.log("threeOfAKindPower: " + threeOfAKindPower);      
    return threeOfAKindPower;
  }

  // check for three of a kind
  function  threeOfAKind(player) {
    var threeOfAKind = 0;
    var threeOfAKindPower = 0;
    var kickerOne = 0;
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
                    // determine the kickerOne (the highest card on the hand that is not part of the three of a kind)
                    threeOfAKind = 1;
                    threeOfAKindPower = player.hand[g].power;
                    kickerOne = player.hand[j].power;
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
    console.log("threeOfAKind: " + threeOfAKind);      
    return threeOfAKind;
  }
  
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


// check for flush. If all cards on the hand have the same suit, then the player has a flush.         
function  flushKickerOne(player) { 
var flush = 0; 
var kickerOne = 0; 
var kickerTwo = 0; 
var kickerThree = 0; 
var kickerFour = 0; 
var kickerFive = 0; 
for (var m = 0; m < player.hand.length; m++) {
  for (var l = 0; l < player.hand.length; l++) {      
    for (var k = 0; k < player.hand.length; k++) {          
      for (var j = 0; j < player.hand.length; j++) {
        for (var i = 0; i < player.hand.length; i++) {  
          for (var h = 0; h < player.hand.length; h++) {
            for (var g = 0; g < player.hand.length; g++) {                    

              // check for five of the highest cards on the hand with the same suit
              if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                flush = 1;
                // determine the kickers
                if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power &&  player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power) {
                  kickerOne = player.hand[g].power;
                  kickerTwo = player.hand[h].power;
                  kickerThree = player.hand[i].power;
                  kickerFour = player.hand[j].power;
                  kickerFive = player.hand[k].power;
                }
              } // if main
            } // loop g
          } // loop h
        } // loop i
      } // loop j
    } // loop k
  } // loop l
} // loop m

console.log("kickerOne: " + kickerOne);
return kickerOne;
} // end of flush

  // check for flush. If all cards on the hand have the same suit, then the player has a flush.         
  function  flushKickerTwo(player) { 
    var flush = 0; 
    var kickerOne = 0; 
    var kickerTwo = 0; 
    var kickerThree = 0; 
    var kickerFour = 0; 
    var kickerFive = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {                    

                  // check for five of the highest cards on the hand with the same suit
                  if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    flush = 1;
                    // determine the kickers
                    if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power &&  player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power) {
                      kickerOne = player.hand[g].power;
                      kickerTwo = player.hand[h].power;
                      kickerThree = player.hand[i].power;
                      kickerFour = player.hand[j].power;
                      kickerFive = player.hand[k].power;
                    }
                  } // if main
                } // loop g
              } // loop h
            } // loop i
          } // loop j
        } // loop k
      } // loop l
    } // loop m
    
    console.log("kickerTwo: " + kickerTwo);
    return kickerTwo;
  } // end of flush

  // check for flush. If all cards on the hand have the same suit, then the player has a flush.         
  function  flushKickerThree(player) { 
    var flush = 0; 
    var kickerOne = 0; 
    var kickerTwo = 0; 
    var kickerThree = 0; 
    var kickerFour = 0; 
    var kickerFive = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {                    

                  // check for five of the highest cards on the hand with the same suit
                  if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    flush = 1;
                    // determine the kickers
                    if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power &&  player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power) {
                      kickerOne = player.hand[g].power;
                      kickerTwo = player.hand[h].power;
                      kickerThree = player.hand[i].power;
                      kickerFour = player.hand[j].power;
                      kickerFive = player.hand[k].power;
                    }
                  } // if main
                } // loop g
              } // loop h
            } // loop i
          } // loop j
        } // loop k
      } // loop l
    } // loop m
    
    console.log("kickerThree: " + kickerThree);
    return kickerThree;
  } // end of flush

  // check for flush. If all cards on the hand have the same suit, then the player has a flush.         
  function  flushKickerFour(player) { 
    var flush = 0; 
    var kickerOne = 0; 
    var kickerTwo = 0; 
    var kickerThree = 0; 
    var kickerFour = 0; 
    var kickerFive = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {                    

                  // check for five of the highest cards on the hand with the same suit
                  if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                    flush = 1;
                    // determine the kickers
                    if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power &&  player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power) {
                      kickerOne = player.hand[g].power;
                      kickerTwo = player.hand[h].power;
                      kickerThree = player.hand[i].power;
                      kickerFour = player.hand[j].power;
                      kickerFive = player.hand[k].power;
                    }
                  } // if main
                } // loop g
              } // loop h
            } // loop i
          } // loop j
        } // loop k
      } // loop l
    } // loop m
    
    console.log("kickerFour: " + kickerFour);
    return kickerFour;
  } // end of flush


// check for flush. If all cards on the hand have the same suit, then the player has a flush.         
function  flushKickerFive(player) { 
  var flush = 0; 
  var kickerOne = 0; 
  var kickerTwo = 0; 
  var kickerThree = 0; 
  var kickerFour = 0; 
  var kickerFive = 0; 
  for (var m = 0; m < player.hand.length; m++) {
    for (var l = 0; l < player.hand.length; l++) {      
      for (var k = 0; k < player.hand.length; k++) {          
        for (var j = 0; j < player.hand.length; j++) {
          for (var i = 0; i < player.hand.length; i++) {  
            for (var h = 0; h < player.hand.length; h++) {
              for (var g = 0; g < player.hand.length; g++) {                    

                // check for five of the highest cards on the hand with the same suit
                if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                  flush = 1;
                  // determine the kickers
                  if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power &&  player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power) {
                    kickerOne = player.hand[g].power;
                    kickerTwo = player.hand[h].power;
                    kickerThree = player.hand[i].power;
                    kickerFour = player.hand[j].power;
                    kickerFive = player.hand[k].power;
                  }
                } // if main
              } // loop g
            } // loop h
          } // loop i
        } // loop j
      } // loop k
    } // loop l
  } // loop m
  
  console.log("kickerFive: " + kickerFive);
  return kickerFive;
} // end of flush

// check for flush. If all cards on the hand have the same suit, then the player has a flush.         
function  flush(player) { 
var flush = 0; 
var kickerOne = 0; 
var kickerTwo = 0; 
var kickerThree = 0; 
var kickerFour = 0; 
var kickerFive = 0; 
for (var m = 0; m < player.hand.length; m++) {
  for (var l = 0; l < player.hand.length; l++) {      
    for (var k = 0; k < player.hand.length; k++) {          
      for (var j = 0; j < player.hand.length; j++) {
        for (var i = 0; i < player.hand.length; i++) {  
          for (var h = 0; h < player.hand.length; h++) {
            for (var g = 0; g < player.hand.length; g++) {                    

              // check for five of the highest cards on the hand with the same suit
              if (player.hand[g].suit == player.hand[h].suit && player.hand[h].suit == player.hand[i].suit && player.hand[i].suit == player.hand[j].suit && player.hand[j].suit == player.hand[k].suit && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) {
                flush = 1;
                // determine the kickers
                if (player.hand[g].power > player.hand[h].power && player.hand[h].power > player.hand[i].power && player.hand[i].power > player.hand[j].power && player.hand[j].power > player.hand[k].power &&  player.hand[k].power > player.hand[l].power && player.hand[l].power > player.hand[m].power) {
                  kickerOne = player.hand[g].power;
                  kickerTwo = player.hand[h].power;
                  kickerThree = player.hand[i].power;
                  kickerFour = player.hand[j].power;
                  kickerFive = player.hand[k].power;
                }
              } // if main
            } // loop g
          } // loop h
        } // loop i
      } // loop j
    } // loop k
  } // loop l
} // loop m

console.log("flush: " + flush);
return flush;
} // end of flush

function fullhousePairPower(player) {
    // check for full house. If the player's hand has a three of a kind and a pair, then the player has a full house.
    var threeOfAKindPower = 0; 
    var pairPower = 0; 
    var fullHouse = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {
                  // check for three of a kind and best pair
                  if(player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[j].power == player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                    fullHouse = 1; 
                    threeOfAKindPower = player.hand[g].power;
                    pairPower = player.hand[j].power ;
                  }
                }
              }
            }
          }
        }
      }
    }      
    console.log("pairPower: " + pairPower); 
    return pairPower;
}  

function fullhouseThreeOfAKindPower(player) {
    // check for full house. If the player's hand has a three of a kind and a pair, then the player has a full house.
    var threeOfAKindPower = 0; 
    var pairPower = 0; 
    var fullHouse = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {
                  // check for three of a kind and best pair
                  if(player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[j].power == player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                    fullHouse = 1; 
                    threeOfAKindPower = player.hand[g].power;
                    pairPower = player.hand[j].power ;
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

function fullhouse(player) {
    // check for full house. If the player's hand has a three of a kind and a pair, then the player has a full house.
    var threeOfAKindPower = 0; 
    var pairPower = 0; 
    var fullHouse = 0; 
    for (var m = 0; m < player.hand.length; m++) {
      for (var l = 0; l < player.hand.length; l++) {      
        for (var k = 0; k < player.hand.length; k++) {          
          for (var j = 0; j < player.hand.length; j++) {
            for (var i = 0; i < player.hand.length; i++) {  
              for (var h = 0; h < player.hand.length; h++) {
                for (var g = 0; g < player.hand.length; g++) {
                  // check for three of a kind and best pair
                  if(player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[j].power == player.hand[k].power && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                    fullHouse = 1; 
                    threeOfAKindPower = player.hand[g].power;
                    pairPower = player.hand[j].power ;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("fullHouse: " + fullHouse);
    return fullHouse;
}

function fourOfaKindKicker(player) {
  // check for four of a kind. If the player's hand has 4 cards of the same power, then the player has four of a kind.
  var fourOfaKind = 0;
  var fourOfaKindPower = 0;
  var kicker = 0;
  for (var m = 0; m < player.hand.length; m++) {
    for (var l = 0; l < player.hand.length; l++) {      
      for (var k = 0; k < player.hand.length; k++) {          
        for (var j = 0; j < player.hand.length; j++) {
          for (var i = 0; i < player.hand.length; i++) {  
            for (var h = 0; h < player.hand.length; h++) {
              for (var g = 0; g < player.hand.length; g++) {
                if (player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[g].power == player.hand[j].power && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                  fourOfaKind = 1;
                  fourOfaKindPower = player.hand[g].power;
                  kicker = player.hand[k].power;
                }
              }
            }
          }
        }
      }
    }
  }
  console.log("fourOfaKindKicker: " + kicker);
  return kicker;
}

function fourOfaKindPower(player) {
     // check for four of a kind. If the player's hand has 4 cards of the same power, then the player has four of a kind.
     var fourOfaKind = 0;
     var fourOfaKindPower = 0;
     var kicker = 0;
     for (var m = 0; m < player.hand.length; m++) {
       for (var l = 0; l < player.hand.length; l++) {      
         for (var k = 0; k < player.hand.length; k++) {          
           for (var j = 0; j < player.hand.length; j++) {
             for (var i = 0; i < player.hand.length; i++) {  
               for (var h = 0; h < player.hand.length; h++) {
                 for (var g = 0; g < player.hand.length; g++) {
                   if (player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[g].power == player.hand[j].power && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                     fourOfaKind = 1;
                     fourOfaKindPower = player.hand[g].power;
                     kicker = player.hand[k].power;
                   }
                 }
               }
             }
           }
         }
       }
     }
     console.log("fourOfaKindPower: " + fourOfaKindPower);
     return fourOfaKindPower;
}

function fourOfaKind(player) {
  // check for four of a kind. If the player's hand has 4 cards of the same power, then the player has four of a kind.
  var fourOfaKind = 0;
  var fourOfaKindPower = 0;
  var kicker = 0;
  for (var m = 0; m < player.hand.length; m++) {
    for (var l = 0; l < player.hand.length; l++) {      
      for (var k = 0; k < player.hand.length; k++) {          
        for (var j = 0; j < player.hand.length; j++) {
          for (var i = 0; i < player.hand.length; i++) {  
            for (var h = 0; h < player.hand.length; h++) {
              for (var g = 0; g < player.hand.length; g++) {
                if (player.hand[g].power == player.hand[h].power && player.hand[g].power == player.hand[i].power && player.hand[g].power == player.hand[j].power && player.hand[k].power > player.hand[l].power && player.hand[k].power > player.hand[m].power && g != h && g != i && g != j && g != k && g != l && g != m && h != i && h != j && h != k && h != l && h != m && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m) { 
                  fourOfaKind = 1;
                  fourOfaKindPower = player.hand[g].power;
                  kicker = player.hand[k].power;
                }
              }
            }
          }
        }
      }
    }
  }
  console.log("fourOfaKind: " + fourOfaKind);
  return fourOfaKind;
}

function straightflushPower(player) {
  // check for straight flush. If the player's hand has 5 cards of the same suit and each power of the cards is consecutive, then the player has a straight flush.
  var straightflush = 0; 
  var straightflushPower = 0; 
  
  for (var m = 0; m < player.hand.length; m++) {
    for (var l = 0; l < player.hand.length; l++) {      
      for (var k = 0; k < player.hand.length; k++) {          
        for (var j = 0; j < player.hand.length; j++) {
          for (var i = 0; i < player.hand.length; i++) {  
            // five cards of the same suit and consecutive power
            if (player.hand[i].suit == player.hand[j].suit && player.hand[i].suit == player.hand[k].suit && player.hand[i].suit == player.hand[l].suit && player.hand[i].suit == player.hand[m].suit && player.hand[i].power == player.hand[j].power - 1 && player.hand[i].power == player.hand[k].power - 2 && player.hand[i].power == player.hand[l].power - 3 && player.hand[i].power == player.hand[m].power - 4 && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m ) {
              straightflushPower = player.hand[i].power;
              straightflush = 1;
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
  var straightflushPower = 0; 
  
  for (var m = 0; m < player.hand.length; m++) {
    for (var l = 0; l < player.hand.length; l++) {      
      for (var k = 0; k < player.hand.length; k++) {          
        for (var j = 0; j < player.hand.length; j++) {
          for (var i = 0; i < player.hand.length; i++) {  
            // five cards of the same suit and consecutive power
            if (player.hand[i].suit == player.hand[j].suit && player.hand[i].suit == player.hand[k].suit && player.hand[i].suit == player.hand[l].suit && player.hand[i].suit == player.hand[m].suit && player.hand[i].power == player.hand[j].power - 1 && player.hand[i].power == player.hand[k].power - 2 && player.hand[i].power == player.hand[l].power - 3 && player.hand[i].power == player.hand[m].power - 4 && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m ) {
              straightflushPower = player.hand[i].power;
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

function royalflush(player) {
  // check for royal flush. If the player's hand has the cards of power 14, 13, 12, 11 and 10 of the same suit in any order on the array hand, then the player has a royal flush.
  var royalflush = 0; 
  for (var i = 0; i < player.hand.length; i++) {
    if (player.hand1[i].power == 14){
      for (var j = 0; j < player.hand.length; j++) {
        if (player.hand1[j].power == 13) {
          for (var k = 0; k < player.hand.length; k++) {
            if (player.hand1[k].power == 12) {
              for (var l = 0; l < player.hand.length; l++) {
                if (player.hand1[l].power == 11) {
                  for (var m = 0; m < player.hand.length; m++) {
                    if (player.hand1[m].power == 10 && i != j && i != k && i != l && i != m && j != k && j != l && j != m && k != l && k != m && l != m ) {
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

// END - functions to determine the best combination of cards in the hand. +1000 lines of code

