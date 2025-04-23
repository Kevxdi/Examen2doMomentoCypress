Cypress.Commands.add('mockLogin', (email, password) => {
    cy.log('Simulando inicio de sesión...');
    // Simula el envío de credenciales
    cy.intercept('POST', '/api/login', {
        statusCode: 200,
        body: { token: 'mocked-token' }
    }).as('mockLoginRequest');

    // Simula el almacenamiento del token en localStorage
    cy.window().then((win) => {
        win.localStorage.setItem('authToken', 'mocked-token');
    });

    cy.log(`Usuario logueado como: ${email}`);
});