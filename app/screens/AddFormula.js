import React from 'react';
import { 
  Text, 
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Button, LongButton } from '../components/Button';
import { InputWithLabelAbove, InputText } from '../components/TextInput';
import { FormulaDisplayer } from '../components/FormulaDisplayer';
import { Footer } from '../components/Footer';

export default class AddFormula extends React.Component {

    render() {
        return (
        <Container>
            <StatusBar translucent={false} barStyle="default"/>
            <Header pageHeading="Add Formula"/>
            <FormulaDisplayer label="Formula" result="a+b-c" />
            <Button label="Variable"/>
            <View style={{flexDirection: 'row'}}>
                <Button label="+"/>
                <Button label="-"/>
                <Button label="*"/>
                <Button label="/"/>
                <Button label="("/>
                <Button label=")"/>
            </View>
            <InputText label="Formula Name" />
            <View style={{marginTop: 25}}>
                <LongButton label="Save"/>
            </View>
            <Footer navigation={this.props.navigation}/>
        </Container>
        );
    }
}
