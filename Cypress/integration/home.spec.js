/* eslint-disable */

describe('When I visit the home page', () => {
  it('should show products on visit to the landing page', () => {
    cy.visit(Cypress.env('HOST_URL'));

    cy.get('.product___container').should('have.length', 2);
    cy.get('.stats___container').should('have.length', 2);
  });

  it('should ensure that clicking on the pagination should open desired page', () => {
    cy.get('.next__page').eq(0).click();
    cy.get('.product___container').should('have.length', 2);
    cy.get('.stats___container').should('have.length', 2);

    cy.get('.prev__page').eq(0).click();
    cy.get('.product___container').should('have.length', 2);
    cy.get('.stats___container').should('have.length', 2);
  });
});
