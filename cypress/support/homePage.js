export class HomePage {
  constructor() {
    this.todoListLink = "#todolistlink";
  }
  clickToDoListLink() {
    cy.get(this.todoListLink).click();
  }
}
