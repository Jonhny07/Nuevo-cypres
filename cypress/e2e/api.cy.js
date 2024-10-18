///<reference types="cypress" />

import { LoginPage } from "../support/loginPage";
import { ToDoListPage } from "../support/toDoListPage";
import { HomePage } from "../support/homePage";
import { HeaderPage } from "../support/headersPage";
import { OnlineShopFunction } from "../support/functions/onlineShopFunction";

describe("HOOKS", () => {
  let data;
  const timeout = 20000;
  const loginPage = new LoginPage();
  const headerPage = new HeaderPage();
  const toDoListPage = new ToDoListPage();
  const homePage = new HomePage();
  const onlineShopFunction = new OnlineShopFunction();
  const baseUrl = "https://pushing-it.onrender.com";
  let token;

  // before(() => {
  //   cy.fixture("datos").then((datosFixture) => {
  //     data = datosFixture;
  //   });
  // });
  // beforeEach(() => {
  //   cy.visit("");
  //   cy.get("#registertoggle").dblclick();
  //   loginPage.escribirUsuario(Cypress.env().usuario);
  //   loginPage.escribirContraseña(Cypress.env().password);
  //   loginPage.clickLogin();
  //   headerPage.getUsername(Cypress.env().usuario);
  //   homePage.clickToDoListLink();
  //   toDoListPage.clickRemoveAll();
  //   toDoListPage.obtenerTarea().should("not.exist");
  // });

  it("GET Method", () => {
    cy.request({
      url: `${baseUrl}/api/products`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      qs: {
        page: 2,
        limit: 4,
      },
    }).then((respuesta) => {
      cy.log(respuesta.body.products.docs);
      expect(respuesta.body.products.docs).to.have.lengthOf(4);
      expect(respuesta.status).to.be.equal(200);
      expect(respuesta.body.products.docs[0].name).to.be.equal("Jogging Gris");
    });
  });

  it("POST Method", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/api/create-product`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: {
        id: Math.floor(Math.random() * 1000),
        name: "Buzo Negro",
        price: 23.76,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenewblack.com.py%2Fproducts%2Fchampion-nike-air-jordan-us-9-5-masc-8-fem&psig=AOvVaw0doZ2NbMki1gxaJQryjGOc&ust=1729294737862000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDOqvHKlokDFQAAAAAdAAAAABAE",
      },
    }).then((respuesta) => {
      cy.log(respuesta);
    });
  });

  it("PUT Method", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/api/product/6711a1d7d8b3650054c072a3`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: {
        name: "Buzo Rojo",
        price: 23.76,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenewblack.com.py%2Fproducts%2Fchampion-nike-air-jordan-us-9-5-masc-8-fem&psig=AOvVaw0doZ2NbMki1gxaJQryjGOc&ust=1729294737862000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDOqvHKlokDFQAAAAAdAAAAABAE",
      },
    }).then((respuesta) => {
      cy.log(respuesta);
    });
  });
  it("delete Method", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/api/product/6711a1d7d8b3650054c072a3`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((respuesta) => {
      cy.log(respuesta);
    });
  });
  beforeEach(() => {
    cy.visit("");
    cy.get("#registertoggle").dblclick();
    loginPage.escribirUsuario(Cypress.env().usuario);
    loginPage.escribirContraseña(Cypress.env().password);
    loginPage.clickLogin();
    headerPage.getUsername(Cypress.env().usuario);
    //window.localStorage.getItem("token").then(value =>{
      
  });
  before(() => {
    cy.fixture("api").then((dataFixture) => {
      data = dataFixture;
    });
  });
  it.only("Buscar eliminar y crear un producto", () => {
   token =  window.localStorage.getItem("token")
    //trabajamos siempre con el mismo producto por test
    //siempre cada test va tener un producto unico
    //cada vez que comienza el test, el producto debe ser eliminao y vuelto a crear
    cy.deleteProduct(token, data.producto.name);
    cy.createProduct(token, data.producto);
    cy.get("#onlineshoplink").click();
    cy.wait(5000);
    cy.get('[data-cy="search-bar"]').type(data.producto.name);
    cy.contains("p", data.producto.name)
      .siblings("div")
      .find(`[id="add-to-cart-${data.producto.id}"]`)
      .click();
  });
});
