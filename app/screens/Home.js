import React from 'react';
import { 
  Text, 
  StatusBar,
  TextInput,
  View,
  Modal,
} from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { InputWithLabelAbove, InputNumber } from '../components/TextInput';
import { Header } from '../components/Header';
import { ResultDisplayer } from '../components/ResultDisplayer';
import { Footer } from '../components/Footer';
import { SelectFormulaList } from '../components/SelectFormulaList';
import { selectFormula, toggleList } from '../actions';
import SelectFormulaButton from '../components/Button/SelectFormulaButton';

class Home extends React.Component {

    onPressSelectFormula = () => {
       this.props.toggleList();
    }

    render() {
        console.log('this.props.isShowList', this.props.isShowList);
        return (
        <Container>
            <StatusBar translucent={false} barStyle="default"/>
            <Header pageHeading="Home"/>
            <SelectFormulaButton label="Select Formula" onPress={this.onPressSelectFormula} selectedFormula={"a + b"}/> 
            <InputNumber label="Input Number"/>
            <ResultDisplayer result={0} label="Output"/>
            <Footer navigation={this.props.navigation}/>
            { this.props.isShowList ? <SelectFormulaList/> : null }
        </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isShowList: state.formulae.isShowList,
    }
}

export default connect(mapStateToProps, { toggleList })(Home);
