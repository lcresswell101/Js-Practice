let dealButton;
let stickButton;
let twistButton;

beforeEach(() => {
  document.body.innerHTML =
    '<div>' +
      '<button type="button" id="deal">' +
        'Deal' +
      '</button>' +
      '<button type="button" class="d-none" id="stick">' +
        'Stick' +
      '</button>' +
      '<button type="button" class="d-none" id="twist">' +
        'Twist' +
      '</button>' +
    '</div>';

    require("../public/js/listeners.js");

    dealButton = document.getElementById("deal");
    stickButton = document.getElementById("stick");
    twistButton = document.getElementById("twist");
})

test("Test handleDealClick called when deal clicked", () => {
  dealButton.click();

  expect(dealButton.classList.contains("d-none")).toBe(true);
  expect(stickButton.classList.contains("d-none")).toBe(false);
  expect(twistButton.classList.contains("d-none")).toBe(false);
});