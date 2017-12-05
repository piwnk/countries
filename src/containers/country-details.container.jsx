import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCountry } from '../actions/countries';

import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {
  componentDidMount() {
    console.log(this.props.params);
    this.props.dispatch(getCountry(this.props.params.id));
    // console.log(this.props.selectedCountry);
  }

  render() {
    return (
      <CountryDetails country={this.props.selectedCountry} />
    );
  }
}

const mapStateToProps = store => ({
  selectedCountry: store.countriesReducer.selectedCountry,
});

export default connect(mapStateToProps)(CountryDetailsContainer);
