import React, { Component } from 'react';
import { 
    View,
    Text,
    TouchableHighlight
 } from 'react-native';
import styles from './styles';

export default class Footer extends Component { 
    constructor(props){
        super(props);
    }

    navigate = (screen, passProps = {}) => {
        this.props.navigation.navigate(screen, passProps);
    }



    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight style={styles.menuSingle} onPress={()=>this.navigate('Home')} underlayColor="transparent">
                    <Text>Home</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.menuSingle} onPress={()=>this.navigate('ListFormulae')} underlayColor="transparent">
                    <Text>List Formulae</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.menuSingle} onPress={()=>this.navigate('AddFormula')} underlayColor="transparent">
                    <Text>Add Formula</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
