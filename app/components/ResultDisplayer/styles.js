import { 
  StyleSheet,
  Dimensions,
 } from 'react-native';


export default styles = StyleSheet.create({
  container: {
      height: 40,
      alignItems: 'center',
      marginTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 100,
  },
  heading: {
    fontWeight: 'bold',
    color: '#fff',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#c4c4c4',
    marginRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  result: {
    color: '#2483fc',
    marginRight: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },

});