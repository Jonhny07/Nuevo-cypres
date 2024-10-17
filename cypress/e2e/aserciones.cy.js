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
  it("Validar el texto del titulo", () => {
    cy.get("#title").should("have.text", "Todo List");
  });

  it("Validar el texto del titulo", () => {
    cy.get("#title")
      .invoke("text")
      .then((texto) => {
        expect(texto).is.equal("Todo List");
      });
  });

  it("Validar el texto del titulo", () => {
    cy.get("#title")
      .invoke("text")
      .then((texto) => {
        assert.equal(texto, "Todo List");
      });
  });
  it("Agregar una tarea y validar el nombre y cantidad de tares", () => {
    cy.wait(6000);
    cy.get("[data-cy='removeAll']").click();
    cy.wait(6000);
    cy.get("li").should("not.exist");
    cy.get("#task").wait(2000).type(data.tareas.tarea1);
    cy.get("#sendTask").click();

    cy.wait(6000);
    cy.get("li").should("have.length", 1);

    cy.get("li").find("p").invoke("text").should("have.length", 17);
    cy.get("li").first().find("p").should("have.text", data.tareas.tarea1);

    cy.get("li").first().find("p").click();
    cy.wait(6000);
    cy.get("li")
      .first()
      .find("p")
      .should("have.attr", "style", "text-decoration: line-through;");

    cy.get("#completed").click();
    cy.wait(6000);
    cy.get("li").should("have.length", 1);

    cy.get("#active").click();
    cy.wait(6000);
    cy.get("li").should("not.exist");
  });

  it.only("Agregar una tarea y validar el nombre y cantidad de tares", () => {
    cy.wait(6000);
    cy.get("[data-cy='removeAll']").click();
    cy.wait(6000);
    cy.get("li").should("not.exist");
    cy.get("#task").wait(2000).type(data.tareas.tarea1);
    cy.get("#sendTask").click();

    cy.wait(6000);
    cy.get("li").should("have.length", 1);

    cy.get("li")
      .find("p")
      .invoke("text")
      .then((text) => {
        expect(text).to.have.length(17);
      });

    cy.get("li")
      .first()
      .find("p")
      .invoke("text")
      .then((texto) => {
        expect(texto).to.be.equal(data.tareas.tarea1);
      });

    cy.get("li").first().find("p").click();
    cy.wait(8000);
    cy.get("li")
      .first()
      .find("p")
      .invoke("attr", "style")
      .then((style) => {
        expect(style).to.be.equal("text-decoration: line-through;");
      });

    cy.get("#completed").click();
    cy.wait(6000);
    cy.get("li").should("have.length", 1);

    cy.get("#active").click();
    cy.wait(6000);
    cy.get("li").should("not.exist");
  });
});
