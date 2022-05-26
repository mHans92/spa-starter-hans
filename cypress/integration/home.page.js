/// <reference types="Cypress" />

it(' user click button on next page', () => {
    cy.visit('/');
    cy.get('movies-component').shadow().find('#btnNext').click;
})