import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: '700',
    fontSize: 40,
    color: '#FCFAFD',
    textAlign: 'center',
    alignSelf: 'center',
  },
  spacingView: {
    height: 70,
    marginBottom: 100,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonContainer: {
    height: 70,
    marginBottom: 100,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#4F85E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 25,
    color: '#FCFAFD',
    textAlign: 'center',
  },
});

export default class StartScreen extends React.PureComponent {
  render() {
    const { onStartPressIn, onStartPress } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.spacingView} />
        <Text style={styles.titleText}>EU{'\n'}COUNTRIES</Text>
        <TouchableHighlight
          style={styles.buttonContainer}
          onPressIn={onStartPressIn}
          onPress={onStartPress}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
