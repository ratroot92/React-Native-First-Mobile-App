/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';

const screens = {

  Home: {
    screen: Home,
  },
  SignUp: {
    screen: SignUp,
  },
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
