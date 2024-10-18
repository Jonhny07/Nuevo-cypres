// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const baseUrl = "https://pushing-it.onrender.com";

Cypress.Commands.add("deleteProduct", (token, nombreProducto) => {
  cy.request({
    method: "GET",
    url: `${baseUrl}/api/products`,
    qs: {
      name: nombreProducto,
    },
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .its("body.products.docs")
    .each((producto) => {
      //hacer una peticion http que busque nuestro producto
      //hacer una peticion http que lo elimine
      cy.request({
        method: "DELETE",
        url: `${baseUrl}/api/product/${producto._id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((respuesta) => {
        expect(respuesta.status).to.be.equal(202);
      });
    });
});

Cypress.Commands.add("createProduct", (token, producto) => {
  //hacer una peticion http que lo vuelva a crear
  cy.request({
    method: "POST",
    url: `${baseUrl}/api/create-product`,
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: producto,
  }).then((respuesta) => {
    expect(respuesta.status).to.be.equal(201);
  });
});

import { AuthPage } from "./pages/authPage";
const authPage = new AuthPage();
Cypress.Commands.add("login", (username, password) => {
  cy.get(authPage.iniciaSessionButton).dblclick();
  cy.get(authPage.usernameInput).type(username);
  cy.get(authPage.passwordInput).type(password);
  cy.get(authPage.loginButton).click();
});

Cypress.Commands.add("loginWithApi", (username, password) => {
  cy.request({
    method: "POST",
    url: "https://pushing-it-3.onrender.com/api/login",
    body: {
      username: username,
      password: password,
    },
  }).then((respuesta) => {
    window.localStorage.setItem("token", respuesta.body.token);
    window.localStorage.setItem("user", respuesta.body.user.username);
    window.localStorage.setItem("userId", respuesta.body.user._id);
  });
});
