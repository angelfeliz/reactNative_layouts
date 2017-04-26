import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,

} from 'react-native'

export default  class MasterDetail extends Component {
constructor(props) {
  super(props);
  this.state = {
    showMaster : true,
  }
}
_onPressButton() {
  this.setState({showMaster:!this.state.showMaster});
}

render(){
  return (
    <View style={styles.container}>
      <View style={[styles.column, styles.master, this.state.showMaster ? styles.master_show : styles.master_not_show]}>
        <Text>Mune1</Text>
        <Text>Mune2</Text>
        <Text>Mune3</Text>
      </View>
      <View style={[styles.column, styles.detail]}>
        <TouchableHighlight onPress={this._onPressButton().bind(this)}>
           <Text>Show master</Text>
        </TouchableHighlight>
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
