import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Login from './src/components/login';
import Register from './src/components/register';
export default class App extends Component {
  render() {
    // return <Register />;
    return <Login />;
  }
}

const styles = StyleSheet.create({});
