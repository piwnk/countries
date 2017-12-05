import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES } from '../actions/types';
import countries from '../data/countries.json';

const initialState = {
  countries,
  selectedCountry: {},
  visibleCountries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        countries: state.countries,
        ...state,
      };

    case GET_COUNTRY:
      // const selectedCountry = state.countries.find(country => country.id === parseInt(action.id, 10));
      // return Object.assign({}, state, { selectedCountry });
      return {
        ...state,
        selectedCountry: { ...state.countries.find(country => country.id === parseInt(action.id, 10)) },
      };

    case SEARCH_COUNTRIES:
      return {
        ...state,
        visibleCountries: state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase())),
      };
    default:
      return state;
  }
};

export default reducer;
