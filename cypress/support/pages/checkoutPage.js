export class CheckoutPage {
  constructor() {
    this.goToBillingSummary = "#goBillingSummary";
    this.firstnameInput = "#FirstName";
    this.lastnameInput = "#lastName";
    this.cardNumberInput = "#cardNumber";
    this.purchaseButton = '[data-cy="purchase"]';
    this.errorMessage = "#errorMessage";
  }
  clickGoToBillingSummary() {
    cy.get(this.goToBillingSummary).click();
  }
  completarFormulario(nombre, apellido, tarjeta) {
    cy.get(this.firstnameInput).type(nombre);
    cy.get(this.lastnameInput).type(apellido);
    cy.get(this.cardNumberInput).type(tarjeta);
    cy.get(this.purchaseButton).click();
  }
  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}
