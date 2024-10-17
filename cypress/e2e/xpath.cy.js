/// <reference types="cypress" />
describe("Xpath", () => {
  it("Xpath absoluto", () => {
    cy.visit("");
    cy.xpath("/html/body/div/div/div/div/form/div[1]/input");
  });
  it("Xpath relativo", () => {
    cy.visit("");
    cy.xpath("//input[@id='user']");
  });
  it("xpath contains", () => {
    cy.visit("");
    cy.xpath('//input[contains(@class,"password")]');
  });
  it("starts-with", () => {
    cy.visit("");
    cy.xpath('//input[starts-with(@class,"chakra-input password")]');
  });
  it("elementos text", () => {
    cy.visit("");
    cy.xpath('//button[text()="Register"]');
  });
  it("hermano mayor - following-sibling", () => {
    cy.visit("");
    cy.xpath("//label[text()='Year']//following-sibling::div/select");
  });
  it("hermano mayor - preceding-sibling and parent", () => {
    cy.visit("");
    cy.xpath("//select//parent::div/preceding-sibling::label[text()='Year']");
  });
  it("xpath buscando elementos por su texto parcial visible con text", () => {
    cy.visit("");
    cy.xpath("//p[contains(text(),registrado)]");
  });
  it("xpath buscando elementos por su texto inicial visible con text", () => {
    cy.visit("");
    cy.xpath("//p[starts-with(text(),'Si ya estás')]");
    cy.xpath('//input[@value="Male"]').check({ force: true });
  });
});
