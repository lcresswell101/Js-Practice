import { suits, values } from "../public/js/cards";
import { getRandomSuit, getRandomValue, deal } from "../public/js/deal";

test("Test getRandomSuit returns expected data", () => {
  expect(suits.includes(getRandomSuit())).toBe(true);
})

test("Test getRandomValue returns expected data", () => {
  const keys = Object.keys(values);

  expect(keys.includes(getRandomValue(values))).toBe(true);
});

test("Deal returns correct data", () => {
  const valueValues = Object.keys(values);

  const hand = deal();
  const suit = Object.keys(hand)[0];
  const value = hand[suit];

  expect(suits.includes(suit)).toBe(true);

  expect(valueValues.includes(value)).toBe(true);
});