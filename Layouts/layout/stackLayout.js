import React from 'react';
import {
  Text,
  View,
  StyleSheet} from 'react-native';

  function StackLayout (){
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.item_first]}></View>
        <View style={[styles.item, styles.item_secound]}></View>
        <View style={[styles.item, styles.item_third]}></View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flex: 1,
    },
    item: {
      flexGrow: 1,
      borderWidth: 1,
      borderColor: 'goldenrod',
      width: undefined,
    },
    item_first: {
      backgroundColor: 'lightgoldenrodyellow',
    },
    item_secound: {
      backgroundColor: 'cadetblue',
    },
    item_third: {
      backgroundColor: 'darkgrey',
      }
  });

  export default StackLayout;
