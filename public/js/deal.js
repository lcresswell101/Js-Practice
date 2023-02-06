import { randomKey } from "./random-key.js";
import {suits, getCards, removeFromDeck, setPlayerCards} from "./cards.js";

export function getRandomSuit() {
  return suits[randomKey(suits.length)];
}

export function getRandomValue(values) {
  const keys = Object.keys(values);

  return keys[randomKey(keys.length)];
}

export function deal() {
  const suit = getRandomSuit();

  const suitValues = getCards()
    .filter(card => Object.keys(card).includes(suit))
    .find(values => values);

  const values = suitValues[suit];

  const randomValue = getRandomValue(values);

  removeFromDeck(suit, randomValue);

  setPlayerCards({
    suit,
    value: randomValue,
  });
}