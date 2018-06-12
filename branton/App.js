import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabBar from 'react-native-xtabbar';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        badge: ' '
    };
  }
  _pressButton() {
    // this.props.navigator.push({
    //     title: 'Second',
    //     component: Second
    // })
  }
  render() {
    return (
      <View style={styles.container}>
          <TabBar
          defaultPage={3}
          style={styles.content}
          onItemSelected={(index) => {console.log('current itemindex is ${index}');}}>
              <TabBar.Item
                  icon={require('./images/home.png')}
                  selectedIcon={require('./images/home-active.png')}
                  onPress={() => {
                      this.setState({badge: ' ',});
                  }}
                  title='首页'>
                  <View style={styles.text}>
                    <Text style={{fontSize: 18}}>Home</Text>
                  </View>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./images/invest.png')}
                  selectedIcon={require('./images/invest-active.png')}
                  onPress={() => {
                      this.setState({badge: 5,});
                  }}
                  title='排行'>
                  <View style={styles.text}>
                    <Text style={{fontSize: 18}}>Rank</Text>
                  </View>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./images/find.png')}
                  selectedIcon={require('./images/find-active.png')}
                  badge={this.state.badge}
                  onPress={() => {
                      this.setState({badge: '',});
                  }}
                  title='消息'>
                  <View style={styles.text}>
                    <Text style={{fontSize: 18}}>Message</Text>
                  </View>
              </TabBar.Item>

              <TabBar.Item
                  icon={require('./images/account.png')}
                  selectedIcon={require('./images/account-active.png')}
                  title='我'>
                    <View style={styles.text}>
                      <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text style={{fontSize: 18}}>Me</Text>
                      </TouchableOpacity>
                    </View>
              </TabBar.Item>
          </TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
