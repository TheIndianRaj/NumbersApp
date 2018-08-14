import React from 'react';
import { 
    TouchableHighlight,
    View,
    Text,
 } from 'react-native';
import styles from './styles';

const Button = ({label, onPress}) => 
    <TouchableHighlight style={styles.container}>
        <View style={styles.inner}>
            <Text style={styles.label}>{label}</Text>
        </View>
    </TouchableHighlight>


export default Button;
