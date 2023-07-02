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

const originalDeck = [
  { power: -2, author: 'Thomas Ligotti', suit: 'suicide' }, { power: -2, author: 'Thomas Ligotti', suit: 'contemplation' }, { power: -2, author: 'Thomas Ligotti', suit: 'domination' }, { power: -2, author: 'Thomas Ligotti', suit: 'revolution' },
  { power: -1, author: 'Schopenhauer', suit: 'suicide' }, { power: -1, author: 'Schopenhauer', suit: 'contemplation' }, { power: -1, author: 'Schopenhauer', suit: 'domination' }, { power: -1, author: 'Schopenhauer', suit: 'revolution' },
  { power: 1, author: 'Karl Marx', suit: 'suicide' }, { power: 1, author: 'Karl Marx', suit: 'contemplation' }, { power: 1, author: 'Karl Marx', suit: 'domination' }, { power: 1, author: 'Karl Marx', suit: 'revolution' },
  { power: 2, author: 'Nietzsche', suit: 'suicide' }, { power: 2, author: 'Nietzsche', suit: 'contemplation' }, { power: 2, author: 'Nietzsche', suit: 'domination' }, { power: 2, author: 'Nietzsche', suit: 'revolution' },
  { power: 3, author: 'Peter Berger', suit: 'suicide' }, { power: 3, author: 'Peter Berger', suit: 'contemplation' }, { power: 3, author: 'Peter Berger', suit: 'domination' }, { power: 3, author: 'Peter Berger', suit: 'revolution' },
  { power: 4, author: 'Félix Guattari', suit: 'suicide' }, { power: 4, author: 'Félix Guattari', suit: 'contemplation' }, { power: 4, author: 'Félix Guattari', suit: 'domination' }, { power: 4, author: 'Félix Guattari', suit: 'revolution' },
  { power: 5, author: 'Guy Debord', suit: 'suicide' }, { power: 5, author: 'Guy Debord', suit: 'contemplation' }, { power: 5, author: 'Guy Debord', suit: 'domination' }, { power: 5, author: 'Guy Debord', suit: 'revolution' },
  { power: 6, author: 'Slavoj Zizek', suit: 'suicide' }, { power: 6, author: 'Slavoj Zizek', suit: 'contemplation' }, { power: 6, author: 'Slavoj Zizek', suit: 'domination' }, { power: 6, author: 'Slavoj Zizek', suit: 'revolution' },
  { power: 7, author: 'Erving Goffman', suit: 'suicide' }, { power: 7, author: 'Erving Goffman', suit: 'contemplation' }, { power: 7, author: 'Erving Goffman', suit: 'domination' }, { power: 7, author: 'Erving Goffman', suit: 'revolution' },  
  { power: 8, author: 'Jean Baudrillard', suit: 'suicide' }, { power: 8, author: 'Jean Baudrillard', suit: 'contemplation' }, { power: 8, author: 'Jean Baudrillard', suit: 'domination' }, { power: 8, author: 'Jean Baudrillard', suit: 'revolution' },
  { power: 9, author: 'Noam Chomsky', suit: 'suicide' }, { power: 9, author: 'Noam Chomsky', suit: 'contemplation' }, { power: 9, author: 'Noam Chomsky', suit: 'domination' }, { power: 9, author: 'Noam Chomsky', suit: 'revolution' },
  { power: 10, author: 'Yuval Harari', suit: 'suicide' }, { power: 10, author: 'Yuval Harari', suit: 'contemplation' }, { power: 10, author: 'Yuval Harari', suit: 'domination' }, { power: 10, author: 'Yuval Harari', suit: 'revolution' },
  { power: 11, author: 'Thomas Metzinger', suit: 'suicide' }, { power: 11, author: 'Thomas Metzinger', suit: 'contemplation' }, { power: 11, author: 'Thomas Metzinger', suit: 'domination' }, { power: 11, author: 'Thomas Metzinger', suit: 'revolution' },
  { power: 12, author: 'Patricia Churchland', suit: 'suicide' }, { power: 12, author: 'Patricia Churchland', suit: 'suicide' }, { power: 12, author: 'Patricia Churchland', suit: 'contemplation' }, { power: 12, author: 'Patricia Churchland', suit: 'domination' },
  { power: 13, author: 'Robert Sapolsky', suit: 'suicide' }, { power: 13, author: 'Robert Sapolsky', suit: 'contemplation' }, { power: 13, author: 'Robert Sapolsky', suit: 'domination' }, { power: 13, author: 'Robert Sapolsky', suit: 'revolution' }  
];

const allCommunityCardsHTML = document.querySelector(".community-cards");
const allCommunityCards = [];
const game = 0; const conditionsPreflop=0; const conditionsFlop=0; const conditionsTurn=0; const conditionsRiver=0;
const preflop = 0; const flop=0; const turn=0; const river=0; const fold = 0; const call = 0; const comparehands=0; const conditionsComparehands=0;
const check = 0; const raise = 0; const risk = 67100000; const years = 300000; 
const infoYears = document.querySelector(".yearsSurviving"); 
const infoRisk = document.querySelector(".riskValue");
var deck = [];
const initialMessage1 = "Behind every man now alive stand thirty ghosts, for that is the ratio by which the dead outnumber the living. Since the dawn of time, roughly a hundred billion human beings have walked the planet Earth.\n\n Now this is an interesting number, for by a curious coincidence there are approximately a hundred billion stars in our local universe, the Milky Way. So for every man who has ever lived, in this Universe there shines a star.\n\n But every one of those stars is a sun, often far more brilliant and glorious than the small, nearby star we call the Sun. And many--perhaps most--of those alien suns have planets circling them. So almost certainly there is enough land in the sky to give every member of the human species, back to the first ape-man, his own private, world-sized heaven--or hell.\n\n How many of those potential heavens and hells are now inhabited, and by what manner of creatures, we have no way of guessing; the very nearest is a million times farther away than Mars or Venus, those still remote goals of the next generation. But the barriers of distance are crumbling; one day we shall meet our equals, or our masters, among the stars.";
const initialMessage2 = "Men have been slow to face this prospect; some still hope that it may never become reality. Increasing numbers, however are asking; Why have such meetings not occurred already, since we ourselves are about to venture into space?\n\n  Why not, indeed? Here is one possible answer to that very reasonable question. But please remember: this is only a work of fiction.\n\n The truth, as always, will be far stranger.\n\n ― Arthur C. Clarke, 2001: A Space Odyssey";
const initialMessage0 = "Just remember, you can lie to yourself all you want, but never to Death!";
const messageFold = "It's evolution, baby!";
const messageCohle1 = "Death created time to grow the things that it would kill.";
const messageCohle2 = "And time... You know time is a flat circle. Everything we have done or will do we will do over and over and over again—forever. \n\n    Rust Cohle";
const messageDoTheEvolution1 = "I'm a thief, I'm a liar There's my church, I sing in the choir: Hallelujah! Hallelujah!";
const messageDoTheEvolution2 = "Admire me, admire my home, admire my son, admire my clones 'Cause we know, appetite for a nightly feast!";
const messageDoTheEvolution3 = "I am ahead, I am advanced, I am the first mammal to make plans, yeah!";
const messageDoTheEvolution4 = "Ah, do the evolution! Come on, come on, come on!";
const messageNietzscheWin1 = "What is the strongest cure? --Victory.";
const messageNietzscheWin2 = '"If one shifts the centre of gravity of life out of life into the “Beyond”—into nothingness—one has deprived life as such of its centre of gravity. The great lie of personal immortality destroys all rationality, all naturalness of instinct—all that is salutary, all that is life-furthering. . . . So to live that there is no longer any meaning in living: that now becomes the “meaning” of life. . . . Christianity has waged a war to the death against every feeling of reverence and distance between man and man . . . against everything noble, joyful, high-spirited on earth, against our happiness on earth."\n\n     Friedrich Nietzsche';
const messageYuvalWin1 = "Ever since the Cognitive Revolution, Sapiens have thus been living in a dual reality. On the one hand, the objective reality of rivers, trees and lions; and on the other hand, the imagined reality of gods, nations and corporations. As time went by, the imagined reality became ever more powerful, so that today the very survival of rivers, trees and lions depends on the grace of imagined entities such as the United States and Google.\n\n     Yuval Harari";
const messageSapolskyWin1 = "We're a miserably violent species. But there's a complication, which is we don't hate violence, we hate the wrong kind. And when it's the right kind, we cheer it on, we hand out medals, we vote for, we mate with our champions of it. When it's the right kind of violence, we love it.\n\n     Robert Sapolsky";
const messageChomskyWin = "If you assume that there is no hope, you guarantee that there will be no hope. If you assume that there is an instinct for freedom, that there are opportunities to change things, then there is a possibility that you can contribute to making a better world.\n\n     Noam Chomsky";
const messageCohleWin = "Once there was only dark. If you ask me, the light's winning.\n\n     Rust Cohle";

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

const player1 = new Player("Humanity", 8000000000);
const chips1Html = document.querySelector(".player1-chips");
chips1Html.innerHTML = player1.chips.toLocaleString('en-US');
const player2 = new Player("Death", 100000000000);
const chips2Html = document.querySelector(".player2-chips");
chips2Html.innerHTML = player2.chips.toLocaleString('en-US');
const player1HandHTML = document.querySelector(".player1-hand");
const player2HandHTML = document.querySelector(".player2-hand");

infoYears.innerHTML = years.toLocaleString('en-US');     
infoRisk.innerHTML = risk.toLocaleString('en-US');     

export const Variables = {
  player1: player1, 
  player2: player2,
  deck: deck,
  originalDeck: originalDeck,
  initialMessage0: initialMessage0,
  initialMessage1: initialMessage1,
  initialMessage2: initialMessage2,
  messageFold: messageFold,
  messageCohle1: messageCohle1,
  messageCohle2: messageCohle2,
  messageCohleWin: messageCohleWin,
  messageDoTheEvolution1: messageDoTheEvolution1,
  messageDoTheEvolution2: messageDoTheEvolution2,
  messageDoTheEvolution3: messageDoTheEvolution3,
  messageDoTheEvolution4: messageDoTheEvolution4,
  messageNietzscheWin1: messageNietzscheWin1,
  messageNietzscheWin2: messageNietzscheWin2,
  messageYuvalWin1: messageYuvalWin1,
  messageSapolskyWin1: messageSapolskyWin1,
  messageChomskyWin: messageChomskyWin,
  allCommunityCardsHTML: allCommunityCardsHTML,
  allCommunityCards: allCommunityCards,
  game: game,
  conditionsPreflop: conditionsPreflop,
  conditionsFlop: conditionsFlop,
  conditionsTurn: conditionsTurn,
  conditionsRiver: conditionsRiver,
  preflop: preflop,
  flop: flop,
  turn: turn,
  river: river,
  fold: fold,
  call: call,
  comparehands: comparehands,
  conditionsComparehands: conditionsComparehands,
  check: check,
  raise: raise,
  risk: risk,
  years: years,
  infoYears: infoYears,
  infoRisk: infoRisk ,
  chips1Html: chips1Html,
  chips2Html: chips2Html,
  player1HandHTML: player1HandHTML,
  player2HandHTML: player2HandHTML
}
