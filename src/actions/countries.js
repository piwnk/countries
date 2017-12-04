import { GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT } from './types';

export const getCountries = () => ({
  type: GET_COUNTRIES,
});

export const getCountry = id => ({
  type: GET_COUNTRY,
  id,
});

export const deleteCountry = id => ({
  type: DELETE_COUNTRY,
  id,
});

export const searchCountries = searchText => ({
  type: SEARCH_COUNTRIES,
  searchText,
});

export const setContinent = name => ({
  type: SET_CONTINENT,
  name,
});

