// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

export default class CountryListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <View style={listItemStyles.container}>
        <View style={listItemStyles.innerContainer}>
          <Text style={listItemStyles.strongLineText}>{item.name}</Text>
          <Text style={listItemStyles.normalLineText}>{item.subregion}</Text>
          <Text style={listItemStyles.normalLineText}>{item.capital}</Text>
          <Text style={listItemStyles.normalLineText}>Lang: {item.languages[0].name}</Text>
        </View>
      </View>
    );
  }
}
