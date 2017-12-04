import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './store/DevTools';

import registerServiceWorker from './registerServiceWorker';

import './style/index.css';

// import App from './App';

import { getCountries } from './actions/countries';

const App = () => (
  <div className="App">
    <h1>Init</h1>
    <DevTools />
  </div>
);

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();

store.dispatch(getCountries());
