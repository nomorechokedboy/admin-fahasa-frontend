import { mount } from '@cypress/react';
import { Provider } from 'react-redux';
import App from '../../src/App';
import store from '../../src/redux/store';

/*eslint-disable no-undef*/
describe('App test', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('can toggle dark theme', () => {
    // cy.get("button[title='Toggle color scheme']").click();
  });
});
