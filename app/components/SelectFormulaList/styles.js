import { 
  StyleSheet,
  Dimensions,
 } from 'react-native';

 const DEVICE_WIDTH = Dimensions.get('window').width;
 const DEVICE_HEIGHT = Dimensions.get('window').height;


export default styles = StyleSheet.create({
  container: {
      position: 'absolute',
      alignSelf: 'center',
      top: 110,
  },
  body: {
    height: DEVICE_HEIGHT / 2,
    width: DEVICE_WIDTH - 25,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    alignSelf: 'center',
  }

});