/// <reference types="cypress" />

describe('login page button test', () => {
  it('login button should be visible and enabled', () => {
    cy.visit('https://www.saucedemo.com/v1/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button')
      .should('be.visible')
      .and('be.enabled');
  })
})