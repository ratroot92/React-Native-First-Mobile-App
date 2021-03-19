/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet, Button,
} from 'react-native';

export default function CustomButton(props) {
  const {
    buttonText, name, type, onPress,
  } = props;

  return (
<Button
type={type}
name={name}
onPress={() => { onPress(); }}
  title={buttonText}
></Button>
  );
}

// const styles = StyleSheet.create({});
