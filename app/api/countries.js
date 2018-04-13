// @flow

import { countriesEndpoints } from '@api/endpoints';
import { get } from '@api/request';

export type Language = {
  +iso639_1: string,
  +iso639_2: string,
  +name: string,
  +nativeName: string,
};

export type RemoteCountry = {
  +numericCode: number,
  +name: string,
  +capital: string,
  +subregion: string,
  +languages: Language[],
};

export type Country = {
  +numericCode: number,
  +name: string,
  +capital: string,
  +subregion: string,
  +language: string,
};

const countriesLanguageTransformer = (countries: RemoteCountry[]) =>
  countries.map(({ numericCode, name, capital, subregion, languages }) => ({
    numericCode,
    name,
    capital,
    subregion,
    language: languages[0].name,
  }));

// eslint-disable-next-line import/prefer-default-export
export const getCountries = async (): Promise<Country[]> =>
  get(countriesEndpoints.getCountries, countriesLanguageTransformer);
