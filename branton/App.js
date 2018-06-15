import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions, 
  View,
  Text,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './src/pages/Home';
import Invest from './src/pages/Invest';
import Find from './src/pages/Find';
import Account from './src/pages/Account';


const deviceW = Dimensions.get('window').width;
const basePx = 375;
function px2dp(px) {
  return px *  deviceW / basePx;
}

export default class Main extends React.Component {
    state= {
      selectedTab: 'home'
    };
    render() {
      return(
        <TabNavigator style={styles.container}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            selectedTitleStyle={{color: "#fa6450"}}
            renderIcon={() => <Image style={styles.imageIcon} source={require('./src/images/home.png')} />}
            renderSelectedIcon={() => <Image style={styles.imageIcon} source={require('./src/images/home-active.png')} />}
            badgeText="10"
            onPress={() => this.setState({selectedTab: 'home'})}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'invest'}
            title="理财"
            selectedTitleStyle={{color: "#fa6450"}}
            renderIcon={() => <Image style={styles.imageIcon} source={require('./src/images/invest.png')} />}
            renderSelectedIcon={() => <Image style={styles.imageIcon} source={require('./src/images/invest-active.png')} />}
            onPress={() => this.setState({selectedTab: 'invest'})}>
            <Invest/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'find'}
            title="发现"
            selectedTitleStyle={{color: "#fa6450"}}
            renderIcon={() => <Image style={styles.imageIcon} source={require('./src/images/find.png')} />}
            renderSelectedIcon={() => <Image style={styles.imageIcon} source={require('./src/images/find-active.png')} />}
            onPress={() => this.setState({selectedTab: 'find'})}>
            <Find/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'account'}
            title="个人中心"
            selectedTitleStyle={{color: "#fa6450"}}
            renderIcon={() => <Image style={styles.imageIcon} source={require('./src/images/account.png')} />}
            renderSelectedIcon={() => <Image style={styles.imageIcon} source={require('./src/images/account-active.png')} />}
            onPress={() => this.setState({selectedTab: 'account'})}>
            <Account/>
          </TabNavigator.Item>
        </TabNavigator>
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
  imageIcon:{
    width: 20,
    height: 20
  }
});