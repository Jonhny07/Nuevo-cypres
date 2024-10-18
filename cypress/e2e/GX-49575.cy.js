import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";
import { CheckoutPage } from "../support/pages/checkoutPage";
import constantes from "../support/pages/constantes";

describe("Checkout page", () => {
  const homePage = new HomePage();
  const productPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();
  const checkoutPage = new CheckoutPage();
  let data;
  before(() => {
    cy.fixture("GX-49575").then((datosFixture) => {
      data = datosFixture;
    });
  });
  beforeEach(() => {
    cy.loginWithApi(Cypress.env().usuario, Cypress.env().password);
    cy.visit("");
    homePage.clickOnlineShopButton();
  });
  it("deberia  validar mensaje de error al colocar menos de 16 caracteres en la tarjeta de credito", () => {
    productPage.agregarProducto(data.productos.nombre);
    productPage.clickGoShoppingCartButton();

    checkoutPage.clickGoToBillingSummary();
    shoppingCartPage.clickGoCheckoutButton();
    checkoutPage.completarFormulario(
      data.checkout.nombre,
      data.checkout.apellido,
      data.checkout.tarjeta
    );
    checkoutPage
      .getErrorMessage()
      .should("have.text", constantes.CARD_NUMBER_ERROR_MESSAGE);
  });
});
