describe('Pruebas de Desempeño y Estabilidad', () => {
    it('Mide el tiempo de carga de la página principal (home)', () => {
        // Navegar a la página principal
        cy.visit('https://www.heroku.com/home');

        // Medir el tiempo de carga de la página principal
        cy.window().then((win) => {
            const performance = win.performance;
            const startTime = performance.now();

            // Esperar a que el logo sea visible
            cy.get('#logo > a', { timeout: 3000 }).should('be.visible').then(() => {
                const endTime = performance.now();
                const loadTime = endTime - startTime;

                // Imprimir el tiempo de carga en la consola
                cy.log(`Tiempo de carga de la página principal: ${loadTime.toFixed(2)} ms`);

                // Verificar que el tiempo de carga sea menor a 3000 ms
                expect(loadTime).to.be.lessThan(3000);
            });
        });
    });
});