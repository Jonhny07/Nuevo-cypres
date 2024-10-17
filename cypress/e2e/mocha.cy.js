describe('Mocha', () => {
  const alumno = "Juan"
  it('Primer test con Mocha', () => {
    cy.log("Primer test con mocha " + alumno);
  })
  it("Segundo test con mocha", () => {
    cy.log("segundo test con mocha " + alumno);
  })
})

describe('Mocha', () => {
  const alumno = "Juan"
  it.skip('Primer test con Mocha', () => {
    cy.log("Primer test con mocha " + alumno);
  })
  it("Segundo test con mocha", () => {
    cy.log("segundo test con mocha " + alumnos);
  })
})