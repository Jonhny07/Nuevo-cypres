/// <reference types="cypress" />
describe("Actividad complementaria", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad complementeria 1", () => {
    cy.visit("");
    //crear un test que permita registrarse en la pagina!
    cy.get("#user").type(`pushingiT${numero}`);
    cy.get("#pass").type("123456!");
    cy.get('[value="Female]').check({ force: true });
    cy.get("#day").select("20");
    cy.get("#month").select("9");
    cy.get("#year").select("1996");
    cy.get("#submitForm").click();
    //Recorda usar npx cypress open para abrir la interfaz de usuario
    //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
  });
  it.only("Login Prueba", () => {
    cy.visit("");
    cy.get("#registertoggle").dblclick();
    cy.get("#user").type("jmartinez");
    cy.get("#pass").type("jmartinez!123");
    cy.get("#submitForm").click();
  });
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'incia seion'  //jmartinez!123
