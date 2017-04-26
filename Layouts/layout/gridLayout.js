import React from 'react';
import { View, StyleSheet } from 'react-native';

function GridLayout()
{
  return (
     <View style={styles.grid}>
       <View style={styles.row}>
         <View style={[styles.box_space_1, { backgroundColor: 'lightgreen'}]}/>
         <View style={[styles.box_space_2, { backgroundColor: 'lightblue'}]}/>
       </View>
       <View style={styles.row}>
         <View style={[styles.box_space_1, { backgroundColor: 'lightcoral' }]}/>
         <View style={[styles.box_space_1, { backgroundColor: 'lightgrey' }]}/>
         <View style={[styles.box_space_1, { backgroundColor: 'lightyellow' }]}/>
         <View style={[styles.box_space_1, { backgroundColor: 'lightseagreen' }]}/>
       </View>
       <View style={styles.row}>
         <View style={styles.column}>
          <View style={[styles.box_space_2, { backgroundColor: 'maroon' }]}/>
         </View>
         <View style={styles.column}>
           <View style={[styles.box_space_1, { backgroundColor: 'mediumpurple' }]}/>
            <View style={[styles.box_space_1, {  backgroundColor: 'mediumseagreen' }]}/>
         </View>
       </View>
     </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  box_space_1: {
    flexGrow: 1,
  },
  box_space_2: {
    flexGrow: 2,
  },
  box_space_3: {
    flexGrow: 3,
  },
});

export default GridLayout;
