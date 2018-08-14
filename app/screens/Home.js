import React from 'react';
import { 
  Text, 
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import { Container } from '../components/Container';
import { InputWithLabelAbove, InputNumber } from '../components/TextInput';
import { Header } from '../components/Header';
import { ResultDisplayer } from '../components/ResultDisplayer';

export default class Home extends React.Component {

    render() {
        return (
        <Container>
            <StatusBar translucent={false} barStyle="default"/>
            <Header pageHeading="Home"/>
            <InputWithLabelAbove  label="Select Formula"/> 
            <InputNumber label="Input Number"/>
            <ResultDisplayer result={20} label="Output"/>
        </Container>
        );
    }
}
