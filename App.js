import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Login from "./src/components/login";
import Register from "./src/components/register";
import Splash from "./src/components/splash";
export default class App extends Component {
  render() {
    return <Splash />;
    // return <Login />;
//     return <Register />;
  }
}
