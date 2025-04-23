describe('2.3 - Call-to-Action (CTA) - Get Started for Free', () => {
    beforeEach(() => {
        cy.visit('https://www.heroku.com/home');
        
    });

    it('Intercepta el clic en el botón "Get Started for Free" y redirige a /signup', () => {
        cy.intercept('GET', '**/signup-form', {
            statusCode: 200,
            body: 'Mocked Signup Page',
        }).as('mockSignup-form');

        cy.contains('Get Started for Free') //no existe
            .should('be.visible')
            .click();

        cy.wait('@mockSignup');
        cy.url().should('include', '/signup');
    });
});