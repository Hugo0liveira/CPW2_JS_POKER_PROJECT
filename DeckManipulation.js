
import { Variables } from "./Variables.js"

// shuffle the deck. 
function shuffleDeck() {
    // loop over the deck of cards backwards. 
    for (let i = Variables.deck.length - 1; i > 0; i--) {
      // grab a random index before current element. Math.random() * (i + 1) will generate a random number between 0 and i.
      const j = Math.floor(Math.random() * (i + 1));
      // swap the current card with the random card.
      [Variables.deck[i], Variables.deck[j]] = [Variables.deck[j], Variables.deck[i]];
    }
    return Variables.deck;
  }

  // return the splice random card from deck 
  function spliceRandomCardFromDeck() {
    // grab a random index before current element. Math.random() * (i + 1) will generate a random number between 0 and i.
    const j = Math.floor(Math.random() * (Variables.deck.length));
    // splice the current card with the random card.
    const card = Variables.deck.splice(j, 1);
    return card;
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

  // change card css if author == "Elysium"
  function cssElysium(card, num){    
    if(card.suit == "Elysium"){      
      if(num == 1){ 
        card.power = Variables.ElysiumPower();        
        const card1HTML = document.querySelector('.card1');      
        const author = document.querySelector('.author1');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit1'); 
        s1.style.color = "rgb(230, 129, 75)";        
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";                       
        const p1 = document.querySelector('.power1'); 
        p1.style.textAlign = "center";       
        //p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML                
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;    
        card1HTML.style.border = 'none';
      }

      if(num == 2){ 
        card.power = Variables.ElysiumPower();
        const card1HTML = document.querySelector('.card2');      
        const author = document.querySelector('.author2');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit2'); 
        s1.style.color = "rgb(230, 129, 75)";
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";                
        const p1 = document.querySelector('.power2'); 
        p1.style.textAlign = "center";               
        //p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML                
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;   
        card1HTML.style.border = 'none';
      }
      
      if(num == 3){ 
        card.power = Variables.ElysiumPower();
        const card1HTML = document.querySelector('.card3');      
        const author = document.querySelector('.author3');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit3'); 
        s1.style.color = "rgb(230, 129, 75)";
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";               
        const p1 = document.querySelector('.power3'); 
        p1.style.textAlign = "center";       
        //p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML                
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;   
        card1HTML.style.border = 'none';
      }

      if(num == 4){ 
        card.power = Variables.ElysiumPower();
        const card1HTML = document.querySelector('.card4');      
        const author = document.querySelector('.author4');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit4'); 
        s1.style.color = "rgb(230, 129, 75)";
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";               
        const p1 = document.querySelector('.power4'); 
        p1.style.textAlign = "center";       
       // p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML        
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;   
        card1HTML.style.border = 'none';
      }

      if(num == 11){ 
        card.power = Variables.ElysiumPower();
        const card1HTML = document.querySelector('.card11');      
        const author = document.querySelector('.author11');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit11'); 
        s1.style.color = "rgb(230, 129, 75)";
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";               
        const p1 = document.querySelector('.power11'); 
        p1.style.textAlign = "center";       
       // p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML        
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;   
        card1HTML.style.border = 'none';
      }

      
      if(num == 12){ 
        card.power = Variables.ElysiumPower();
        const card1HTML = document.querySelector('.card12');      
        const author = document.querySelector('.author12');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit12'); 
        s1.style.color = "rgb(230, 129, 75)";
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";               
        const p1 = document.querySelector('.power12'); 
        p1.style.textAlign = "center";       
      //  p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML        
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;   
        card1HTML.style.border = 'none';
      }

      
      if(num == 13){ 
        card.power = Variables.ElysiumPower();
        const card1HTML = document.querySelector('.card13');      
        const author = document.querySelector('.author13');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit13'); 
        s1.style.color = "rgb(230, 129, 75)";
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";               
        const p1 = document.querySelector('.power13'); 
        p1.style.textAlign = "center";       
      //  p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML        
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;   
        card1HTML.style.border = 'none';
      }
      
      if(num == 14){ 
        card.power = Variables.ElysiumPower();
        const card1HTML = document.querySelector('.card14');      
        const author = document.querySelector('.author14');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit14'); 
        s1.style.color = "rgb(230, 129, 75)";
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";               
        const p1 = document.querySelector('.power14'); 
        p1.style.textAlign = "center";       
      //  p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML        
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;   
        card1HTML.style.border = 'none';
        card1HTML.style.border = 'none';
      }

      
      if(num == 15){ 
        card.power = Variables.ElysiumPower();
        const card1HTML = document.querySelector('.card15');      
        const author = document.querySelector('.author15');      
        author.style.display = 'none';            
        const s1 = document.querySelector('.suit15'); 
        s1.style.color = "rgb(230, 129, 75)";
        s1.style.fontWeight = "bold";
        s1.style.textShadow = "2px 2px 2px black";
        s1.style.textAlign = "center";               
        const p1 = document.querySelector('.power15'); 
        p1.style.textAlign = "center";       
      //  p1.style.color = 'rgb(94, 35, 35)';
        // show the changed power of the card on the HTML        
        p1.innerHTML = card.power;
        const img = document.createElement('div');
        img.classList.add('imgElysium');
        img.innerHTML = `
        <div class="imgElysium">
          <img src="Elysium.png">
        </div>
        `;    
        card1HTML.style.backgroundImage = `url('Elysium.png')`;           
        card1HTML.style.border = 'none';
        card1HTML.style.border = 'none';
      }
      
    }    
  }

  // function responsiveSchopenhauer
  function responsiveSchopenhauer(card, num){
    if(card.author == 'Schopenhauer'){
      if(num == 1){        
        const author1 = document.querySelector('.author1');        
        author1.classList.add('Schopenhauer1');
        author1.innerHTML = card.author;
      }
      if(num == 2){
        const author2 = document.querySelector('.author2');
        author2.classList.add('Schopenhauer2');
        author2.innerHTML = card.author;
      } 
      if(num == 3){
        const author3 = document.querySelector('.author3');
        author3.classList.add('Schopenhauer3');
        author3.innerHTML = card.author;
      }
      if(num == 4){
        const author4 = document.querySelector('.author4');
        author4.classList.add('Schopenhauer4');
        author4.innerHTML = card.author;
      }
      if(num == 11){
        const author11 = document.querySelector('.author11');
        author11.classList.add('Schopenhauer11');
        author11.innerHTML = card.author;
      }
      if(num == 12){
        const author12 = document.querySelector('.author12');
        author12.classList.add('Schopenhauer12');
        author12.innerHTML = card.author;
      }
      if(num == 13){
        const author13 = document.querySelector('.author13');
        author13.classList.add('Schopenhauer13');
        author13.innerHTML = card.author;
      }
      if(num == 14){
        const author14 = document.querySelector('.author14');
        author14.classList.add('Schopenhauer14');
        author14.innerHTML = card.author;
      }
      if(num == 15){
        const author15 = document.querySelector('.author15');
        author15.classList.add('Schopenhauer15');
        author15.innerHTML = card.author;
      }
  }
}


  // function cssArtificial 
  function cssArtificial(card, num){
    if(card.author == 'Artificial'){
      if(num == 1){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit1'); 
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;
        const a1 = document.querySelector('.author1'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power1'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card1');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
      if(num == 2){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit2');
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;
        const a1 = document.querySelector('.author2'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power2'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card2');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
      if(num == 3){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit3');
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;
        const a1 = document.querySelector('.author3'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power3'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card3');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
      if(num == 4){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit4');
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;
        const a1 = document.querySelector('.author4'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power4'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card4');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
      if(num == 11){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit11');
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;
        const a1 = document.querySelector('.author11'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power11'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card11');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
      if(num == 12){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit12');
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;
        const a1 = document.querySelector('.author12'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power12'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card12');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
      if(num == 13){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit13');
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;
        const a1 = document.querySelector('.author13'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power13'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card13');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
      if(num == 14){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit14');
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;
        const a1 = document.querySelector('.author14'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power14'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card14');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
      if(num == 15){
        card.suit = Variables.ArtificialSuit();
        const s1 = document.querySelector('.suit15');
        s1.style.display = 'block';
        s1.style.color = "opacity: 0.6";
        s1.innerHTML = card.suit;        
        const a1 = document.querySelector('.author15'); 
        a1.style.display = 'none';  
        const p1 = document.querySelector('.power15'); 
        p1.style.display = 'none';             
        const cardHTML = document.querySelector('.card15');
        cardHTML.style.backgroundImage = `url('artificial.png')`;
        // change the background image of the card to fit the size of the card
        cardHTML.style.backgroundSize = 'cover';
        cardHTML.style.backgroundPosition = 'center';      
        // no card boder
        cardHTML.style.border = 'none';
      }
    }
  }
   
 function distributeCards1() {     
  cleanAllCommunityCards();
  cleanHands();
      // player 1 cards face down      
      const card1FaceDown = document.createElement("div");  
      card1FaceDown.classList.add("card");
      card1FaceDown.innerHTML = `
        <div class="card1FaceDown"> </div>
      `;
      Variables.player1HandHTML.appendChild(card1FaceDown);

      const card2FaceDown = document.createElement("div");
      card2FaceDown.classList.add("card");
      card2FaceDown.innerHTML = `
        <div class="card2FaceDown"> </div>
      `;
      Variables.player1HandHTML.appendChild(card2FaceDown);
          
      // player 2 cards face down      
      const card3FaceDown = document.createElement("div");
      card3FaceDown.classList.add("card");
      card3FaceDown.innerHTML = `
        <div class="card3FaceDown"> </div>
      `;
      Variables.player2HandHTML.appendChild(card3FaceDown);     

      const card4FaceDown = document.createElement("div");
      card4FaceDown.classList.add("card");
      card4FaceDown.innerHTML = `
        <div class="card4FaceDown"> </div>
      `;
      Variables.player2HandHTML.appendChild(card4FaceDown);     
      setTimeout(function(){
      cardsPlayer1FaceUp();
      }, 1000);
      return Variables.deck;
    }  

    function cardsPlayer1FaceUp() {      
      const card1FaceDown = document.querySelector('.card1FaceDown');    
      card1FaceDown.classList.toggle('flipped');  
      const card2FaceDown = document.querySelector('.card2FaceDown');    
      card2FaceDown.classList.toggle('flipped');   

      const [ card1 ] = spliceRandomCardFromDeck();
      const [ card2 ] = spliceRandomCardFromDeck() 
      console.log('card1:',card1); console.log('card2:',card2); 
      // to player 1
      Variables.player1.hand = [card1, card2];  
      console.log("player1.hand: ", Variables.player1.hand);

      setTimeout(function(){        
        
        const cardEl = document.querySelector(".card1FaceDown");       
          cardEl.innerHTML = `
            <div class="Elysium1">
              <div class="author1">${card1.author}</div> <BR>
              <div class="suit1">${ card1.suit}</div> <BR>        
              <div class="power1">${card1.power}</div>        
            </div>    
          `;            
          Variables.player1HandHTML.appendChild(cardEl);               
          // flip the card again
          cardEl.classList.add("card1");
          cardEl.style.backgroundImage = `url('tombstone.png')`;

          setTimeout(function(){
            cardEl.classList.toggle('flipped');            
            }, 100);
          responsiveSchopenhauer(card1, 1);
          cssElysium(card1, 1);   
          cssArtificial(card1, 1);
          changeColorOfSuit(card1, '.suit1');
      
        const cardE2 = document.querySelector(".card2FaceDown");     
          cardE2.innerHTML = `
          <div class="Elysium2">
            <div class="author2">${card2.author}</div> <BR>
            <div class="suit2">${card2.suit}</div> <BR>
            <div class="power2">${card2.power}</div>
          </div>
          `;
          Variables.player1HandHTML.appendChild(cardE2);      
          // flip the card again
          cardE2.classList.add("card2");
          cardE2.style.backgroundImage = `url('tombstone.png')`;
          
          setTimeout(function(){
            cardE2.classList.toggle('flipped');            
            }, 100);
          responsiveSchopenhauer(card2, 2);
          cssElysium(card2, 2);
          cssArtificial(card2, 2);
          changeColorOfSuit(card2, '.suit2');
      }, 1500);
    }


  function distributeCards2() {        
     const card3FaceDown = document.querySelector('.card3FaceDown');    
    card3FaceDown.classList.toggle('flipped');

    const card4FaceDown = document.querySelector('.card4FaceDown');    
    card4FaceDown.classList.toggle('flipped');    
    
    setTimeout(function(){
        // to player 2
        const [ card3 ] = spliceRandomCardFromDeck();
        const [ card4 ] =  spliceRandomCardFromDeck();
        console.log('card3:',card3); console.log('card4:',card4);
          Variables.player2.hand = [card3, card4];          
          const cardE3 = document.querySelector('.card3FaceDown');      
          cardE3.innerHTML = `
          <div class="Elysium3">
            <div class="author3">${card3.author}</div> <BR>
            <div class="suit3">${card3.suit}</div> <BR>
            <div class="power3">${card3.power}</div>
          </div>
          `;
          Variables.player2HandHTML.appendChild(cardE3);
          // flip the card again
          cardE3.classList.add("card3");
          cardE3.style.backgroundImage = `url('tombstone.png')`;

          setTimeout(function(){
          cardE3.classList.toggle('flipped');
          
          }, 100);
          responsiveSchopenhauer(card3, 3);
          cssElysium(card3, 3);
          cssArtificial(card3, 3);
          changeColorOfSuit(card3, '.suit3');      

          const cardE4 = document.querySelector('.card4FaceDown');          
          cardE4.innerHTML = `
          <div class="Elysium4">
            <div class="author4">${card4.author}</div> <BR>
            <div class="suit4">${card4.suit}</div> <BR>
            <div class="power4">${card4.power}</div>
          </div>
          `;          
          Variables.player2HandHTML.appendChild(cardE4);
          // flip the card again
          cardE4.classList.add("card4");          
          cardE4.style.backgroundImage = `url('tombstone.png')`;
          
          setTimeout(function(){
            cardE4.classList.toggle('flipped');
          }, 100);
          responsiveSchopenhauer(card4, 4);
          cssElysium(card4, 4);
          cssArtificial(card4, 4);
          changeColorOfSuit(card4, '.suit4');
    }, 3000);

    return Variables.deck;
  }  
  
  // function to put one card at a time on the community cards
  function addCardOnCommunityCards1() {           
      const [card11] = spliceRandomCardFromDeck();   
      console.log('card11:', card11); 
      Variables.allCommunityCards = [...Variables.allCommunityCards, card11];   
      const cardEl = document.createElement("div");
      cardEl.classList.add( 'center11',"card11");
      cardEl.innerHTML = `
      <div class="Elysium11">
        <div class="author11">${card11.author}</div> <BR>
        <div class="suit11">${card11.suit}</div> <BR>
        <div class="power11">${card11.power}</div>
      </div>
      `;
       Variables.allCommunityCardsHTML.appendChild(cardEl);
       responsiveSchopenhauer(card11, 11)
       cssElysium(card11, 11);
        cssArtificial(card11, 11);
       changeColorOfSuit(card11, '.suit11');    

       setTimeout(function(){
        cardEl.classList.add('onSide11');
       }, 1500);

      return Variables.deck;
  }

  function addCardOnCommunityCards2() {           
    const [card12] = spliceRandomCardFromDeck();   
    console.log('card12:', card12);
    //const cardObject = JSON.parse(JSON.stringify(card));
    Variables.allCommunityCards = [...Variables.allCommunityCards, card12];   
    const cardEl = document.createElement("div");
    cardEl.classList.add( 'center12',"card12");
    cardEl.innerHTML = `
    <div class="Elysium12">
      <div class="author12">${card12.author}</div> <BR>
      <div class="suit12">${card12.suit}</div> <BR>
      <div class="power12">${card12.power}</div>
    </div>
    `;
     Variables.allCommunityCardsHTML.appendChild(cardEl);
     responsiveSchopenhauer(card12, 12);
     cssElysium(card12, 12);
     cssArtificial(card12, 12);
     changeColorOfSuit(card12, '.suit12');   

     setTimeout(function(){
      cardEl.classList.add('onSide12');
     }, 1500);

    return Variables.deck;
}

function addCardOnCommunityCards3() {           
  const [card13] = spliceRandomCardFromDeck(); 
  console.log('card13:', card13);
  Variables.allCommunityCards = [...Variables.allCommunityCards, card13];   
  const cardEl = document.createElement("div");
  cardEl.classList.add( 'center13',"card13");
  cardEl.innerHTML = `
  <div class="Elysium13">
    <div class="author13">${card13.author}</div> <BR>
    <div class="suit13">${card13.suit}</div> <BR>
    <div class="power13">${card13.power}</div>
  </div>
  `;
   Variables.allCommunityCardsHTML.appendChild(cardEl);
   responsiveSchopenhauer(card13, 13);
   cssElysium(card13, 13);
   cssArtificial(card13, 13);
   changeColorOfSuit(card13, '.suit13');   
   
   setTimeout(function(){
    cardEl.classList.add('onSide13');
   }, 1500);

  return Variables.deck;
}

function addCardOnCommunityCards4() {           
  const [card14] = spliceRandomCardFromDeck();   
  console.log('card14:', card14);
  //const cardObject = JSON.parse(JSON.stringify(card));
  Variables.allCommunityCards = [...Variables.allCommunityCards, card14];   
  const cardEl = document.createElement("div");
  cardEl.classList.add("card14");
  cardEl.innerHTML = `
  <div class="Elysium14">
    <div class="author14">${card14.author}</div> <BR>
    <div class="suit14">${card14.suit}</div> <BR>
    <div class="power14">${card14.power}</div>
  </div>
  `;
   Variables.allCommunityCardsHTML.appendChild(cardEl);
   responsiveSchopenhauer(card14, 14);
   cssElysium(card14, 14);
    cssArtificial(card14, 14);
   changeColorOfSuit(card14, '.suit14');   

   setTimeout(function(){
    cardEl.classList.add('onPlace14');
   }, 500);
   
  return Variables.deck;
}

function addCardOnCommunityCards5() {           
  const [card15] = spliceRandomCardFromDeck();     
  console.log('card15:', card15);
  //const cardObject = JSON.parse(JSON.stringify(card));
  Variables.allCommunityCards = [...Variables.allCommunityCards, card15];   
  const cardEl = document.createElement("div");
  cardEl.classList.add("card15");
  cardEl.innerHTML = `
  <div class="Elysium15">
    <div class="author15">${card15.author}</div> <BR>
    <div class="suit15">${card15.suit}</div> <BR>
    <div class="power15">${card15.power}</div>
  </div>
  `;
   Variables.allCommunityCardsHTML.appendChild(cardEl);
   responsiveSchopenhauer(card15, 15);
   cssElysium(card15, 15);
    cssArtificial(card15, 15);
   changeColorOfSuit(card15, '.suit15');   

   setTimeout(function(){
    cardEl.classList.add('onPlace15');
   }, 500);

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

  export { shuffleDeck, cleanAllCommunityCards, distributeCards1, distributeCards2, addCardOnCommunityCards1, addCardOnCommunityCards2, addCardOnCommunityCards3, addCardOnCommunityCards4, addCardOnCommunityCards5,  concatenateHand, cardsPlayer1FaceUp };

