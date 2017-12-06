import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContinent, deleteCountry } from '../actions/countries';

import CountryFlagList from '../presentational/flag-list.component';

class ContinentContainer extends Component {
  componentDidMount() {
    this.props.dispatch(setContinent('Europa'));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  chooseContinent(event) {
    this.props.dispatch(setContinent(event.target.value));
  }

  render() {
    return (
      <div>
        <select
          onChange={e => this.chooseContinent(e)}
        >
          <option value="Europa">Europa</option>
          <option value="Afryka">Afryka</option>
        </select>
        <CountryFlagList
          countries={this.props.visibleCountries}
          deleteCountry={this.deleteCountry.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  visibleCountries: store.countriesReducer.visibleCountries,
});


export default connect(mapStateToProps)(ContinentContainer);
