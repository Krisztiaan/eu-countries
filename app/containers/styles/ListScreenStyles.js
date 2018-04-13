import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
