import { Variables } from "./Variables.js";
import { concatenateHand } from "./DeckManipulation.js";
import {royalflush} from "./RoyalFlush.js";
import {straightflushPower, straightflush} from "./StraightFlush.js";
import {fourOfaKindKicker, fourOfaKindPower, fourOfaKind} from "./FourOfAKind.js";
import { fullhousePairPower, fullhouseThreeOfAKindPower, fullhouse } from "./FullHouse.js";
import {flushFunction, flushKickerOne, flushKickerTwo, flushKickerThree, flushKickerFour, flushKickerFive} from "./Flush.js";
import  {straight, straightPower} from "./Straight.js";
import  {threeOfAKind, threeOfAKindPower, threeOfAKindKickerOne, threeOfAKindKickerTwo} from "./ThreeOfAKind.js";
import { twoPairKicker, worstPairPower, bestPairPower, twoPair } from "./TwoPair.js";
import { pair, pairPower, pairKickerOne, pairKickerTwo, pairKickerThree} from "./Pair.js";
import  {higherCard, higherCardTwo, higherCardThree, higherCardFour, higherCardFive } from "./HighCard.js";

  // returns 0 if is a tie. returns 1 if Variables.player1 wins. returns 2 if Variables.player2 wins.
  function determineWinnersHand() {
    Variables.player1.hand = concatenateHand(Variables.player1);
    Variables.player2.hand = concatenateHand(Variables.player2);
      // determine winner
      //console.log("player1.hand: ", Variables.player1.hand);
     // console.log("player2.hand: ", Variables.player2.hand);
      var royalflush1 = royalflush(Variables.player1);
      var royalflush2 = royalflush(Variables.player2);
      if(royalflush1 == 1 && royalflush2 == 1) {      
          console.log("It's a tie!");  
          window.alert( "It's a tie!");   
          return 0;    
      } else if (royalflush1 == 1 && royalflush2 == 0) {
        console.log("Humanity wins with a royal flush!");
        window.alert("Humanity wins with a royal flush!");
        return 1;
      } else if (royalflush1 == 0 && royalflush2 == 1) {
        console.log("DEATH wins with a royal flush!");
        window.alert("DEATH wins with a royal flush!");
        return 2;
      } else if (royalflush1 == 0 && royalflush2 == 0) {
      
        var straightflush1 = straightflush(Variables.player1);
        var straightflush2 = straightflush(Variables.player2);
        var straightflush1Power = straightflushPower(Variables.player1);
        var straightflush2Power = straightflushPower(Variables.player2);

          if(straightflush1 == 1 && straightflush2 == 1) {      
            if (straightflush1Power > straightflush2Power) {
              console.log("Humanity wins with a straight flush!");
              window.alert("Humanity wins with a straight flush!");
              return 1;
            } else if (straightflush2Power > straightflush1Power) {
              console.log("DEATH wins with a straight flush!");
              window.alert("DEATH wins with a straight flush!");
              return 2;
            } else {
              console.log("It's a tie!");
              window.alert("It's a tie!");
              return 0;
            }
        } else if(straightflush1 == 1 && straightflush2 == 0) {
          console.log("Humanity wins with a straight flush!");
          window.alert("Humanity wins with a straight flush!");
          return 1;
        } else if(straightflush1 == 0 && straightflush2 == 1) {
          console.log("DEATH wins with a straight flush!");
          window.alert("DEATH wins with a straight flush!");
          return 2;
        } else if(straightflush1 == 0 && straightflush2 == 0) {

          var four1 = fourOfaKind(Variables.player1);
          var four2 = fourOfaKind(Variables.player2);
          var four1Power = fourOfaKindPower(Variables.player1);
          var four2Power = fourOfaKindPower(Variables.player2);
          var kicker1 = fourOfaKindKicker(Variables.player1);
          var kicker2 = fourOfaKindKicker(Variables.player2);

          if(four1 == 1 && four2 == 1) {
              if (four1Power > four2Power) {
                console.log("Humanity wins with four of a kind!");
                window.alert("Humanity wins with four of a kind!");
                return 1;
              } else if (four2Power > four1Power) {
                console.log("DEATH wins with four of a kind!");
                window.alert("DEATH wins with four of a kind!");
                return 2;
              } else if (kicker1 > kicker2) {
                console.log("Humanity wins with four of a kind!");
                window.alert("Humanity wins with four of a kind!");
                return 1;
              } else if (kicker2 > kicker1) {
                console.log("DEATH wins with four of a kind!");
                window.alert("DEATH wins with four of a kind!");
                return 2;
              } else {
                console.log("It's a tie!");
                window.alert("It's a tie!");
                return 0;
              }
          } else if(four1 == 1 && four2 == 0) {
              console.log("Humanity wins with four of a kind!");
              window.alert("Humanity wins with four of a kind!");
              return 1;
          } else if(four1 == 0 && four2 == 1) {
              console.log("DEATH wins with four of a kind!");
              window.alert("DEATH wins with four of a kind!");
              return 2;
          } else if(four1 == 0 && four2 == 0) {
            
            var fullhouse1 = fullhouse(Variables.player1);
            var fullhouse2 = fullhouse(Variables.player2);
            var threeOfAKind1Power = fullhouseThreeOfAKindPower(Variables.player1);
            var threeOfAKind2Power = fullhouseThreeOfAKindPower(Variables.player2);
            var Pair1Power = fullhousePairPower(Variables.player1);
            var Pair2Power = fullhousePairPower(Variables.player2);
            
            if(fullhouse1 == 1 && fullhouse2 == 1) {
                if (threeOfAKind1Power > threeOfAKind2Power) {
                  console.log("Humanity wins with a full house!");
                  window.alert("Humanity wins with a full house!");
                  return 1;
                }
                else if (threeOfAKind2Power > threeOfAKind1Power) {
                  console.log("DEATH wins with a full house!");
                  window.alert("DEATH wins with a full house!");
                  return 2;
                }
                else if (Pair1Power > Pair2Power) {
                  console.log("Humanity wins with a full house!");
                  window.alert("Humanity wins with a full house!");
                  return 1;
                }
                else if (Pair2Power > Pair1Power) {
                  console.log("DEATH wins with a full house!");
                  window.alert("DEATH wins with a full house!");
                  return 2;
                } else {
                  console.log("It's a tie!");
                  window.alert("It's a tie!");
                  return 0;
                }
            } else if(fullhouse1 == 1 && fullhouse2 == 0) {
                console.log("Humanity wins with a full house!");
                window.alert("Humanity wins with a full house!");
                return 1;
            } else if(fullhouse1 == 0 && fullhouse2 == 1) {
                console.log("DEATH wins with a full house!");
                window.alert("DEATH wins with a full house!");
                return 2;
            } else if(fullhouse1 == 0 && fullhouse2 == 0) {

              var flush1 = flushFunction( Variables.player1 );
              var flush2 = flushFunction(Variables.player2);
              var flush1One = flushKickerOne(Variables.player1);
              var flush2One = flushKickerOne(Variables.player2);
              var flush1Two = flushKickerTwo(Variables.player1);
              var flush2Two = flushKickerTwo(Variables.player2);
              var flush1Three = flushKickerThree(Variables.player1);
              var flush2Three = flushKickerThree(Variables.player2);
              var flush1Four = flushKickerFour(Variables.player1);
              var flush2Four = flushKickerFour(Variables.player2);
              var flush1Five = flushKickerFive(Variables.player1);
              var flush2Five = flushKickerFive(Variables.player2);
              
              if(flush1 == 1 && flush2 == 1) {
                  if (flush1One > flush2One) {
                    console.log("Humanity wins with a flush!");
                    window.alert("Humanity wins with a flush!");
                    return 1;
                  }
                  else if (flush2One > flush1One) {
                    console.log("DEATH wins with a flush!");
                    window.alert("DEATH wins with a flush!");
                    return 2;
                  }
                  else if (flush1Two > flush2Two) {
                    console.log("Humanity wins with a flush!");
                    window.alert("Humanity wins with a flush!");
                    return 1;
                  }
                  else if (flush2Two > flush1Two) {
                    console.log("DEATH wins with a flush!");
                    window.alert("DEATH wins with a flush!");
                    return 2;
                  }
                  else if (flush1Three > flush2Three) {
                    console.log("Humanity wins with a flush!");
                    window.alert("Humanity wins with a flush!");
                    return 1;
                  }
                  else if (flush2Three > flush1Three) {
                    console.log("DEATH wins with a flush!");
                    window.alert("DEATH wins with a flush!");
                    return 2;
                  }
                  else if (flush1Four > flush2Four) {
                    console.log("Humanity wins with a flush!");
                    window.alert("Humanity wins with a flush!");
                    return 1;
                  }
                  else if (flush2Four > flush1Four) {
                    console.log("DEATH wins with a flush!");
                    window.alert("DEATH wins with a flush!");
                    return 2;
                  }
                  else if (flush1Five > flush2Five) {
                    console.log("Humanity wins with a flush!");
                    window.alert("Humanity wins with a flush!");
                    return 1;
                  }
                  else if (flush2Five > flush1Five) {
                    console.log("DEATH wins with a flush!");
                    window.alert("DEATH wins with a flush!");
                    return 2;
                  } else {
                    console.log("It's a tie!");
                    window.alert("It's a tie!");
                    return 0;
                  }
              } else if(flush1 == 1 && flush2 == 0) {
                  console.log("Humanity wins with a flush!");
                  window.alert("Humanity wins with a flush!");
                  return 1;
              } else if(flush1 == 0 && flush2 == 1) {
                  console.log("DEATH wins with a flush!");
                  window.alert("DEATH wins with a flush!");
                  return 2;
              } else if(flush1 == 0 && flush2 == 0) {

                var straight1 = straight(Variables.player1);
                var straight2 = straight(Variables.player2);
                var straight1Power = straightPower(Variables.player1);
                var straight2Power = straightPower(Variables.player2);
                
                if(straight1 == 1 && straight2 == 1) {
                    if (straight1Power > straight2Power) {
                      console.log("Humanity wins with a straight!");
                      window.alert("Humanity wins with a straight!");
                      return 1;
                    }
                    else if (straight2Power > straight1Power) {
                      console.log("DEATH wins with a straight!");
                      window.alert("DEATH wins with a straight!");
                      return 2;
                    } else {
                      console.log("It's a tie!");
                      window.alert("It's a tie!");
                      return 0;
                    }
                } else if(straight1 == 1 && straight2 == 0) {
                    console.log("Humanity wins with a straight!");
                    window.alert("Humanity wins with a straight!");
                    return 1;
                } else if(straight1 == 0 && straight2 == 1) {
                    console.log("DEATH wins with a straight!");
                    window.alert("DEATH wins with a straight!");
                    return 2;
                } else if(straight1 == 0 && straight2 == 0) {

                  var threeOfAKind1 = threeOfAKind(Variables.player1);
                  var threeOfAKind2 = threeOfAKind(Variables.player2);
                  var threeOfAKind1Power = threeOfAKindPower(Variables.player1);
                  var threeOfAKind2Power = threeOfAKindPower(Variables.player2);
                  var threeOfAKind1KickerOne = threeOfAKindKickerOne(Variables.player1);
                  var threeOfAKind2KickerOne = threeOfAKindKickerOne(Variables.player2);
                  var threeOfAKind1KickerTwo = threeOfAKindKickerTwo(Variables.player1);                  
                  var threeOfAKind2KickerTwo = threeOfAKindKickerTwo(Variables.player2);                  
                  
                  if(threeOfAKind1 == 1 && threeOfAKind2 == 1) {
                      if (threeOfAKin1Power > threeOfAKind2Power) {
                        console.log("Humanity wins with three of a kind!");
                        window.alert("Humanity wins with three of a kind!");
                        return 1;
                      }
                      else if (threeOfAKind2Power > threeOfAKind1Power) {
                        console.log("DEATH wins with three of a kind!");
                        window.alert("DEATH wins with three of a kind!");
                        return 2;
                      }
                      else if (threeOfAKind1KickerOne > threeOfAKind2KickerOne) {
                        console.log("Humanity wins with three of a kind!");
                        window.alert("Humanity wins with three of a kind!");
                        return 1;
                      }
                      else if (threeOfAKind2KickerOne > threeOfAKind1KickerOne) {
                        console.log("DEATH wins with three of a kind!");
                        window.alert("DEATH wins with three of a kind!");
                        return 2;
                      }
                      else if (threeOfAKind1KickerTwo > threeOfAKind2KickerTwo) {
                        console.log("Humanity wins with three of a kind!");
                        window.alert("Humanity wins with three of a kind!");
                        return 1;
                      }
                      else if (threeOfAKind2KickerTwo > threeOfAKind1KickerTwo) {
                        console.log("DEATH wins with three of a kind!");
                        window.alert("DEATH wins with three of a kind!");
                        return 2;
                      } else {
                        console.log("It's a tie!");
                        window.alert("It's a tie!");
                      }                      
                  } else if(threeOfAKind1 == 1 && threeOfAKind2 == 0) {
                      console.log("Humanity wins with three of a kind!");
                      window.alert("Humanity wins with three of a kind!");
                      return 1;
                  } else if(threeOfAKind1 == 0 && threeOfAKind2 == 1) {
                      console.log("DEATH wins with three of a kind!");
                      window.alert("DEATH wins with three of a kind!");
                      return 2;
                  } else if(threeOfAKind1 == 0 && threeOfAKind2 == 0) {

                    var twoPair1 = twoPair(Variables.player1);
                    var twoPair2 = twoPair(Variables.player2);
                    var bestPairPower1 = bestPairPower(Variables.player1);
                    var bestPairPower2 = bestPairPower(Variables.player2);
                    var worstPairPower1 = worstPairPower(Variables.player1);
                    var worstPairPower2 = worstPairPower(Variables.player2);
                    var kicker1 = twoPairKicker(Variables.player1);
                    var kicker2 = twoPairKicker(Variables.player2);

                    if(twoPair1 == 1 && twoPair2 == 1) {
                        if (bestPairPower1 > bestPairPower2) {
                          console.log("Humanity wins with two pair!");
                          window.alert("Humanity wins with two pair!");
                          return 1;
                        }
                        else if (bestPairPower2 > bestPairPower1) {
                          console.log("DEATH wins with two pair!");
                          window.alert("DEATH wins with two pair!");
                          return 2;
                        }
                        else if (worstPairPower1 > worstPairPower2) {
                          console.log("Humanity wins with two pair!");
                          window.alert("Humanity wins with two pair!");
                          return 1;
                        }
                        else if (worstPairPower2 > worstPairPower1) {
                          console.log("DEATH wins with two pair!");
                          window.alert("DEATH wins with two pair!");
                          return 2;
                        }
                        else if (kicker1 > kicker2) {
                          console.log("Humanity wins with two pair!");
                          window.alert("Humanity wins with two pair!");
                          return 1;
                        }
                        else if (kicker2 > kicker1) {
                          console.log("DEATH wins with two pair!");
                          window.alert("DEATH wins with two pair!");
                          return 2;
                        } else{
                          console.log("It's a tie!");
                          window.alert("It's a tie!");
                          return 0;
                        }                                              
                    } else if(twoPair1 == 1 && twoPair2 == 0) {
                        console.log("Humanity wins with two pair!");
                        window.alert("Humanity wins with two pair!");
                        return 1;
                    } else if(twoPair1 == 0 && twoPair2 == 1) {
                        console.log("DEATH wins with two pair!");
                        window.alert("DEATH wins with two pair!");
                        return 2;
                    } else if(twoPair1 == 0 && twoPair2 == 0) {

                        var pair1 = pair(Variables.player1);
                        var pair2 = pair(Variables.player2);
                        var pair1Power = pairPower(Variables.player1);
                        var pair2Power = pairPower(Variables.player2);
                        var pair1kickerOne = pairKickerOne(Variables.player1);
                        var pair2kickerOne = pairKickerOne(Variables.player2);
                        var pair1kickerTwo = pairKickerTwo(Variables.player1);
                        var pair2kickerTwo = pairKickerTwo(Variables.player2);
                        var pair1kickerThree = pairKickerThree(Variables.player1);
                        var pair2kickerThree = pairKickerThree(Variables.player2);
                        
                      if(pair1 == 1 && pair2 == 1) {
                          if (pair1Power > pair2Power) {
                            console.log("Humanity wins with a pair!");
                            window.alert("Humanity wins with a pair!");
                            return 1;
                          }
                          else if (pair2Power > pair1Power) {
                            console.log("DEATH wins with a pair!");
                            window.alert("DEATH wins with a pair!");
                            return 2;
                          }
                          else if (pair1kickerOne > pair2kickerOne) {
                            console.log("Humanity wins with a pair!");
                            window.alert("Humanity wins with a pair!");
                            return 1;
                          }
                          else if (pair2kickerOne > pair1kickerOne) {
                            console.log("DEATH wins with a pair!");
                            window.alert("DEATH wins with a pair!");
                            return 2;
                          }
                          else if (pair1kickerTwo > pair2kickerTwo) {
                            console.log("Humanity wins with a pair!");
                            window.alert("Humanity wins with a pair!");
                            return 1;
                          }
                          else if (pair2kickerTwo > pair1kickerTwo) {
                            console.log("DEATH wins with a pair!");
                            window.alert("DEATH wins with a pair!");
                            return 2;
                          }
                          else if (pair1kickerThree > pair2kickerThree) {
                            console.log("Humanity wins with a pair!");
                            window.alert("Humanity wins with a pair!");
                            return 1;
                          }
                          else if (pair2kickerThree > pair1kickerThree) {
                            console.log("DEATH wins with a pair!");
                            window.alert("DEATH wins with a pair!");
                            return 2;
                          } else {
                            console.log("It's a tie!");
                            window.alert("It's a tie!");
                            return 0;
                          }
                      } else if(pair1 == 1 && pair2 == 0) {
                          console.log("Humanity wins with a pair!");
                          window.alert("Humanity wins with a pair!");
                          return 1;
                      } else if(pair1 == 0 && pair2 == 1) {
                          console.log("DEATH wins with a pair!");
                          window.alert("DEATH wins with a pair!");
                          return 2;
                      } else if(pair1 == 0 && pair2 == 0) {

                        var higherCard1One = higherCard(Variables.player1);
                        var higherCard2One = higherCard(Variables.player2);
                        var higherCard1Two = higherCardTwo(Variables.player1);
                        var higherCard2Two = higherCardTwo(Variables.player2);
                        var higherCard1Three = higherCardThree(Variables.player1);
                        var higherCard2Three = higherCardThree(Variables.player2);
                        var higherCard1Four = higherCardFour(Variables.player1);
                        var higherCard2Four = higherCardFour(Variables.player2);
                        var higherCard1Five = higherCardFive(Variables.player1);
                        var higherCard2Five = higherCardFive(Variables.player2);

                        if(higherCard1One > higherCard2One){
                            console.log("Humanity wins with a high card!");
                            window.alert("Humanity wins with a high card!");
                            return 1;
                        } else if(higherCard2One > higherCard1One){
                            console.log("DEATH wins with a high card!");
                            window.alert("DEATH wins with a high card!");
                            return 2;
                        } else if(higherCard1One == higherCard2One){
                            if(higherCard1Two > higherCard2Two){
                                console.log("Humanity wins with a high card!");
                                window.alert("Humanity wins with a high card!");
                                return 1;
                            } else if(higherCard2Two > higherCard1Two){
                                console.log("DEATH wins with a high card!");
                                window.alert("DEATH wins with a high card!");
                                return 2;
                            } else if(higherCard1Two == higherCard2Two){
                                if(higherCard1Three > higherCard2Three){
                                    console.log("Humanity wins with a high card!");
                                    window.alert("Humanity wins with a high card!");
                                    return 1;
                                } else if(higherCard2Three > higherCard1Three){  
                                    console.log("DEATH wins with a high card!");
                                    window.alert("DEATH wins with a high card!");
                                    return 2;
                                } else if( higherCard1Three == higherCard2Three){
                                    if(higherCard1Four > higherCard2Four){
                                        console.log("Humanity wins with a high card!"); 
                                        window.alert("Humanity wins with a high card!");  
                                        return 1;
                                    } else if(higherCard2Four > higherCard1Four){
                                        console.log("DEATH wins with a high card!");
                                        window.alert("DEATH wins with a high card!");  
                                        return 2;
                                    } else if( higherCard1Four == higherCard2Four){
                                        if(higherCard1Five > higherCard2Five){
                                            console.log("Humanity wins with a high card!");
                                            window.alert("Humanity wins with a high card!");
                                            return 1;
                                        } else if(higherCard2Five > higherCard1Five){
                                            console.log("DEATH wins with a high card!");
                                            window.alert("DEATH wins with a high card!");
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
              } 
            } 
          }
        } 
      } 
    } // end of function determineWinnersHand
  

export{determineWinnersHand};