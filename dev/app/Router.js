/**
 * Created by Rabbit on 2017/11/3.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation';

import {
    Scene,
    Router,
    Actions,
    Reducer,
    Tabs,
    Modal,
    Stack,
} from 'react-native-router-flux';
import { Theme } from 'teaset';

import TabIcon from './Component/TabIcon';
// import TabMiddleIcon from './Component/TabMiddleIcon'

import Blog from './Pages/Blog';
import Daily from './Pages/Daily';
import Pioneer from './Pages/Pioneer';
import Seed from './Pages/Seed';
// 标的详情
import StandList from './Pages/detail/StandList';

import Login from './Pages/Login/Login';
import LoginPublic from './Pages/Login/LoginPublic';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: Theme.backgroundColor,
});

const onBackPress = () => {
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
                    <Stack key="Blog"
                           title={'博客'}
                           hideNavBar
                           image={Images.Blog}
                           selectedImage={Images.Blog}>
                        <Scene component={Blog} key="Blog"/>
                    </Stack>
                    <Stack key='Daily'
                           title='每日一粒'
                           hideNavBar
                           image={Images.Daily}
                           selectedImage={Images.Daily}>
                        <Scene component={Daily} key="Daily"/>
                    </Stack>
                    <Stack key="Pioneer"
                           title='播种者'
                           image={Images.Pioneer}
                           selectedImage={Images.Pioneer}>
                        <Scene component={Pioneer} key="Pioneer"/>
                    </Stack>
                    <Stack key="Seed"
                           title='我的种子'
                           image={Images.Seed}
                           selectedImage={Images.Seed}>
                        <Scene component={Seed} key="Seed"/>
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
            <Stack gesturesEnabled={false} key="StandList">
                <Scene
                    title='文章详情'
                    key="StandList"
                    component={StandList}
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
        height:49,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f00',
    },
});