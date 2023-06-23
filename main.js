import {Player, deck, originalDeck, allCommunityCards, game, conditionsPreflop, conditionsFlop, conditionsTurn, conditionsRiver, preflop, flop, turn, river, fold, call, comparehands, conditionsComparehands, check, raise, risk, years, gameOver, initialMessage} from "./Variables.js"
import { PhasePreFlop } from "./RoundPhases.js"

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