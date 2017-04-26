import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StackLayout from './layout/stackLayout';
import AbsoluteLayout from './layout/absoluteLayout';
import GridLayout from './layout/gridLayout';
import MasterDetail from './pages/masterDetail'

export default class Layouts extends Component {
  render() {
    return(
      <MasterDetail/>
    );
  }
}

AppRegistry.registerComponent('Layouts', () => Layouts);
