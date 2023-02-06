import { removeFromDeck, getCards } from "../public/js/cards";

test("Test getCards returns correct cards", () => {
  expect(getCards()).toEqual([
    {
      Spades: {
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11
      }
    },
    {
      Clubs: {
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11
      }
    },
    {
      Hearts: {
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11
      }
    },
    {
      Diamonds: {
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11
      }
    }
  ]);
})

test("Test removeFromDeck removes card from deck", () => {
  const suit = "Hearts";
  const value = "Two";

  removeFromDeck(suit, value);

  expect(getCards()).toEqual([
    {
      Spades: {
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11
      }
    },
    {
      Clubs: {
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11
      }
    },
    {
      Hearts: {
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11
      }
    },
    {
      Diamonds: {
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10,
        Ace: 11
      }
    }
  ]);
});