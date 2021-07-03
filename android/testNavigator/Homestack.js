import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screen/Home';
import MonthMode from '../screen/MonthMode';
import DateMode from '../screen/DateMode';

const AppNavigator = {
    Home: {
        screen: Home
    },
    月曆模式: {
        screen: MonthMode
    },
    日曆模式: {
        screen: DateMode
    },
}

const Homestack = createStackNavigator(AppNavigator);

export default createAppContainer(Homestack)
