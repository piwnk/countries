import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteCountry } from '../actions/countries';

import CountryFlag from './flag.dumb';

class CountryFlagCont extends Component {
  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  render() {
    return (
      <div className="single-country">
        <CountryFlag
          country={this.props.country}
        />
        <button
          onClick={() => this.deleteCountry(this.props.country.id)}
        ><i className="fa fa-times-circle" />
        </button>
      </div>
    );
  }
}

export default connect(null)(CountryFlagCont);
