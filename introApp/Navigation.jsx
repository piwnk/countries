import React from 'react';
import { Link, IndexLink } from 'react-router';


const Navigation = props => (
  <div>
    <ul>
      <li>
        <IndexLink
          to="/"
          activeStyle={{ color: '#48abee' }}
          // onlyActiveOnIndex // not necesarry since IndexLink
        >Home
        </IndexLink>
      </li>
      <li>
        <Link
          to="/contact"
          activeStyle={{ color: '#48abee' }}
        >Contact
        </Link>
      </li>
    </ul>
    {props.children}
  </div>
);

export default Navigation;
