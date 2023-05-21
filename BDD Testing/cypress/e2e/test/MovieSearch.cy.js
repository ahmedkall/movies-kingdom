/// <reference types="cypress" />

  it('open app', () => {
    cy.visit('http://localhost:3000/movies-kingdom')

  })

  it('searches for a movie and verifies the results', () => {
    // Visit the website
    cy.visit('http://localhost:3000/movies-kingdom');
  
    // Type a movie name in the search field
    const movieName = 'The Avengers';
    cy.get('#mui-1').type(movieName);
  
    // Press Enter key to initiate the search
    cy.get('#mui-1').type('{enter}');

    // Verify if the movies with the corresponding name showed up
  cy.get('.makeStyles-moviesContainer-23').should('contain', movieName);
  
  });
  