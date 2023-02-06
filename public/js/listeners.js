import { ui } from "./ui.js";
import {deal} from "./deal.js";
import {getPlayerCards} from "./cards.js";

const handleDealClick = function() {
    ui.deal.classList.add("d-none");
    ui.stick.classList.remove("d-none");
    ui.twist.classList.remove("d-none");

    for(let i = 0; i < 2; i++) {
        deal();
    }

    const playerCards = getPlayerCards();

    playerCards.forEach(card => {
        ui.playerCards.innerHTML +=
          "<div class='card'>" +
          `<h1>${card.suit}</h1>` +
          `<p>${card.value}</p>` +
          "</div>";
    })

};

const handleStickClick = function() {
    // switch to dealer
};

const handleTwistClick = function() {
    deal();

    const playerCards = getPlayerCards();

    playerCards.forEach(card => {
        ui.playerCards.innerHTML +=
          "<div class='card'>" +
          `<h1>${card.suit}</h1>` +
          `<p>${card.value}</p>` +
          "</div>";
    })
};

ui.deal.addEventListener("click", handleDealClick);

ui.stick.addEventListener("click", handleStickClick);

ui.twist.addEventListener("click", handleTwistClick);

export { handleDealClick, handleTwistClick, handleStickClick };