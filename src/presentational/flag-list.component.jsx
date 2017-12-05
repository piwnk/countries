import React from 'react';
import { Link } from 'react-router';

import CountryFlag from './flag.component';

const CountryFlagList = ({ countries }) => (
  <div className="countries-list">
    {countries.map(country => (
      <div
        className="single-country"
        key={country.id}
      >
        <Link
          className="logo"
          to={`countries/country/${country.id}`}
        >
          <CountryFlag country={country} />
        </Link>
      </div>
    ))}
  </div>
);

export default CountryFlagList;
