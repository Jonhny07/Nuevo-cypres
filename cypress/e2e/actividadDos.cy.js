//Modifica todos los selectores para obtener los mismos elementos web pero con rutas diferentes

describe("Actividad complementaria2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria1', () =>{
    cy.visit('');
    cy.get('[data-cy="user"]').type('pushingit' + numero);
    cy.get('[data-cy="pass"]').type('123456!');
    cy.get('[value="Female"]').check({force: true});
    cy.get('[data-cy="day"]').select('3');
    cy.get('[data-cy="month"]').select('August');
    cy.get('[data-cy="year"]').select('1988');
    cy.get('[data-cy="submitForm"]').click();
    });
   });