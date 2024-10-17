///<reference types="cypress" />

import { LoginPage } from "../support/loginPage";
import { ToDoListPage } from "../support/toDoListPage";
import { HomePage } from "../support/homePage";
import { HeaderPage } from "../support/headersPage";
import { OnlineShopFunction } from "../support/functions/onlineShopFunction";

describe("Screenshot", () => {
  let data;
  const timeout = 20000;
  const loginPage = new LoginPage();
  const headerPage = new HeaderPage();
  const toDoListPage = new ToDoListPage();
  const homePage = new HomePage();
  const onlineShopFunction = new OnlineShopFunction();

  before(() => {
    cy.fixture("datos").then((datosFixture) => {
      data = datosFixture;
    });
  });
  beforeEach(() => {
    cy.visit("");
    cy.get("#registertoggle").dblclick();
    loginPage.escribirUsuario(Cypress.env().usuario);
    loginPage.escribirContraseña(Cypress.env().password);
    loginPage.clickLogin();
    headerPage.getUsername(Cypress.env().usuario);
    homePage.clickToDoListLink();
    toDoListPage.clickRemoveAll();
    toDoListPage.obtenerTarea().should("not.exist");
  });

  it.only("Tomar  una foto y validar que no hay tareas agregadas", () => {
    cy.screenshot();
  });
});
