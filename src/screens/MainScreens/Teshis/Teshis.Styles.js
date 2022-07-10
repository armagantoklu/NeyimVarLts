import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  text_style: {
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  item: {
    width: 190,
    height: 190,
    padding: 10,
    borderWidth: 0,
    marginTop: 25,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 10,
    width: 130,
    height: 130,
  },
  positions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logoutContainer: {alignItems: 'center', justifyContent: 'center'},
  imageContainer: {},
  imageSide: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 7,
  },
});
