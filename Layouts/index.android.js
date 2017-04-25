import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StackLayout from './layout/stackLayout';

export default class Layouts extends Component {
  render() {
    return(
      <StackLayout/>      
    );
  }
}

AppRegistry.registerComponent('Layouts', () => Layouts);
