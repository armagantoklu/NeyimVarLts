import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  bigContainer: {flex: 1, justifyContent: 'space-around'},
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
  flatlistContainer: {width: Dimensions.get('window').width / 1.1, margin: 20},
  pagiContainer: {flexDirection: 'row', justifyContent: 'space-around',alignItems:'center'},
});