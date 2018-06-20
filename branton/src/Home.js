import React,{Component} from 'react';
import {
    View,
    Navigator, 
    StyleSheet,
    Text,
    Button,
    AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';

// 导入自定义组件
import Test1Screen from './pages/Test1';
import Test2Screen from './pages/Test2';

// export default 是导出默认类，一定不能忘记export default导出
export default class Home extends Component { 
  _getpen(){
    this.props.navigation.goBack();
  }
   render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          {/* <Text>home</Text> */}
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>首页</Text>
          <Text>首页</Text>
          <Button
          title="测试一"
          onPress={() =>navigate('Test1', { name: 'Jane' })}
          />
          <Button
          title="测试二"
          onPress={() =>navigate('Test2', { name: 'jim' })}
          />
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

})

const App = StackNavigator({
  Homes: {
    screen: Home,
    navigationOptions: {
      header: null // 无标题栏
    }
  },
  // Test1: {
  //   screen: Test1Screen,
  //   navigationOptions: {
  //     header: null // 无标题栏
  //   }
  // },
  Test1: {
    screen: Test1Screen,
    hnavigationOptions: {
      header: null // 无标题栏
    }
  },
  Test2: {
    screen: Test2Screen,
    hnavigationOptions: {
      header: null // 无标题栏
    }
  },
});
module.exports = App;