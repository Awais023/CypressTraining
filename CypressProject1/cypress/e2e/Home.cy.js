describe('Homepage', () => {
    it('User must be able to navigate Homepage successfully', function () {
        cy.visit('https://practicetestautomation.com/'); // Navigate to Test Website
        cy.contains('Home').click();
        
        cy.contains('Welcome to Practice Test Automation!').invoke('text').then(text => {
            const elementText = text.trim();
            cy.log('Successfully loaded Homepage ', elementText);
        });
        cy.get('input[title="Name"]').type('Awais');
        cy.get('input[title="Email Address"]').type('042waisi@gmail.com');
        cy.get('input[value="Get XPath cheat sheet"]').click();
    });
});