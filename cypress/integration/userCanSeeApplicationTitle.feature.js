
describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to contain title', () => {
    cy.get('#title')
      .should('contain', 'GitHub Search engine')
  });
});

