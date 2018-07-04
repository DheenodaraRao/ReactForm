/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, ScrollView
} from 'react-native';

import {InputWithLabel, AppButton} from './UI';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style ={styles.container}>
        <Text>My App</Text>

        <InputWithLabel 
          label= 'NRIC No.'
          orientation = "horizontal"
          placeholder = "Your NRIC No."
          keyboardType = "numeric"
        />

        <InputWithLabel 
          label= 'Name'
          orientation = "horizontal"
          placeholder = "Your Name"
          keyboardType = "default"
        />

        <InputWithLabel 
          label= 'Email'
          orientation = "horizontal"
          placeholder = "Your Email Address"
          keyboardType = "email-address"
        />

        <InputWithLabel 
          label= 'Phone'
          orientation = "horizontal"
          placeholder = "Your Phone Number"
          keyboardType = "phone-pad"
        />

        <InputWithLabel 
          label= 'Password'
          orientation = "horizontal"
          placeholder = "Your Secure Password"
          keyboardType = "default"
          secureTextEntry = {true}
        />

        <InputWithLabel 
          label= 'NRIC No.'
          orientation = "horizontal"
          placeholder = "Your NRIC No."
          keyboardType = "numeric"
        />

        <View flex = {1} flexDirection = 'column'>
          <AppButton 
          flex = {1}
          theme = 'success'
          title = 'Sign Up'
          />

          <AppButton 
          flex = {1}
          theme = 'danger'
          title = 'Cancel'
          />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
});