import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/types';
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
      const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
      return {
        ...state,
        visibleCountries: foundCountries,
      };

    case DELETE_COUNTRY:
      const notDeletedCountries = state.countries.filter(country => country.id !== action.id);
      const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id !== action.id);
      return {
        ...state,
        countries: notDeletedCountries,
        visibleCountries: notDeletedVisibleCountries,
      };

    case SET_CONTINENT:
      const continentCountries = state.countries.filter(country => country.continent === action.name);
      return {
        ...state,
        visibleCountries: continentCountries,
      };

    default:
      return state;
  }
};

export default reducer;
