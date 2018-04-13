// @flow

import { compose, createStore, applyMiddleware, Store } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import countriesReducer from './countriesReducer';
import type { CountriesState } from './countriesReducer';
import type { CountriesAction } from './countriesActions';

export type State = CountriesState;

export type Action = CountriesAction;

export type Dispatch = (action: Action | ThunkAction<void, State, void>) => void;

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers: <R>(a: R) => R = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store: Store<State> = createStore(
    countriesReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(countriesReducer);
      });
    }
  }

  return store;
};

export default configureStore;
