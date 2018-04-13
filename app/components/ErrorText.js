import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    padding: 8,
    margin: 12,
  },
  errorText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
  normalLineText: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#504B49',
  },
});

export default ({ children }) => (
  <View>
    <Text style={styles.errorText}>{children}</Text>
  </View>
);
