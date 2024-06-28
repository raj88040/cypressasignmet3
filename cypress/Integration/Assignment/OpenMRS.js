describe('OpenJRS', () => {
    it('Logintest', () => {
        cy.visit('https://demo.openmrs.org/openmrs/login.htm')
        cy.get('input[id="username"]').type('admin')
        cy.get('input[id="password"]').type('Admin123')
        cy.get("li[id='Registration Desk']").click();
        cy.get('input[id="loginButton"]').click();
        
    });
});