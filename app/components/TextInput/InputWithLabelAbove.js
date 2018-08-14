import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native'

import styles from './styles';

const InputWithLabelAbove = ({label, onFocus}) => {
    return( 
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={styles.textInputEdgesCurved}
                onFocus={onFocus}
            />
        </View>
    );
}

export default InputWithLabelAbove;