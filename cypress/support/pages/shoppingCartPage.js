export class ShoppingCartPage {
  constructor() {
    this.goCheckOutButton = "#goCheckout";
  }

  clickGoCheckoutButton() {
    cy.get(this.goCheckOutButton).click();
  }
}
