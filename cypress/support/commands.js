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

import 'cypress-file-upload';

Cypress.Commands.add('visitURL', (url) => {
    cy.visit(url, { failOnStatusCode: false });
    // cy.upgrade()
})
Cypress.Commands.add('popuphandler', () => {
    cy.get('[class="btn-close"]', { timeout: 5000 }).should('be.visible').then(($a) => {
        if ($a.text().includes('[class="btn-close"]')) {
            cy.get('[class="btn-close"]').click({ force: true })
        }
        else {
            cy.log("close pop is not there")
        }
    })
})
Cypress.Commands.add('Signin', (email, password) => {
    cy.visitURL('/')
    cy.get('#id="email"').type(email);
    cy.get('#data-cy="password-input"').type(password);
    cy.contains('button','Sign in').click();
})
