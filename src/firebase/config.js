/* eslint-disable import/prefer-default-export */
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCc8uhXTwuiAKEkuOs_5dEqTlQeQqEymLI',
  authDomain: 'evergreenmobileapp-e89af.firebaseapp.com',
  projectId: 'evergreenmobileapp-e89af',
  storageBucket: 'evergreenmobileapp-e89af.appspot.com',
  messagingSenderId: '584894124469',
  appId: '1:584894124469:web:be3a42588931e3f03649fc',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
