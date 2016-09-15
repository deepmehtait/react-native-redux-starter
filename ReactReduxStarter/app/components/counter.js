import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterObj: ''
    }
  }

  render() {
    const { contactObj ,counter, increment, decrement, getcontacts, openPicker, openPickerAllDetails } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
        <Text>{contactObj}</Text>
        <TouchableOpacity onPress={getcontacts} style={styles.button}>
          <Text>Get Contacts with promise</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openPicker} style={styles.button}>
          <Text>Open Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openPickerAllDetails} style={styles.button}>
          <Text>Open Picker-All</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
