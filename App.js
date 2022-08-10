/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firestore from "@react-native-firebase/firestore";

const App = () => {

  const testing=async () => {
    try{const res = await firestore().doc(`users/RIWh2Z8RXEsmlW2OrBQR`).get();
    console.log(res);}
    catch(e){
      console.log("error",e);
    }
  }
  testing();

  return (
    <SafeAreaView>
      <Text>Hemllooo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
