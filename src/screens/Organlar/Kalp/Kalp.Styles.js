import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {flex: 1},
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  flatList: {margin: 5, padding: 5},
  flatListItem: {
    fontSize: 15,
    margin: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxType: {},
  flatlistContainer: {
    width: Dimensions.get('window').width / 1.1,
    margin: 20,
  },
  pagiContainer: {flexDirection: 'row', justifyContent: 'space-around',alignItems:'center'},
  bigContainer: {flex: 1, justifyContent: 'space-around'},
});
