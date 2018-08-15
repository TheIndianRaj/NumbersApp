import React from 'react';
import { 
    View,
    Text,
    ScrollView,
 } from 'react-native';
import styles from './styles';

const SelectFormulaList = ({list}) => 
    <View style={styles.container}>
        <View style={styles.triangle}>
        </View>
        <View style={styles.body}>
            <ScrollView>
                {list}
            </ScrollView>
        </View>
    </View>


export default SelectFormulaList;
