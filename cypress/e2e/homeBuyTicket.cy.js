import { login, searchRoute } from "../pages/homePage";
import { selectRoute } from "../pages/routesIndexPage";
import {
  fillPassengerInfo,
  selectAnySeat,
  confirmReservation,
} from "../pages/reservationsPage";
import { advanceDate } from "../support/commonCommands";

// for creating a random brazilian name and document
const fakerBr = require("faker-br");

describe("home page", () => {
  const departingCity = "Curitiba - PR";
  const arrivingCity = "Ponta Grossa - PR";
  const departingDate = advanceDate(new Date(), 15);
  const passengerName = fakerBr.name.findName();
  const passengerDocument = fakerBr.definitions.br.rg();
  const passengerBirthDate = new Date();

  it("buy ticket flow", () => {
    cy.viewport(1000, 900);
    cy.fixture("staging").then((fixture) => {
      login(fixture.baseUrl, fixture.email, fixture.password);

      // return to home page without using visit (cy.visit will lose the logged in session)
      cy.get("header").find('[href="/"]').eq(0).click();
    });
    searchRoute(departingCity, arrivingCity, departingDate);
    selectRoute();
    selectAnySeat();
    confirmReservation();
    fillPassengerInfo(passengerName, passengerDocument, passengerBirthDate);
  });
});
