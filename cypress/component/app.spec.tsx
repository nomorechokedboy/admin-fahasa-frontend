import { mount } from '@cypress/react';
import { Provider } from 'react-redux';
import App from '../../src/App';
import store from '../../src/redux/store';
import { testAccount, testPassword, testUsername } from '../../src/configs';

/*eslint-disable no-undef*/
describe('App test', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  after(() => {
    cy.contains(testUsername).click();
    cy.contains('Logout').click();
  });

  it('will be error because cypress suck', () =>
    cy.get('.mantine-Button-filled').click());

  describe('Go to login page', () => {
    it('should give error for non exist email', () => {
      cy.get('input[type=email]')
        .should('exist')
        .type('lehohaiduong@gmail.com');
      cy.get('input[type=password]').should('exist').type('12345678');

      cy.get('button[type=submit]').click();
      cy.get('div.mantine-LoadingOverlay-root').as('loading');

      cy.get('div.mantine-Text-root.mantine-Notification-description').should(
        'have.text',
        'The input gmail is not registed!',
      );
    });

    it('should give error for wrong password', () => {
      cy.get('input[type=email]').clear().type(testAccount);
      cy.get('input[type=password]').should('exist').type('12345678');
      cy.get('button[type=submit]').click();

      cy.get('div.mantine-Text-root.mantine-Notification-description').should(
        'have.text',
        'Wrong password!',
      );
    });

    it('should login success', () => {
      cy.get('input[type=email]').clear().type(testAccount);
      cy.get('input[type=password]').clear().type(testPassword);

      cy.get('button[type=submit]').click();
      cy.contains('Products').click();
    });
  });
});
