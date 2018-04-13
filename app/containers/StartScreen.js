// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import type { Dispatch } from '@redux/configureStore';
import { listScreenPath, listScreenPreloadAction } from './ListScreen';
import styles from './styles/StartScreenStyles';

export const startScreenPath = '/';

class StartScreen extends React.PureComponent<{
  dispatch: Dispatch,
}> {
  onStartButtonPressIn = () => {
    this.props.dispatch(listScreenPreloadAction());
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.spacingView} />
        <Text style={styles.titleText}>EU{'\n'}COUNTRIES</Text>
        <Link
          to={listScreenPath}
          style={styles.buttonContainer}
          onPressIn={this.onStartButtonPressIn}>
          <Text style={styles.buttonText}>START</Text>
        </Link>
      </View>
    );
  }
}

export default connect()(StartScreen);
