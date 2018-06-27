import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    TouchableHighlight,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Standard from '../Component/Standard';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    } 

    componentWillMount(){
        
        console.log(SCREEN_WIDTH);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
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
                <View style={styles.tabs}>
                    <View style={styles.tabsImg}>
                        <Image source={Images.IndexTabs1} style={styles.tabsImg} />
                    </View>
                    <View style={styles.lines}>
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.tabsImg}>
                        <Image source={Images.IndexTabs2} style={styles.tabsImg} />
                    </View>
                </View>
                <View style={{marginTop: 10}}>
                    <Standard 
                        awardRate='3.5'
                        investRate='10'
                        cycle='360'
                        title='旺满盈307期'
                        minInvestAmount='100' />
                </View>
                <View style={{marginTop: 10}}>
                    <Standard 
                        awardRate='1.5'
                        investRate='8'
                        cycle='120'
                        title='旺季盈646期'
                        minInvestAmount='100' />
                </View>
                <View style={{marginTop: 10}}>
                    <View style={styles.select}>
                        <View style={styles.selectLine}></View>
                        <Text style={styles.selectTitle}>精选产品</Text>
                    </View>
                    <Standard 
                        awardRate='1.5'
                        investRate='8'
                        cycle='120'
                        title='旺季盈646期'
                        minInvestAmount='100' />
                    <Standard 
                        awardRate='1.5'
                        investRate='8'
                        cycle='120'
                        title='旺季盈646期'
                        minInvestAmount='100' />
                    <Standard 
                        awardRate='1.5'
                        investRate='8'
                        cycle='120'
                        title='旺季盈646期'
                        minInvestAmount='100' />
                </View>
                <View style={[styles.tabs,{marginTop: 10}]}>
                    <View style={styles.tabsImg}>
                        <Image source={Images.IndexTabs3} style={styles.tabsImg} />
                    </View>
                    <View style={styles.lines}>
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.tabsImg}>
                        <Image source={Images.IndexTabs4} style={styles.tabsImg} />
                    </View>
                </View>
                <View style={styles.indexFoot}>
                    <Text>签约银行存管</Text>
                </View>
                {/* <Text style={styles.text} onPress={()=>Actions.Login()}>登录</Text>
                <Text style={styles.text} onPress={()=>Actions.LoginPublic()}>重置密码</Text> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    // banner
    banner: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * (340 / 750)
    },
    bannerImg:{
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * (340 / 750),
    },
    // tabs
    tabs:{
        flexDirection: 'row',
        width: SCREEN_WIDTH, 
        height: 90, 
        paddingTop: 20,
        paddingBottom: 20, 
        paddingLeft: 15, 
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    tabsImg:{
        flexDirection: 'row',
        width: (SCREEN_WIDTH - 40) / 2, 
        height: (SCREEN_WIDTH - 60) / 6
    },
    lines: {
        flexDirection: 'row',
        justifyContent:'center',
        width: 30,
    },
    line: {
        width: 1,
        height: (SCREEN_WIDTH - 60) / 6,
        backgroundColor: '#e7e7e7',
    },
    // 精选title
    select:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height: 45,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: Stylex.lineColor,
    },
    selectLine:{
        marginLeft: 15,
        width: 3,
        height: 16,
        backgroundColor: Stylex.red,
    },
    selectTitle:{
        marginLeft: 5,
        fontSize: Stylex.textFont,
        lineHeight: 45,
        color: Stylex.black3,
    },
    indexFoot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }
});