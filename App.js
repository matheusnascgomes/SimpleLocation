/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class App extends Component<{}> {

  state = {
    latitude: 0,
    longitude: 0
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Latitude atual: {this.state.latitude}</Text>
      <Text style={styles.text}>Longitude atual: {this.state.longitude}</Text>
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
