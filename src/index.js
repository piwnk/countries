import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import store from './store';
import routes from './routes';

import './style/index.css';
import './style/country.css';

// import { getCountry, getCountries } from './actions/countries';

const Wrapper = () => (
  <Provider store={store}>
    <Router
      history={hashHistory}
      routes={routes}
    />
  </Provider>
);

render(<Wrapper />, document.getElementById('root'));

registerServiceWorker();

// store.dispatch(getCountry(3));
// store.dispatch(getCountries());
