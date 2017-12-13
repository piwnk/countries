import React from 'react';

import CountryFlag from '../components/flag.smart';

const CountryFlagList = ({ countries }) => (
  <div className="medium-4 columns country-list">
    {countries.map(country => (
      <CountryFlag
        key={country.id}
        country={country}
      />
    ))}
  </div>
);

export default CountryFlagList;
