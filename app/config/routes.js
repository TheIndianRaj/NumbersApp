import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import AddFormula from '../screens/AddFormula';
import ListFormulae from '../screens/ListFormulae';

export default StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    AddFormula: {
        screen: AddFormula,
        navigationOptions: {
            header: () => null
        }
    },
    ListFormulae: {
        screen: ListFormulae,
        navigationOptions: {
            header: () => null
        }
    },
});