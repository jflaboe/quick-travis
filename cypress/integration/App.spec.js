describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('User should see empty forms', () => {
        cy.visit ('/idoc');
        cy.get('[name=IDOC_Number]').should('empty');
    });

    it('shows the correct IDOC information for an IDOC number', () => {
        cy.visit('/idoc');
        cy.get('[name=IDOC_Number]').type('A00367')
        cy.get('button').click()
        cy.wait(3000)
        cy.get('[id=name]').should('contain', 'GARVIN, RAYMOND')

    })
  });