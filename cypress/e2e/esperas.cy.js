///<reference types="cypress" />
describe("HOOKS", () => {
  let data;
  before(() => {
    cy.fixture("datos").then((datosFixture) => {
      data = datosFixture;
    });
  });
  beforeEach(() => {
    cy.visit("");
    cy.get("#registertoggle").dblclick();
    cy.get("#user").type(Cypress.env().usuario);
    cy.get("#pass").type(Cypress.env().password);
    cy.get("#submitForm").click();
    cy.get("#todolistlink").click();
  });

  it("Agregar una tarea y validar el nombre y cantidad de tares", () => {
    cy.get("[data-cy='removeAll']", { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get("li", { timeout: 10000 }).should("not.exist");
    cy.get("#task").wait(2000).type(data.tareas.tarea1);
    cy.get("#sendTask").click();

    cy.get("li").should("have.length", 1);

    cy.get("li", { timeout: 10000 })
      .find("p")
      .invoke("text")
      .should("have.length", 17);
    cy.get("li").first().find("p").should("have.text", data.tareas.tarea1);

    cy.get("li").first().find("p").click();
    cy.get("li")
      .first()
      .find("p", { timeout: 10000 })
      .should("have.attr", "style", "text-decoration: line-through;");

    cy.get("#completed").click();
    cy.get("li", { timeout: 10000 }).should("have.length", 1);

    cy.get("#active").click();
    cy.get("li", { timeout: 10000 }).should("not.exist");
  });

  it.only("Agregar una tarea y validar el nombre y cantidad de tares", () => {
    cy.get("[data-cy='removeAll']", { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get("li", { timeout: 15000 }).should("not.exist");
    cy.get("#task").type("Hacer la cama");
    cy.get("#sendTask").click();
    cy.get("li",{timeout:15000}).first().find("p").and("have.text","Hacer las camas");
    cy.get("li",{timeout:15000}).find("p",{timeout:15000}).invoke("text").then(text =>{
      expect(text).to.have.text("Hacer las camas")
    })

  });
});
