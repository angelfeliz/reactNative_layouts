import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
TouchableHighlight,
TouchableOpacity,
Animated,
} from 'react-native'

export default  class MasterDetail extends Component {
constructor(props) {
  super(props);
  this.state = {
    showMaster : true,
    fadeAnim: new Animated.Value(0),
  }
}
_onPressButton() {
  let IsVisible = 1;
  Animated.timing(
    this.state.fadeAnim,
    {
      toValue: IsVisible,
    },
  ).start();
  this.setState({showMaster:!this.state.showMaster});
//  IsVisible = IsVisible == 1 ? 0 : 1;
}

render(){
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.column, styles.master, this.state.showMaster ? styles.master_show : styles.master_not_show]}>
        <Text>Mune1</Text>
        <Text>Mune2</Text>
        <Text>Mune3</Text>
      </Animated.View>
      <View style={[styles.column, styles.detail]}>
      <TouchableOpacity onPress={this._onPressButton.bind(this)}>

           <Text>Show master</Text>

      </TouchableOpacity>
      </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  detail: {
    flex: 2,
    backgroundColor: 'green',
  },
  master: {
    flex: 1,
    backgroundColor: 'azure',
  },
  master_show: {
    display: 'flex',
  },
  master_not_show: {
    display: 'none',
  },
});
