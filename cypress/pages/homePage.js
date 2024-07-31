import { getTimestamp } from "../support/commonCommands";
import jQuery from "jquery";

const inputEmail = '[id="email"]';
const inputPassword = '[id="pass_log_id"]';
const submitBtn = 'button[type="submit"]';

/** departure city */
const inputTripOrigin = '[id="origin_text"]';
const inputTripDestination = '[id="destination_text"]';
const locationsList = '[id="locations_list"]';
const searchTripsBtn = '[id="search-trips-btn"]';
const departureDate = '[class*="route_departure_at"]';
const datePicker = '[class="datepicker-days"]';
const next = '[class="next"]';
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
};

export const searchRoute = (from, to, departingDate) => {
  cy.get(inputTripOrigin).type(from);
  cy.get(locationsList).find("li").first().click();
  cy.get(inputTripDestination).type(to);
  cy.get(locationsList).find("li").first().click();
  cy.get(departureDate).click();
  const currentMonth = new Date().getMonth();

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
        else cy.get(datePicker).find(next).click({ force: true });
      });
  }

  let viewingDepartingMonth = false;
  cy.get(`[class="day"]`).contains(departingDate.getDate()).click();
  cy.get(searchTripsBtn).click();
};
