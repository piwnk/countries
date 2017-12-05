import { GET_COUNTRIES, GET_COUNTRY } from '../actions/types';
import countries from '../data/countries.json';

const initialState = {
  countries,
  selectedCountry: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        countries: state.countries,
      };
    case GET_COUNTRY:
      // const selectedCountry = state.countries.find(country => country.id === parseInt(action.id, 10));
      // return Object.assign({}, state, { selectedCountry });
      return {
        ...state,
        selectedCountry: { ...state.countries.find(country => country.id === parseInt(action.id, 10)) },
      };
    default:
      return state;
  }
};

export default reducer;
