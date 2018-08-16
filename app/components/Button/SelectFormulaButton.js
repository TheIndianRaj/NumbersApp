import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native'

import styles from './styles';

const SelectFormulaButton = ({label, onPress, selectedFormula}) => {
    return( 
        <View>
            <Text style={styles.labelSelectButton}>{label}</Text>
            <TouchableHighlight style={styles.selectButton} onPress={onPress} underlayColor="#2483fc">
                <Text>{selectedFormula}</Text>
            </TouchableHighlight>
        </View>
    );
}

export default SelectFormulaButton;