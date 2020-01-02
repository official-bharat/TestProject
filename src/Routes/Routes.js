import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Screens/Login';
import Slider from '../Components/Slider/Slider';

const AppNavigator = createStackNavigator({
    Slider: {
        screen: Slider
    },
    Login: {
        screen: Login,
    },
}, {
    initialRouteName: 'Slider',
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);