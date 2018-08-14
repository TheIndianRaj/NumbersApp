import React from 'react';
import { 
    View,
    Text,
 } from 'react-native';
import styles from './styles';

const FormulaDisplayer = ({result, label}) => 
    <View style={styles.container}>
        <View style={styles.inner}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.box}>
                <Text style={styles.result}>{result}</Text>
            </View>
        </View>
    </View>


export default FormulaDisplayer;
