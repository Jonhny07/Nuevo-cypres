///<reference types="cypress" />

import { LoginPage } from "../support/loginPage";
import { ToDoListPage } from "../support/toDoListPage";
import { HomePage } from "../support/homePage";
import { HeaderPage } from "../support/headersPage";
import { OnlineShopFunction } from "../support/functions/onlineShopFunction";

describe("HOOKS", () => {
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

  it.only("Primer test", () => {
    /* nombre = "jonhny";
    cy.log("Primer test");*/
    toDoListPage.escribirTarea(data.tareas.tarea1);
    toDoListPage.clickSendTask();
    toDoListPage.obtenerTarea(data.tareas.tarea1);
    toDoListPage.obtenerTareas().should("have.length", 1);

    toDoListPage.escribirTarea(data.tareas.tarea2);
    toDoListPage.clickSendTask();
    toDoListPage.obtenerTarea(data.tareas.tarea2);
    toDoListPage.obtenerTareas().should("have.length", 2);

    toDoListPage.escribirTarea(data.tareas.tarea3);
    toDoListPage.clickSendTask();
    toDoListPage.obtenerTarea(data.tareas.tarea3);
    toDoListPage.obtenerTareas().should("have.length", 3);
  });
  it("Escribir un log con onlineShopFunction", () => {
    onlineShopFunction.shoppingCartPage.escribirUnLog(
      "Escribiendo un log usando function"
    );
  });
});
