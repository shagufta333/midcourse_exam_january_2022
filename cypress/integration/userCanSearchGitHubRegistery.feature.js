describe('display list of users', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is expected to display list contain 6 users', () => {
    cy.get('#users-list').within(() => {
    cy.get('.users-item').should('have.length', 6)
    });
  });

  it(' is expected to display expected user name', () => {
    cy.get('#users-list').within(() => {
    cy.get('.users-item').first().should('contain', 'George Bluth');
    });
  });
});
