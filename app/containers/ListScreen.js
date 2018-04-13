import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ErrorText from '../components/ErrorText';
import CountryListItem from '../components/CountryListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  header: {
    height: 70,
    backgroundColor: '#F1C143',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 25,
    color: '#242424',
    textAlign: 'center',
    alignSelf: 'center',
  },
  titleText: {
    padding: 12,
    fontWeight: '700',
    fontSize: 25,
    color: '#FCFAFD',
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
  list: {
    flex: 1,
  },
});


const countryListHeader = () => <Text style={styles.titleText}>Europe</Text>;

const countryKeyExtractor = (item) => item.numericCode;

export default class ListScreen extends React.PureComponent {
  _renderItem = ({ item }) => <CountryListItem item={item}/>

  render() {
    const { countries, isLoading, error } = this.props;

    console.log(this.props)

    const content = error ? <ErrorText>{JSON.stringify(error)}</ErrorText> :
      <FlatList
        style={styles.list}
        keyExtractor={countryKeyExtractor}
        data={countries}
        renderItem={this._renderItem}
        ListHeaderComponent={countryListHeader}
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
