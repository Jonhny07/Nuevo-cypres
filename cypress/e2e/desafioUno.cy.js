/// <reference types="cypress" />

describe("Desafio Uno", () => {
  it("Prueba desafio Uno", () => {
    cy.visit("");
    const numero = Math.floor(Math.random() * 1000);
    cy.get("[name='user']").type(`desafioUno${numero}`);
    cy.get("#pass").type("123456!");
    cy.get("fieldset.chakra-form-control")
      .find("[value='Male']")
      .check({ force: true });
    cy.get("#day").select("20");
    cy.get("select#month").select("August");
    cy.get('select[id="year"]').select("1996");
    cy.get("button[id='submitForm']").click();

    cy.get("#todolistlink").click();
    cy.get("[id='task']").type("Primera tarea");
    cy.get("#sendTask").click();
    cy.get("button.chakra-button.css-f99lv2").siblings("p").click();
  });
});
