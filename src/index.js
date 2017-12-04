import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import store from './store';
import routes from './routes';

import './style/index.css';

// import DevTools from './store/DevTools';

import { getCountries } from './actions/countries';


// const App = () => (
//   <div className="App">
//     <h1>Init</h1>
//     <DevTools />
//   </div>
// );

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

store.dispatch(getCountries());
