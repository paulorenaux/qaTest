const inputEmail = '[id="email"]';
const inputPassword = '[id="pass_log_id"]';
const submitBtn = 'button[type="submit"]';

/** departure city */
const inputTripOrigin = '[id="origin_text"]';
const inputTripDestination = '[id="destination_text"]';
const locationsList = '[id="locations_list"]';
const searchTripsBtn = '[id="search-trips-btn"]';
const departureDate = '[class*="route_departure_at"]';
const datePickerDays = '[class="datepicker-days"]';
const next = '[class="next"]';
/** select the visible anchor in header to `/`*/
const homeButton = 'header [href="/"]:visible';
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
export const visit = () => {
  cy.fixture("staging").then((stg) => {
    cy.visit(stg.homePage);
  });
};

export const login = (baseUrl, email, password) => {
  cy.visit(`${baseUrl}/sessions/new`);
  cy.get(inputEmail).type(email);
  cy.get(inputPassword).type(password);
  cy.get(submitBtn).click();
  // return to home screen via ui to avoid losing session
  cy.get(homeButton).click();
};

/** Select city and state in a given field.
 * @param cityAndState should be in format 'city name - state`
 * @param selector is the selector to the field to be used
 */
const selectLocation = (cityAndState, selector) => {
  // remove the hyphen to allow the location being found in selector
  cy.get(selector).type(cityAndState.replace(" - ", " "));
  cy.get(locationsList).find("li").first().click();
  cy.get(selector).should("have.value", `${cityAndState.toUpperCase()}`);
};

export const searchRoute = (from, to, departingDate) => {
  selectLocation(from, inputTripOrigin);
  selectLocation(to, inputTripDestination);
  cy.get(departureDate).click();
  const currentMonth = new Date().getMonth();

  // advance in months according to `departingDate`
  for (let i = 0; currentMonth + i < departingDate.getMonth(); i++) {
    cy.log(currentMonth + i);
    cy.log(departingDate.getMonth());
    cy.log(months[currentMonth + i]);

    cy.get("body")
      .then(() => {
        // search for the element indicating the month being viewed,
        // without expecting for it to exist
        return cy.$$(`:contains("${months[departingDate.getMonth() + i]}")`)
          .length;
      })
      .then((viewingDepartingMonth) => {
        if (viewingDepartingMonth) cy.log("viewing current month");
        else cy.get(datePickerDays).find(next).click({ force: true });
      });
  }

  cy.get(datePickerDays).find("td").contains(departingDate.getDate()).click();
  cy.get(searchTripsBtn).click();
};
