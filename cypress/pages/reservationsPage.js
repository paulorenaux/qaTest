
const body = '[class="reservations show sales"]';
const seatAvailable = '[class="seat available"]';
const nextButton = '[id="next-button"]';
const passengerNameInput =
  '[id="order_reservations_attributes_0_seats_attributes_0_name"]';
const passengerDocumentInput =
  '[id="order_reservations_attributes_0_seats_attributes_0_rg"]';
const passengerBirthDateInput = '[id="birthdate"]';

export const selectAnySeat = () => {
  cy.get(body)
    .should("be.visible")
    .then(() => {
      let availableSeatCount = cy.$$(seatAvailable).length;
      return Math.floor(Math.random() * availableSeatCount);
    })
    .then((selectedSeatIndex) => {
      // using `force: true` due to having parent element () with proprty `display: none`
      cy.get(seatAvailable)
        .eq(selectedSeatIndex)
        .scrollIntoView()
        .click({ force: true });
    });
};

export const confirmReservation = () => {
  cy.get(nextButton).scrollIntoView().click();
};

export const fillPassengerInfo = (fullName, document, birthdate) => {
  cy.get(passengerNameInput).type(fullName);
  cy.get(passengerDocumentInput).type(document);
  const month =
    birthdate.getMonth() < 10
      ? `0${birthdate.getMonth()}`
      : birthdate.getMonth();
  const day =
    birthdate.getDate() < 10 ? `0${birthdate.getDate()}` : birthdate.getDate();
  cy.get(passengerBirthDateInput).type(
    `${birthdate.getFullYear()}-${month}-${day}`
  );
};
