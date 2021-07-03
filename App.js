/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, Button, Alert, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './header';
import Navigator from './android/testNavigator/Homestack';


const { width, height } = Dimensions.get('window');

export default class CodingXProject extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Navigator/>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
  text: {
    textAlign: 'center',
    paddingVertical: 160,
    fontSize: 32,
    
  },

});












