/// <reference types="cypress" />

it('User is logged out and should', () => {
    // Visit your web app
    cy.visit('http://localhost:3000/movies-kingdom');
  
    //user can log in 
    cy.get('.MuiIconButton-root').click();

     // Assert against an element that changes in dark mode
     cy.get('.makeStyles-moviesContainer-27').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)'); 
    
  
  
  
  
  });
  