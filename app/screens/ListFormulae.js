import React from 'react';
import { 
  StatusBar,
  View,
  ScrollView,
  Text,
} from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { FormulaListRow } from '../components/FormulaListRow';
import { Footer } from '../components/Footer';

export default class ListFormulae extends React.Component {

    render() {
        return (
        <Container>
            <StatusBar translucent={false} barStyle="default"/>
            <Header pageHeading="Formulae List"/>
            <ScrollView contentContainerStyle={{}}>
                <View style={{flex: 1}}>
                    <FormulaListRow formula={{name: 'Sum', text: "a1 + b1"}}/>
                    <FormulaListRow formula={{name: 'Difference', text: "a1 - b1"}}/>
                    <FormulaListRow formula={{name: 'Product', text: "a1 * b1"}}/>
                </View>
            </ScrollView>
            <Footer navigation={this.props.navigation}/>
        </Container>
        );
    }
}
