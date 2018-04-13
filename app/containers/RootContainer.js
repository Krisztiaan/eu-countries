import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getCountries } from '../api';
import StartScreen from './StartScreen'
import ListScreen from './ListScreen'

export default class App extends React.PureComponent {
  state = {
    screen: 'start',
    countries: undefined,
    isLoading: false,
    error: undefined
  }

  _loadCountries = async () => {
    try {
      this.setState({ isLoading: true })
      const data = await getCountries();
      const countries = await data.json();
      console.log(countries);
      this.setState({ isLoading: false, countries })
    } catch (error) {
      console.warn(error);
      this.setState({ isLoading: false, error })
    }
  }

  _toListScreen = () => this.setState({ screen: 'list' })

  render() {
    const { screen, countries, isLoading, error } = this.state;

    switch (screen) {
      case 'start':
        return <StartScreen
          onStartPressIn={this._loadCountries}
          onStartPress={this._toListScreen}
        />
      case 'list':
        return <ListScreen
          countries={countries}
          isLoading={isLoading}
          error={error}
        />
      default:return (
        <View style={styles.container}>
          <Text>Invalid screen value: {screen}</Text>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
