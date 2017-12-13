import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchCountries } from '../actions/countries';

class Input extends Component {
  search(e) {
    this.props.dispatch(searchCountries(e.target.value));
  }

  render() {
    return (
      <div
        className="tom-bar-right"
      >
        <input
          style={{
            margin: 0,
          }}
          type="text"
          onChange={e => this.search(e)}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default connect(null)(Input);
