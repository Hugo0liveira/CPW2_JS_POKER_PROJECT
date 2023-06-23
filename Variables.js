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
// var allCommunityCards = document.querySelectorAll(".community-cards");
var allCommunityCards = "";
var game = 0; var conditionsPreflop=0; var conditionsFlop=0; var conditionsTurn=0; var conditionsRiver=0;
var preflop = 0; var flop=0; var turn=0; var river=0; var fold = 0; var call = 0; var comparehands=0; var conditionsComparehands=0;
var check = 0; var raise = 0; var risk = 67100000; var years = 0; var gameOver = "ALL DEAD";
// var infoYears = document.querySelector(".yearsSurviving");
// var infoYears;
// infoYears.innerHTML = years; 
// var infoRisk = document.querySelector(".riskauthor");
// var infoRisk;
// infoRisk.innerHTML = risk;
var deck = originalDeck; 
var initialMessage = "Behind every man now alive stand thirty ghosts, for that is the ratio by which the dead outnumber the living. Since the dawn of time, roughly a hundred billion human beings have walked the planet Earth.\n\n Now this is an interesting number, for by a curious coincidence there are approximately a hundred billion stars in our local universe, the Milky Way. So for every man who has ever lived, in this Universe there shines a star.\n\n But every one of those stars is a sun, often far more brilliant and glorious than the small, nearby star we call the Sun. And many--perhaps most--of those alien suns have planets circling them. So almost certainly there is enough land in the sky to give every member of the human species, back to the first ape-man, his own private, world-sized heaven--or hell.\n\n How many of those potential heavens and hells are now inhabited, and by what manner of creatures, we have no way of guessing; the very nearest is a million times farther away than Mars or Venus, those still remote goals of the next generation. But the barriers of distance are crumbling; one day we shall meet our equals, or our masters, among the stars.\n\nMen have been slow to face this prospect; \nsome still hope that it may never become reality. Increasing numbers, however are asking; Why have such meetings not occurred already, since we ourselves are about to venture into space?\n\n  Why not, indeed? Here is one possible answer to that very reasonable question. But please remember: this is only a work of fiction.\n\n The truth, as always, will be far stranger.\n\n ― Arthur C. Clarke, 2001: A Space Odyssey";

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

export { Player, deck, originalDeck, allCommunityCards, game, conditionsPreflop, conditionsFlop, conditionsTurn, conditionsRiver, preflop, flop, turn, river, fold, call, comparehands, conditionsComparehands, check, raise, risk, years, gameOver, initialMessage };