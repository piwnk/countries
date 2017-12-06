import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountryFlagList from '../presentational/flag-list.component';

import {
  // getCountries,
  searchCountries,
  deleteCountry,
} from '../actions/countries';

class CountryFlagContainer extends Component {
  componentDidMount() {
    // this.props.dispatch(getCountries());
    this.props.dispatch(searchCountries(''));
  }

  search(e) {
    this.props.dispatch(searchCountries(e.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={e => this.search(e)}
          />
        </div>
        <CountryFlagList
          countries={this.props.visibleCountries}
          deleteCountry={this.deleteCountry.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  countries: store.countriesReducer.countries,
  visibleCountries: store.countriesReducer.visibleCountries,
});

export default connect(mapStateToProps)(CountryFlagContainer);
