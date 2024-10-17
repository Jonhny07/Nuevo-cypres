///<reference types="cypress" />
//npx cypress run --spec 'cypress/e2e/fixtures.cy.js' --config --env password=123456!
describe("HOOKS", () => {
  let nombre;
  let usuario = {};
  //let tareas = {};
  let data;
  before(() => {
    usuario = {
      user: "pushingit",
      pass: "123456!",
    };
    cy.fixture("datos").then((datosFixture) => {
      data = datosFixture;
    });
    // tareas = {
    //   tarea1: "Hacer las compras",
    //   tarea2: "Lavar las ropas",
    //   tarea3: "Ir al trabajo",
    // };
  });
  beforeEach(() => {
    cy.visit("");
    cy.get("#registertoggle").dblclick();
    cy.get("#user").type(Cypress.env().usuario);
    cy.get("#pass").type(Cypress.env().password);
    cy.get("#submitForm").click();
    cy.get("#todolistlink").click();
    cy.wait(5000);
    cy.get("[data-cy='removeAll']").click();
  });
  it.only("Primer test", () => {
    cy.log(data);
    /* nombre = "jonhny";
    cy.log("Primer test");*/
    data.productos.precioTotal =
      data.productos.producto1.precio + data.productos.producto2.precio;
    cy.log(data.productos.precioTotal);
    cy.get("#task").wait(2000).type(data.tareas.tarea1);
    cy.get("#sendTask").click();
    cy.get("#task").clear();
    cy.get("#task").wait(2000).type(data.tareas.tarea2);
    cy.get("#sendTask").click();
    cy.get("#task").clear();
    cy.get("#task").wait(2000).type(data.tareas.tarea3);
    cy.get("#sendTask").click();
  });
  it("Segundo test", () => {
    /*cy.log(nombre);
    cy.log("Segundo test");*/
    cy.get("#task").wait(2000).type(tareas.tarea1);
    cy.get("#sendTask").click();

    cy.get("#task").clear();

    cy.get("#task").wait(2000).type(tareas.tarea2);
    cy.get("#sendTask").click();

    cy.get("#task").clear();

    cy.get("#task").wait(2000).type(tareas.tarea3);
    cy.get("#sendTask").click();
  });
});
