/// <reference types="cypress" />

it('User is logged out and should log in', () => {
  // Visit your web app
  cy.visit('http://localhost:3000/movies-kingdom');

  // Check if My Movies is not present in DOM
  cy.get('#root > div > header > div > div > a').should('not.exist');

  //user can log in 
  cy.get('.MuiToolbar-root > :nth-child(3) > .MuiButtonBase-root').click();



});
