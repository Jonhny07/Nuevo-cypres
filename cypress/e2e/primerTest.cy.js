describe("Primer Test", () => {
  it("Registrarse en pushing It", () => {
    const numeroRandom = Math.floor(Math.random() * 1000); //math floor se usa para redondear
    cy.visit("");
    cy.get("#user").type(`pushingiT${numeroRandom}`);
    cy.get("#pass").type("123456!");
    cy.get('[value="Male"]').check({ force: true });
    cy.get("#day").select("20");
    cy.get("#month").select("9");
    cy.get("#year").select("1996");
    cy.get("#submitForm").dblclick();
  });
});
