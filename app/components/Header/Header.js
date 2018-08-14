import React from 'react';
import { 
    View,
    Text,
 } from 'react-native';
import styles from './styles';

const Header = ({pageHeading}) => 
    <View style={styles.header}>
        <View style={styles.inner}>
            <Text style={styles.heading}>{pageHeading}</Text>
        </View>
    </View>


export default Header;
