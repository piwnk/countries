import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountryFlagList from '../components/flag-list.dumb';

import { searchCountries } from '../actions/countries';

class CountryFlagContainer extends Component {
  componentDidMount() {
    // this.props.dispatch(getCountries());
    this.props.dispatch(searchCountries(''));
  }

  search(e) {
    this.props.dispatch(searchCountries(e.target.value));
  }

  render() {
    return (
      <CountryFlagList
        countries={this.props.visibleCountries}
      />
    );
  }
}

const mapStateToProps = store => ({
  countries: store.countriesReducer.countries,
  visibleCountries: store.countriesReducer.visibleCountries,
});

export default connect(mapStateToProps)(CountryFlagContainer);
