/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage
} from 'react-native';


export default class App extends Component<{}> {

  state = {
    startLatitude: 0,
    startLongitude: 0,
    currentLatitude: 0,
    currentLongitude: 0
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        startLatitude: position.coords.latitude,
        startLongitude: position.coords.longitude
      });
    });

    navigator.geolocation.watchPosition(position => {
      this.setState({
        currentLatitude: position.coords.latitude,
        currentLongitude: position.coords.longitude
      });
    });
  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Latitude Casa: {this.state.startLatitude}</Text>
      <Text style={styles.text}>Longitude Casa: {this.state.startLongitude}</Text>

      <Text style={styles.text}>Latitude Atual: {this.state.currentLatitude}</Text>
      <Text style={styles.text}>Longitude Atual: {this.state.currentLongitude}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282b33',
  },
  text: {
    color: '#ffffff',
    fontWeight:'bold'
  }

});
