import { GET_COUNTRIES } from '../actions/types';
import countries from '../data/countries.json';

const initialState = {
  countries,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        countries: state.countries,
      };
    default:
      return state;
  }
};

export default reducer;
