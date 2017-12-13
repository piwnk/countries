import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Navigation from './components/navigation.dumb';
import Home from './components/home.dumb';
import NotFound from './components/not-found.dumb';

import CountryFlagContainer from './components/flag-list.smart';
import CountryDetailsContainer from './components/country-details.smart';
import ContinentsContainer from './components/continents.smart';

export default (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Home} />
    <Route path="countries">
      <IndexRoute component={CountryFlagContainer} />
      <Route path="country/:id" component={CountryDetailsContainer} />
    </Route>
    <Route path="continents" component={ContinentsContainer} />
    {/* <Route path="contact" component={Contact} /> */}
    <Route path="*" component={NotFound} />
  </Route>
);
