import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

function AbsoluteLayout() {
return(
    <View style={styles.container}>
      <View style={styles.item}></View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item:{
    position: 'absolute',
    height:50,
    width: 50,
    backgroundColor: 'red',
    right: 50,
    top: 10,
  },
  item_first:{

  }
});

export default AbsoluteLayout;
