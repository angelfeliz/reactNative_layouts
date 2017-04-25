import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StackLayout from './layout/stackLayout';
import AbsoluteLayout from './layout/absoluteLayout';

export default class Layouts extends Component {
  render() {
    return(
      <AbsoluteLayout/>
    );
  }
}

AppRegistry.registerComponent('Layouts', () => Layouts);
