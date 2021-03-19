/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Button,
} from 'react-native';
import Logo from '../assets/images/evergreen-pine-tree-logo-design-inspiration-evergreen-pine-tree-logo-design-inspiration-vector-134609964.jpg';
import Categories from './Categories';
/**
 *
 */
import CustomButton from '../components/CustomButton';
import CustomStatusBar from '../components/CustomStatusBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    width: 150,
    height: 150,

  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'green',

  },
});

export default function Home({ navigation }) {
/**
 * Navigate --helpers
 *** navigation.goBack()
 *** navigation.navigate()
 *** navigation.push()
 *** navigation.pop()
 */

  const { container, logo, text } = styles;
  return (
  // <SafeAreaView>
      <View style={container}>
        {/* <CustomStatusBar /> */}
        <Image style={logo} source={Logo} />
        <Text style={text}>Home  </Text>
        {/* <Button title="Sign Up" onPress={() => { navigation.navigate('SignUp'); }}></Button> */}
        {/* <Button title="Sign Up" onPress={() => { navigation.navigate('SignUp'); }}></Button> */}
        <Categories />
      </View>
  // </SafeAreaView>
  );
}
