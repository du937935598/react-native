import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    TouchableHighlight,
    StatusBar,
    Image,
} from 'react-native';
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile-rn';

import Swiper from 'react-native-swiper';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    } 

    componentWillMount(){
        console.log(SCREEN_WIDTH * (340 / 750))
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    backgroundColor='rgba(0, 0, 0, 0)'
                    translucent={true} 
                    hidden={false} 
                    animated={true}/>
                <View style={styles.banner}>
                    <Swiper 
                        horizontal={true}
                        autoplay={true}
                        autoplayTimeout={4}
                        paginationStyle={{bottom: 5}}
                        dot={<View style={{
                            backgroundColor:'rgba(255,255,255,.2)', 
                            width: 12, 
                            height: 3,
                            borderRadius: 3, 
                            marginLeft: 3, 
                            marginRight: 3, 
                            marginTop: 3, 
                            marginBottom: 3,
                        }} />}
                        activeDot={<View style={{    //选中的圆点样式
                            backgroundColor: '#fff',
                            width: 16,
                            height: 3,
                            borderRadius: 3, 
                            marginLeft: 3, 
                            marginRight: 3, 
                            marginTop: 3, 
                            marginBottom: 3,
                        }}/>}
                        showsButtons={false}
                        showsPagination={true}>
                        <Image source={Images.Banner1} style={styles.bannerImg}/>
                        <Image source={Images.Banner2} style={styles.bannerImg}/>
                        <Image source={Images.Banner3} style={styles.bannerImg}/>
                        <Image source={Images.Banner4} style={styles.bannerImg}/>
                        <Image source={Images.Banner5} style={styles.bannerImg}/>
                        <Image source={Images.Banner6} style={styles.bannerImg}/>
                    </Swiper>
                </View>
                <WingBlank style={{ marginBottom: 5 }}>
                    <Flex>
                        <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                            <Image source={Images.IndexTabs1}/>
                        </Flex.Item>
                        <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                            <Image source={Images.IndexTabs2}/>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
                <Text>aaa</Text>
                <Text style={styles.text} onPress={()=>Actions.Login()}>登录</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text style={styles.text} onPress={()=>Actions.LoginPublic()}>重置密码</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: '#f00',
    },
    banner: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * (340 / 750)
    },
    bannerImg:{
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * (340 / 750),
    },
    tabs:{
        flex: 1,
    },
    tabsImg:{

    }
});