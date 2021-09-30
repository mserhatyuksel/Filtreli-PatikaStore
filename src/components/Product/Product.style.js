import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
    margin: 5,
    padding: 12,
    paddingBottom: 1,
    borderRadius: 8,
  },
  imgContainer: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  img: {
    height: 300,
    borderRadius: 8,
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#808080',
  },
  stok: {
    color: 'red',
    fontFamily: 'Poppins-Bold',
  },
});
