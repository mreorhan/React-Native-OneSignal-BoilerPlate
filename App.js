import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import OneSignal from 'react-native-onesignal'; 
export default class App extends Component {
	constructor(properties) {
	super(properties);
	OneSignal.init("//Your OneSignal API KEY");
}
  render() {
	 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
