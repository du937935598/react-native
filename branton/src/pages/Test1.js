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

export default class Test1 extends Component {
    static navigationOptions = {
      title: 'Test1',
    };
    constructor(props){
      super(props);
      this.state = {
        mathValue: ''
      }
    }
    
    componentDidMount(){
      this.setState({
        mathValue: Math.random() * 10
      })
    }
    render() {
      return(
        <View style={styles.container}>
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>test1aaaaaaaa--{this.state.mathValue}</Text>
          <Text>首页1</Text>
          <Text>首页2</Text>
          <Text>首页3</Text>
          <Text>首页4</Text>
          <Text>首页5</Text>
          <Text>首页6</Text>
          <Text>首页7</Text>
          <Text>首页8</Text>
          <Text>首页9</Text>
          <Text>首页11</Text>
          <Text>首页12</Text>
          <Text>首页13</Text>
          <Text>首页14</Text>
          <Text>首页15</Text>
          <Text>首页16</Text>
          <Text>首页17</Text>
          <Text>首页18</Text>
          <Text>首页19</Text>
          <Text>首页21</Text>
          <Text>首页22</Text>
          <Text>首页23</Text>
          <Text>首页24</Text>
          <Text>首页25</Text>
          <Text>首页26</Text>
          <Text>首页27</Text>
          <Text>首页28</Text>
          <Text>首页29</Text>
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