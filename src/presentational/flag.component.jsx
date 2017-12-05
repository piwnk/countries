import React from 'react';

const CountryFlag = ({ country }) => (
  <div className="country-logo-wrapper">
    <img src={country.imageUrl} alt="country-pohoto" className="country-logo" />
  </div>
);

export default CountryFlag;
