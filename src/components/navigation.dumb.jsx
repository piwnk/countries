import React from 'react';
import { Link } from 'react-router';

import 'foundation-sites/dist/css/foundation.min.css';

import Input from '../components/input.smart';


const Navigation = props => (
  <div>
    <nav className="top-bar">
      <div className="top-bar-left">
        <Link className="navbar-brand" to="/">Countries.js</Link>
      </div>
      <ul className="tabs">
        <li className="tabs-title">
          <Link to="/countries">Countries</Link>
        </li>
        <li className="tabs-title">
          <Link to="/continents">Continents</Link>
        </li>
      </ul>
      <Input />
    </nav>
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
);

export default Navigation;
