/* eslint-disable import/named */
import React from 'react';
import { StatusBar } from 'react-native';
import { THEME } from './enviroment';
// const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];

export default function CustomStatusBar() {
  return (
<StatusBar barStyle={`${THEME}-content`} hidden={false} backgroundColor="#00BCD4" translucent />
  );
}

// const styles = StyleSheet.create({
//   statusBarStyle: {

//   },
//   statusBarTransition: {

//   },
// });
