import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

function AbsoluteLayout() {
return(
    <View style={styles.container}>
      <View style={[styles.item, styles.item_group1_first]}></View>
      <View style={[styles.item, styles.item_group1_second]}></View>
      <View style={[styles.item, styles.item_group1_third]}></View>

      <View style={[styles.item, styles.item_group2_first]}></View>
      <View style={[styles.item, styles.item_group2_second]}></View>
      <View style={[styles.item, styles.item_group2_third]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  item:{
    position: 'absolute',
    height:50,
    width: 50,
  },
  item_group1_first: {
    backgroundColor: 'red',
    left: 0,
    top: 10,
  },
  item_group1_second: {
    backgroundColor: 'blue',
    left: 5,
    top: 20,
  },
  item_group1_third: {
    backgroundColor : 'green',
    left: 10,
    top:30,
  },
  item_group2_first: {
    backgroundColor: 'dodgerblue',
    left:250,
    right:0,
    top:90,
  },
  item_group2_second: {
    backgroundColor: 'gold',
    top:100,
    left:255,
    zIndex: 5,
  },
  item_group2_third: {
    backgroundColor: 'goldenrod',
    top:110,
    left:260,
  }
});

export default AbsoluteLayout;
