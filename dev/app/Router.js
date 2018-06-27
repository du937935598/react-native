/**
 * Created by Rabbit on 2017/11/3.
 */

import React from 'react';
import { StyleSheet, Text, View, BackHandler, StatusBar, DeviceEventEmitter } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation';

import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import { Theme } from 'teaset';

import TabIcon from './Component/TabIcon';
// import TabMiddleIcon from './Component/TabMiddleIcon'


import Home from './Pages/Home';
import List from './Pages/List';
import Find from './Pages/Find';
import Account from './Pages/Account';


import Login from './Pages/Login/Login';
import LoginPublic from './Pages/Login/LoginPublic';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        // console.log('ACTION:',action,Actions.currentScene)
        // console.log('Actions:', Actions);
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: Theme.backgroundColor,
    // shadowOpacity: 1,
    // shadowRadius: 3,
});

const onBackPress = () => {
    console.log(Actions.state);
    if (Actions.state.index !== 0) {
        return false
    }
    Actions.pop()
    return true
}

const router = () => (
    <Router createReducer={reducerCreate}
            getSceneStyle={getSceneStyle}
            backAndroidHandler={onBackPress}
    >
        <Modal
            hideNavBar
            transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
        >
            <Stack hideNavBar headerMode='screen' key="root">
                <Tabs
                    key="tabbar"        // 唯一标识
                    wrap={true}         // 自动使用自己的导航栏包装每个场景
                    showLabel={false}   // 显示文字
                    tabBarStyle={styles.tabBarStyle} // tabBar的样式
                    swipeEnabled={true}// 是否可以滑动
                    headerMode='screen' // 页面切换方式
                    icon={TabIcon}      // 自定义Icon显示方式
                    lazy={true}         // 是否默认渲染tabbar
                    tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                    activeBackgroundColor='white'   // 选中tabbar的背景色
                    inactiveBackgroundColor='white' // 未选中tabbar的背景色
                    activeTintColor='#E83929'       // 选中tabbar图标的颜色
                    inactiveTintColor='#adadad'        // 未选中tabbar图标的颜色
                >
                    <Stack key="Home"
                           title={'首页'}
                           hideNavBar
                           image={Images.Home}
                           selectedImage={Images.Home}>
                        <Scene component={Home} key="home"/>
                    </Stack>
                    <Stack key='List'
                           title='理财'
                           hideNavBar
                           image={Images.List}
                           selectedImage={Images.List}>
                        <Scene component={List} key="list"/>
                    </Stack>
                    <Stack key="Find"
                           title='发现'
                           image={Images.Find}
                           selectedImage={Images.Find}>
                        <Scene component={Find} key="find"/>
                    </Stack>
                    <Stack key="Account"
                           title='个人'
                           image={Images.Account}
                           selectedImage={Images.Account}>
                        <Scene component={Account} key="account"/>
                    </Stack>
                </Tabs>
                {/*// 推荐把需要的路由放在<Tabs/>后面，跳转的时候通过key，Actions.Test3_key*/}
                {/* <Scene component={Account} key="account"/> */}
            </Stack>
            <Stack gesturesEnabled={false} key="Login">
                <Scene
                    title='登录'
                    key="LoginModal"
                    component={Login}
                    hideNavBar
                    gesturesEnabled={false}
                    onExit={() => console.log('onExit')}
                    onLeft={Actions.pop}
                />
            </Stack>
            <Stack gesturesEnabled={false} key="LoginPublic">
                <Scene
                    title='重置密码'
                    key="LoginPublic"
                    component={LoginPublic}
                    hideNavBar
                    gesturesEnabled={false}
                    onExit={() => console.log('onExit')}
                    onLeft={Actions.pop}
                />
            </Stack>
        </Modal>
    </Router>
);

export default router;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#fff',
        height:49
    },
});