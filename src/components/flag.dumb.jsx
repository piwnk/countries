import React from 'react';
import { Link } from 'react-router';

const CountryFlag = ({ country }) => (
  <div className="callout country-flag">
    <Link
      className="logo"
      to={`countries/country/${country.id}`}
    >
      <span
        data-tooltip
        aria-haspopup="true"
        className="has-tip"
        data-disable-hover="false"
        title={country.name}
      >
        <img src={country.imageUrl} alt="" />
      </span>
    </Link>
  </div >
);

export default CountryFlag;
