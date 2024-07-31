import jQuery from "jquery";

class ReservationsPage {
  body='[class="reservations show sales"]'
  seatAvailable = '[class="seat available"]';

  static selectAnySeat () {
    cypress.get(body).should('be.visible');
    availableSeatCount = jQuery.findAll(seatAvailable).length();
    randomAvailableSeat = Math.floor(Math.random() * availableSeatCount);
    cypress.get(seatAvailable).eq(randomAvailableSeat).click();
  }
}