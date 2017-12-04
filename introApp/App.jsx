import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Navigation from './Navigation';

const Home = () => (
  <h1>Hej, a tu Home component</h1>
);

const Hello = props => (
  <h1>Witaj, {props.params.name}</h1>
);

const Contact = () => (
  <h1>A tu Contact Component</h1>
);

const PageNotFound = () => <h1>404 Not found</h1>;


class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Navigation}>
          <IndexRoute component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/hello/:name" component={Hello} />
          <Route path="*" component={PageNotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;
