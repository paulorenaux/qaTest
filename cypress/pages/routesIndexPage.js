export default class RouteIndexPage {
  body = '[class="routes index sales"]';
  routesFound = '[id="routes-found"]';
  routeRow = '[class="route row"]';
  newReservation = '[class="new_reservation"]';

  static selectRoute() {
    cy.get(body).should("be.visible");
    // As specified by challenge, will select the first returned route.
    cy.get(routesFound).find(routeRow).first().find(newReservation).click();
  }
}
