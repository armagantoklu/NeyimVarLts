import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  body: {backgroundColor: '#FFF', flex: 1},
  header: {padding: 20, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 25, fontWeight: '700', color: '#D85172'},
  board: {marginTop: 30, paddingHorizontal: 30},
  logo_area: {justifyContent: 'center', alignItems: 'center', marginTop: 15},
  item: {marginTop: 20, position: 'relative'},
  button: {
    marginTop: 15,
    backgroundColor: '#ff0000',
    paddingVertical: 18,
    borderRadius: 10,
    borderColor: '#B0B0C3',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 55,
    borderRadius: 10,
    borderColor: '#B0B0C3',
    borderWidth: 1,
  },
});
