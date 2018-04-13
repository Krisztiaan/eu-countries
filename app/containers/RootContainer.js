// @flow

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import StartScreen, { startScreenPath } from '@containers/StartScreen';
import ListScreen, { listScreenPath } from '@containers/ListScreen';

export default () => (
  <NativeRouter>
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Route exact path={startScreenPath} component={StartScreen} />
      <Route exact path={listScreenPath} component={ListScreen} />
    </View>
  </NativeRouter>
);
