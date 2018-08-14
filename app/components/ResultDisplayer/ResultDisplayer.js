import React from 'react';
import { 
    View,
    Text,
 } from 'react-native';
import styles from './styles';

const ResultDisplayer = ({result, label}) => 
    <View style={styles.container}>
        <View style={styles.inner}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.result}>{result}</Text>
        </View>
    </View>


export default ResultDisplayer;
