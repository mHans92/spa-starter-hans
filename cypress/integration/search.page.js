/// <reference types="Cypress" />

it(' user write in the input on search page', () => {
    cy.visit('/search');
    cy.get('#inputSearch').type('doctor strange');
    cy.findByRole('button', { name: /btnSearch/i }).click();
})