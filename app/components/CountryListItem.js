// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import type { Country } from '@api/countries';

const listItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    padding: 8,
    margin: 12,
  },
  strongLineText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#504B49',
  },
  normalLineText: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#504B49',
  },
});

export default class CountryListItem extends React.PureComponent<{ item: Country }> {
  render() {
    const { item } = this.props;
    return (
      <Animatable.View animation="fadeIn" iterationCount={1} style={listItemStyles.container}>
        <View style={listItemStyles.innerContainer}>
          <Text style={listItemStyles.strongLineText}>{item.name}</Text>
          <Text style={listItemStyles.normalLineText}>{item.subregion}</Text>
          <Text style={listItemStyles.normalLineText}>{item.capital}</Text>
          <Text style={listItemStyles.normalLineText}>Lang: {item.language}</Text>
        </View>
      </Animatable.View>
    );
  }
}
