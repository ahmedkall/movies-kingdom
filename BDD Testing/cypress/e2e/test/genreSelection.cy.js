describe('Genre Selection Functionality', () => {
    it('Displays appropriate movies for a selected genre from the sidebar', () => {
        cy.visit('http://localhost:3000/movies-kingdom');

        // Select a genre (e.g., Action)
        cy.get('.MuiDrawer-root > .MuiPaper-root').contains('Action').click();

        cy.get(':nth-child(1) > .makeStyles-links-26').click();

        // Verify if the movies with the corresponding genre showed up
        cy.get('.makeStyles-genresContainer-38').should('contain', 'Action');

    });
});
