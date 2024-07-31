import jQuery from "jquery";

const body = '[class="reservations show sales"]';
const seatAvailable = '[class="seat available"]';

export const selectAnySeat = () => {
  cy.get(body)
    .should("be.visible")
    .then(() => {
      let availableSeatCount = cy.$$(seatAvailable).length;
      return Math.floor(Math.random() * availableSeatCount);
    })
    .then((selectedSeatIndex) => {
      cy.get(seatAvailable).eq(selectedSeatIndex).click();
    });
};
