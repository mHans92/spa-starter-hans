/// <reference types="Cypress" />

it(' user write in the input on search page', () => {
    cy.visit('/');
    cy.get('movies-ui').shadow().find('#btnFavMovies').click();
})
