/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
// import React from 'react';
// import Navigator from './Routes/HomeStack';

// export default function App() {
//   return (
//  <Navigator />
//   );
// }
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from './config';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';

export default function App(props) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <SignUp />
    );
  }

  return (
    <Home></Home>
  );
}
