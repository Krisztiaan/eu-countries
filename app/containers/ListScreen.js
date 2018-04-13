// @flow

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { fetchCountriesAction } from '@redux/countriesActions';
import type { Country } from '@api/countries';
import type { State, Dispatch } from '@redux/configureStore';
import ErrorText from '@components/ErrorText';
import CountryListItem from '@components/CountryListItem';
import styles from './styles/ListScreenStyles';

export const listScreenPath = '/countries';

export const listScreenPreloadAction = fetchCountriesAction;

const countryListHeader = () => <Text style={styles.titleText}>Europe</Text>;



const countryKeyExtractor = (item: Country) => item.numericCode;

class ListScreen extends React.PureComponent<{...State, dispatch: Dispatch}> {
  _refreshList = () => this.props.dispatch(fetchCountriesAction())

  _renderItem = ({ item }: { item: Country }) => <CountryListItem item={item}/>

  render() {
    const { data, isLoading, error } = this.props;

    const content = error ? <ErrorText>{error}</ErrorText> :
      <FlatList
        style={styles.list}
        keyExtractor={countryKeyExtractor}
        data={data}
        renderItem={this._renderItem}
        ListHeaderComponent={countryListHeader}
        onRefresh={this._refreshList}
        refreshing={isLoading}
      />

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Countries</Text>
        </View>
        <View style={styles.content}>
          { content }
        </View>
      </View>
    );
  }
}

export default connect((state: State) => state)(ListScreen);
