import { shuffleDeck, cleanAllCommunityCards, distributeCards, addCardOnCommunityCards, concatenateHand } from "./DeckManipulation.js";
import {royalflush} from "./RoyalFlush.js";
import {straightflushPower, straightflush} from "./StraightFlush.js";
import {fourOfaKindKicker, fourOfaKindPower, fourOfaKind} from "./FourOfAKind.js";
import { fullhousePairPower, fullhouseThreeOfAKindPower, fullhouse } from "./FullHouse.js";
import {flush, flushKickerOne, flushKickerTwo, flushKickerThree, flushKickerFour, flushKickerFive} from "./Flush.js";
import  {straight, straightPower} from "./Straight.js";
import  {threeOfAKind, threeOfAKindPower, threeOfAKindKickerOne, threeOfAKindKickerTwo} from "./ThreeOfAKind.js";
import { twoPairKicker, worstPairPower, bestPairPower, twoPair } from "./TwoPair.js";
import { pair, pairPower, pairKickerOne, pairKickerTwo, pairKickerThree} from "./Pair.js";
import  {higherCard, higherCardTwo, higherCardThree  } from "./HighCard.js";

  // returns 0 if is a tie. returns 1 if player1 wins. returns 2 if player2 wins.
  function determineWinnersHand(player1, player2, allCommunityCards) {
    player1 = concatenateHand(player1, allCommunityCards);
    player2 = concatenateHand(player2, allCommunityCards);
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
  

export{determineWinnersHand};