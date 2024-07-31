import { login, searchRoute } from "../pages/homePage";
import { advanceDate } from "../support/commonCommands";

describe("home page", () => {
  const departingCity = "Curitiba, PR";
  const arrivingCity = "Ponta Grossa, PR";
  const departingDate = advanceDate(new Date(), 40);

  xit("buy ticket flow", () => {
    cy.fixture("staging").then((fixture) => {
      cy.visit(fixture.baseUrl);
      login(fixture.baseUrl, fixture.email, fixture.password);
    });
  });

  it("test without logging in", () => {
    cy.fixture("staging").then((fixture) => {
      cy.visit(fixture.baseUrl);
    });
    searchRoute(departingCity, arrivingCity, departingDate);
  });
});
