// @flow

import { ThunkAction } from 'redux-thunk';
import { getCountries } from '@api/countries';

import type { Country } from '@api/countries';
import type { Dispatch } from './configureStore';

export const FETCH_COUNTRIES_LOADING = 'FETCH_COUNTRIES_LOADING';
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';

export type FetchCountriesLoadingAction = { type: 'FETCH_COUNTRIES_LOADING' };
export type FetchCountriesErrorAction = { type: 'FETCH_COUNTRIES_ERROR', payload: string };
export type FetchCountriesSuccessAction = { type: 'FETCH_COUNTRIES_SUCCESS', payload: Country[] };

export type CountriesAction =
  | FetchCountriesLoadingAction
  | FetchCountriesErrorAction
  | FetchCountriesSuccessAction;

export const fetchCountriesAction = (): ThunkAction => async (dispatch: Dispatch) => {
  const fetchCountriesLoadingAction = (): FetchCountriesLoadingAction => ({
    type: FETCH_COUNTRIES_LOADING,
  });

  const fetchCountriesErrorAction = (error: string): FetchCountriesErrorAction => ({
    type: FETCH_COUNTRIES_ERROR,
    payload: error,
  });
  const fetchCountriesSuccessAction = (countries: Country[]): FetchCountriesSuccessAction => ({
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  });

  try {
    dispatch(fetchCountriesLoadingAction());
    const countries = await getCountries();
    dispatch(fetchCountriesSuccessAction(countries));
  } catch (error) {
    dispatch(fetchCountriesErrorAction(error));
  }
};
