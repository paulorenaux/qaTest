const body = '[class="routes index sales"]';
/** form containing the button to select seat. */
const routeForm = '[id*="route-form"]';

export const selectRoute = () => {
  cy.get(body).should("be.visible");
  // As specified by challenge, will select the first returned route.
  // Add timeout to wait for response to return and the elements be rendered.
  cy.get(routeForm, { timeout: 3000 }).first().click();
};
