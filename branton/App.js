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

import Home from './src/Home';
import Invest from './src/Invest';
import Find from './src/Find';
import Account from './src/Account';

const deviceW = Dimensions.get('window').width;
const basePx = 375;
function px2dp(px) {
  return px *  deviceW / basePx;
}

export default class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'home',
          tabBarHeights: 50
      };
    }
    
    render() {
      return(
        <View style={styles.wrapper}>
          <TabNavigator tabBarStyle={{flex: 1,height: this.state.tabBarHeights,justifyContent: 'center',alignItems: 'center',backgroundColor: '#fff',}} 
          sceneStyle={{paddingBottom: this.state.tabBarHeights}} >
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
        </View>
      );
    }
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
  },
  imageIcon:{
    width: 20,
    height: 20
  }
});