import { 
  StyleSheet,
  Dimensions,
 } from 'react-native';


export default styles = StyleSheet.create({
    container: {
      height: 30,
      alignItems: 'center',
      marginTop: 25,
      backgroundColor: '#2483fc',
      flexDirection: 'row',
      marginBottom: 10,
      borderRadius: 4,
      paddingRight: 10,
      paddingLeft: 10,
      margin: 10,
    },
    label: {
      fontWeight: 'bold',
      color: '#fff',
    },
    inner: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLong: {
      height: 40,
      width: 100,
      backgroundColor: '#2483fc',
      paddingRight: 10,
      paddingLeft: 10,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    labelLong: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 18,
    },
    innerLong: {
      flex: 1,
    },
  });