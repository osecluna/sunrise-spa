// import { randomCustomer } from '../support/utils';

describe('my orders list', () => {
  let customer;
  before(() => {
    customer = {
      email: 'donald-duck@commercetools.de',
      password: 'p@ssword',
    };
    cy.signin(customer);
  });
  it('displays order list', () => {
    cy.get('[data-test=my-orders-title]')
      .should('contain', 'My Orders');

    cy.get('[data-test=my-orders-table-titles-order-number]')
      .should('contain', 'Order Number');

    cy.get('[data-test=my-orders-table-titles-date]')
      .should('contain', 'Date');

    cy.get('[data-test=my-orders-table-titles-total]')
      .should('contain', 'Total');

    cy.get('[data-test=my-orders-table-titles-payment]')
      .should('contain', 'Payment Status');

    cy.get('[data-test=my-orders-table-titles-shipping]')
      .should('contain', 'Shipping Status');

    cy.get('[data-test=col-xs-4-order]')
      .should('exist');
    cy.get('[data-test=col-xs-4-date]')
      .should('exist');
    cy.get('[data-test=col-xs-4-total]')
      .should('exist');
    cy.get('[data-test=col-xs-4-payment]')
      .should('exist');
    cy.get('[data-test=col-xs-4-shipping]')
      .should('exist');
  });
});
