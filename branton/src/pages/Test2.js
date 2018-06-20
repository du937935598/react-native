import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions, 
    View,
    Text,
    Image
  } from 'react-native';

const deviceW = Dimensions.get('window').width;
const basePx = 375;
function px2dp(px) {
  return px *  deviceW / basePx;
}

export default class Test2 extends Component {
    static navigationOptions = {
      title: 'Test2',
    };
    constructor(props){
      super(props);
      this.state = {
        mathValue: ''
      }
    }
    render() {
      return(
        <View style={styles.container}>
            <Text>Test2bbbbbb</Text>
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
});