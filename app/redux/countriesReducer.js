// @flow

import type { Country } from '@api/countries';
import type { CountriesAction } from './countriesActions';
import {
  FETCH_COUNTRIES_LOADING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from './countriesActions';

export type CountriesState = {
  data?: Country[],
  isLoading: boolean,
  error?: string,
};

const initialState: CountriesState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export default (state: CountriesState = initialState, action: CountriesAction): CountriesState => {
  switch (action.type) {
    case FETCH_COUNTRIES_LOADING:
      return {
        isLoading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      // Ensure that all cases are covered. Coverage report invalid in this case!
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};
