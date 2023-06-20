describe('Login', () => {
    it('User must be able to logged in successfully', function () {
        cy.visit('https://practicetestautomation.com/'); // Navigate to Test Website
        cy.contains('Practice').click();
        cy.contains('Test Login Page').click();
        cy.get('input[name="username"]').type('student');
        cy.get('input[name="password"]').type('Password123');
        cy.get('button[id="submit"]').click();
        cy.contains('Logged In Successfully').invoke('text').then(text => {
            const elementText = text.trim();
            cy.log('Successfully logged in Message: ', elementText);
        });
        cy.contains('Log out').click();
        cy.wait(2000);
        cy.contains('Test login').invoke('text').then(text => {
            const elementText = text.trim();
            cy.log('Successfully logged out Message: ', elementText);
        });
    });
});