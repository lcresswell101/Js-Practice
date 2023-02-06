export const suits = [
  'Spades',
  'Clubs',
  'Hearts',
  'Diamonds',
];

export const values = {
  'Two': 2,
  'Three': 3,
  'Four': 4,
  'Five': 5,
  'Six': 6,
  'Seven': 7,
  'Eight': 8,
  'Nine': 9,
  'Ten': 10,
  'Jack': 10,
  'Queen': 10,
  'King': 10,
  'Ace': 11,
};

let cards = suits.map(suit => {
  return {
    [suit]: values
  };
});

let playerCards = [];

export function removeFromDeck(suitValue, value) {
  let cardsClone = JSON.parse(JSON.stringify(cards));

  cardsClone.filter(suit => {
    if (Object.prototype.hasOwnProperty.call(suit, suitValue)) {
      delete suit[suitValue][value];
    }
  })

  cards = cardsClone
}

export function getCards() {
  return cards;
}

export function setPlayerCards(card) {
  playerCards.push(card);
}

export function getPlayerCards() {
  return playerCards;
}

