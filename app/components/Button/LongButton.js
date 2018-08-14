import React from 'react';
import { 
    TouchableHighlight,
    View,
    Text,
 } from 'react-native';
import styles from './styles';

const LongButton = ({label, onPress}) => 
    <TouchableHighlight style={styles.containerLong}>
        <View style={styles.inner}>
            <Text style={styles.labelLong}>{label}</Text>
        </View>
    </TouchableHighlight>


export default LongButton;
