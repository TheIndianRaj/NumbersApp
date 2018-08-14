import React from 'react';
import { 
    View,
    Text,
 } from 'react-native';
import styles from './styles';

const FormulaListRow = ({formula = {name: "", text: ""}}) => 
    <View style={styles.container}>
        <Text style={styles.name}>{formula.name}</Text>
        <Text style={styles.text}>{formula.text}</Text>
    </View>


export default FormulaListRow;
