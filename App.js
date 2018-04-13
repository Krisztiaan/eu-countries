// @flow

import React from 'react';
import { Provider } from 'react-redux';

import RootContainer from './app/containers/RootContainer';
import configureStore from './app/redux/configureStore';

export default () => (
  <Provider store={configureStore()}>
    <RootContainer />
  </Provider>
);
