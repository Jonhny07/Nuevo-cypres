/// <>
describe("Selectores", () => {
  it("Selectores con CSS selector", () => {
    cy.visit("");
    cy.get("button");
    cy.get("[id='day']");
    cy.get("#day");
    cy.get("select[id='day']");
    cy.get("select#day");
    cy.get(".password");
  });
  it("Encontrar elementos web utilizando Find", () => {
    cy.visit("");
    cy.get("fieldset").find('input[value="Male"]');
    cy.get('input[value="Male"]');
  });
  it("Encontrar elementos web utilizando Contains", () => {
    cy.visit("");
    cy.contains("button", "Register");
  });
  it("Encontrar elementos web utilizando Contains", () => {
    cy.visit("");
    cy.get("label[for='user']").siblings("input");
  });
  it.only("Encontrar elementos web utilizando Contains", () => {
    cy.visit("");
    cy.get("label[for='user']").parent("div");
  });
});
