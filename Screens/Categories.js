/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';

import { Container } from 'native-base';

import firebase from '../config';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
  },
});

export default function Categories() {
  const [categories, setCategories] = React.useState([]);
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    const ref = firebase.database().ref('categories/');
    ref.on(
      'value',
      (snapshot) => {
        const dataArray = {};
        snapshot.forEach((childSnapshot) => {
          dataArray[childSnapshot.key] = childSnapshot.val();
          console.log(childSnapshot.key);
        });
      },
      (error) => {
        console.log(`Error: ${error.code}`);
      },
    );
  }, []);

  return (

      <Container>
        {load && Object.values(categories).map((val, index) => (
          <Text>{index}{val.img}
        </Text>
        ))}

    </Container>

  );
}
