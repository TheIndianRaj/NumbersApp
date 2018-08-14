import React from 'react'
import {
    View,
    Text,
    TextInput,
} from 'react-native'

import styles from './styles';

const InputText = ({label}) => {
    return( 
        <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.textInputEdgesCurved}/>
        </View>
    );
}

export default InputText;