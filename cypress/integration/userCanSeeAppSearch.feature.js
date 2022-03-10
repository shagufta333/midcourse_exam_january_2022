/* eslint-disable no-undef */
describe('User can type in the search input and click search button', () => {
  
    beforeEach(() => {
      cy.intercept('GET', 'https://api.github.com/search/users**', {
        fixture: "searchResponse.json"
      }).as('gitSearch');
      cy.visit('/');
      cy.get('[data-cy=ghsearch-input]').type('barack');
      cy.get('[data-cy=ghsearch-button]').click();
    });
  
    it('is expected to contain title', () => {
      cy.get("section[name='title']").should('contain', 'GitHub Search engine');
    });

    it('is expected to display input form', () => {
        cy.get('[data-cy=ghsearch-input]').should('be.visible');
    });
  
    it('is expected to display search button', () => {
        cy.get('[data-cy=ghsearch-button]').should('be.visible').and('ccontain.text', 'Input GH username');
    });
  
  });