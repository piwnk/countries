import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountryFlagList from '../presentational/flag-list.component';

import { getCountries } from '../actions/countries';

class CountryFlagContainer extends Component {
  // ESLINT: useless constructor
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.dispatch(getCountries());
  }

  render() {
    return (
      <div>
        <CountryFlagList countries={this.props.countries} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  countries: store.countriesReducer.countries,
});

export default connect(mapStateToProps)(CountryFlagContainer);
