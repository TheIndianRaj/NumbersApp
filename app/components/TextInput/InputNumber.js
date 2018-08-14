import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native'

import styles from './styles';

const InputNumber = ({label}) => {
    return( 
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.textInput}/>
        </View>
    );
}

export default InputNumber;