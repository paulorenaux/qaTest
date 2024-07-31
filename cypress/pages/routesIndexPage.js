
const body = '[class="routes index sales"]';
const routesFound = '[id="routes-found"]';
const routeRow = '[class="route row"]';
const newReservation = '[class="new_reservation"]';

export const selectRoute = () => {
  cy.get(body).should("be.visible");
  // As specified by challenge, will select the first returned route.
  cy.get('[id*="route-form"]').first().click();
}
