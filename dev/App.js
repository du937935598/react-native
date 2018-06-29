import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Router from './app/Router';

export default class App extends React.Component {
  render() {
    return (
      <Router/>
    );
  }
}
