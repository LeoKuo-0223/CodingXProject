import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screen/Home';
import YearMode from '../screen/MonthMode';
import MonthMode from '../screen/YearMode';
import DateMode from '../screen/DateMode';

const AppNavigator = {
    Home: {
        screen: Home
    },
    月曆模式: {
        screen: YearMode
    }
}

const Homestack = createStackNavigator(AppNavigator);

export default createAppContainer(Homestack)
