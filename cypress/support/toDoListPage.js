const constantes = require("../support/constants");
export class ToDoListPage {
  constructor() {
    this.taskInput = "#task";
    this.sendTaskButton = "#sendTask";
    this.removeAll = '[data-cy="removeAll"]';
    this.taskLi = "li";
  }

  escribirTarea(tarea) {
    cy.get(this.taskInput).type(tarea);
  }
  clickSendTask() {
    cy.get(this.sendTaskButton).click();
  }
  clickRemoveAll() {
    cy.get(this.removeAll).should("be.visible").click();
  }

  obtenerTarea(tarea) {
    return cy.contains(this.taskLi, tarea, { timeout: constantes.TIMEOUT });
  }

  obtenerTareas() {
    return cy.get(this.taskLi);
  }
}
