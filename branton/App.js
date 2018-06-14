import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Grid, Icon } from 'antd-mobile-rn';
import {Dimensions} from 'react-native';

const deviceW = Dimensions.get('window').width;

const basePx = 375;

function px2dp(px) {
  return px *  deviceW / basePx;
}

class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          index
        </Text>
      </View>
    )
  }
}

class Find extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          find
        </Text>
      </View>
    )
  }
}

class Account extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Account
        </Text>
      </View>
    )
  }
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
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon type={'\ue601'} size={px2dp(22)} color="red" />}
            renderSelectedIcon={() => <Icon type={'\ue601'} size={px2dp(22)} color="#3496f0" />}
            badgeText="20"
            onPress={() => this.setState({selectedTab: 'home'})}>
            <Index/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'find'}
            title="发现"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon type={'\ue601'} size={px2dp(22)} color="red" />}
            renderSelectedIcon={() => <Icon type={'\ue601'} size={px2dp(22)} color="#3496f0" />}
            onPress={() => this.setState({selectedTab: 'find'})}>
            <Find/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'account'}
            title="个人中心"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon type={'\ue601'} size={px2dp(22)} color="red" />}
            renderSelectedIcon={() => <Icon type={'\ue601'} size={px2dp(22)} color="#3496f0" />}
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
});