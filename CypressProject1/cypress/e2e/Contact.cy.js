describe('Contact', () => {
    it('User must be able to submit Question on Contact Page successfully', function () {
        cy.visit('https://practicetestautomation.com/'); // Navigate to Test Website
        cy.contains('Contact').click();

        cy.contains('If you have questions, suggestions, or business proposals, fill up the form below and I’ll be in touch as soon as I get it!').invoke('text').then(text => {
            const elementText = text.trim();
            cy.log('Successfully loaded Contact Page ', elementText);
        });
        cy.get('input[id="wpforms-161-field_0"]').type('Awais');
        cy.get('input[id="wpforms-161-field_0-last"]').type('Sultan');
        cy.get('input[id="wpforms-161-field_1"]').type('042waisi@gmail.com');
        cy.get('textarea[id="wpforms-161-field_2"]').type('This is the Test Message.');
        cy.get('button[id="wpforms-submit-161"]').click();
        cy.contains('Thanks for contacting us! We will be in touch with you shortly.').invoke('text').then(text => {
            const elementText = text.trim();
            cy.log('Successfully loaded Contact Page ', elementText);
        });
    });
});