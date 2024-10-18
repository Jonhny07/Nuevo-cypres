export class ProductsPage {
  constructor() {
    this.closeModalButton = '[data-cy="closeModal"]';
    this.goShoppingCartButton = "#goShoppingCart";
  }
  agregarProducto(producto) {
    cy.get(`[name="${producto}"]`).click();
    cy.get(this.closeModalButton).click();
  }
  clickGoShoppingCartButton() {
    cy.get(this.goShoppingCartButton).click();
  }
}
