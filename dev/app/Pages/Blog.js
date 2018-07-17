import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    StatusBar,
    AsyncStorage,
    FlatList,
    ScrollView,
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Standard from '../Component/Standard';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        };
    } 

    componentDidMount(){
        var datas = {
            'proType' : 'NEW_INVESTOR,BANK_BRIDGE,HOUSE_MORTGAGE,CAR_MORTAGE',
            'uid': ''
        }
        RTRequest.send(DomainName + '/query/qapi/product/list.do','GET',datas).then((json) => {
            this.setState({
                dataList: json.body.list,
            })
        });
    }
    
    _onPress = (item) => {
        
        // AsyncStorage.removeItem('token',(error)=>{
        //     if (error) {
        //         alert('删除失败');
        //     } else  {
        //         alert('删除成功');
        //     }
        // });
        console.log('aaa');
        AsyncStorage.getItem('token',(error,result)=>{
            console.log('ssss');
            if (!error && result !== null) {
                console.log('dddd');
                alert(result);
                Actions.StandList({pid: item.pid});
            }else{
                console.log('ffff')
                Actions.Login();
                alert('你还没登陆，点啥呢？');
            }
        })
        console.log('gggg')
    };

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
                        loop={true}
                        // autoplay={true}
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
                <FlatList 
                    data={this.state.dataList} 
                    keyExtractor={(item, index) => item.pid}
                    renderItem={({item, separators}) => (
                        <View style={{marginTop: 10}}>
                            <TouchableHighlight
                                onPress={() => this._onPress(item)}
                                onShowUnderlay={separators.highlight}
                                onHideUnderlay={separators.unhighlight}> 
                                    <Standard 
                                        awardRate={item.awardRate}
                                        investRate={item.investRate}
                                        cycle={item.cycle}
                                        title={item.title}
                                        minInvestAmount={item.minInvestAmount} 
                                    />
                            </TouchableHighlight>
                        </View>
                      )}
                    />
                <View style={{marginTop: 10}}>
                    <View style={styles.select}>
                        <View style={styles.selectLine}></View>
                        <Text style={styles.selectTitle}>精选产品</Text>
                    </View>
                    <FlatList 
                        data={this.state.dataList} 
                        keyExtractor={(item, index) => item.pid}
                        renderItem={({item, separators}) => (
                            <TouchableHighlight
                            onPress={() => this._onPress(item)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}> 
                                <Standard 
                                    awardRate={item.awardRate}
                                    investRate={item.investRate}
                                    cycle={item.cycle}
                                    title={item.title}
                                    minInvestAmount={item.minInvestAmount} 
                                />
                            </TouchableHighlight>
                        )}
                    />
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