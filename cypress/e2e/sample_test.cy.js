
describe('My First Test', () => {
    it('Visits the Sauce Demo page', () => {
        cy.visit('/');
        cy.contains('Login').should('be.visible');
    });
});
