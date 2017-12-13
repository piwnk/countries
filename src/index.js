import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import 'foundation-sites/js/foundation.core';

import registerServiceWorker from './registerServiceWorker';

import store from './store';
import routes from './routes';

import './style/index.css';
// import './style/country.css';


const Wrapper = () => (
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>
);

render(<Wrapper />, document.getElementById('root'));

registerServiceWorker();
