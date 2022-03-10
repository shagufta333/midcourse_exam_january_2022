describe("display list of users", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("is expected to contain list of github users", () => {
    cy.get("#users-list").within(() => {
    cy.get(".users-item").should("have.length", 6);
    });
  });

  it(' is expected to display user list', () => {
    cy.get('#users-list').within(() => {
      cy.get('.users-item')
        .first()
        .find('.name')
        .should('contain','George Bluth')
    })
  })
});
