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

const Standard = (props) => {
    return(
        <View style={styles.standard}>
            <View style={styles.title}>
                <Text style={{color: Stylex.black3, fontSize: Stylex.textFont}}>新手标234期</Text>
                <Text style={{color: Stylex.yellow, fontSize: Stylex.huiFont}}>小米活动</Text>
            </View>
            <View style={styles.interest}>
                <View style={styles.data1}>
                    <View style={styles.data1text1}>
                        <Text style={{color: Stylex.red, fontSize: Stylex.numberFont}}>{props.investRate}</Text>
                        <Text style={{color: Stylex.red, fontSize: Stylex.textFont}}>%</Text>
                        <Text style={{color: Stylex.red, fontSize: Stylex.textFont}}>+</Text>
                        <Text style={{color: Stylex.red, fontSize: Stylex.numberFont}}>{props.awardRate}</Text>
                        <Text style={{color: Stylex.red, fontSize: Stylex.textFont}}>%</Text>
                    </View>
                    <Text>历史年化收益率</Text>
                </View>
                <View style={styles.data2}>
                    <View style={styles.data1text2}>
                        <Text style={{color: Stylex.black3, fontSize: Stylex.afterFont}}>{props.cycle}</Text>
                        <Text style={{color: Stylex.black3, fontSize: Stylex.textFont}}>天</Text>
                    </View>
                    <Text>投资期限</Text>
                </View>
                <View style={styles.data3}>
                    <Image source={Images.BtnBuy} style={styles.btnBuy}/>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    // standard
    standard: {
        width: SCREEN_WIDTH,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: '#fff'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    interest: {
        flexDirection: 'row',
    },
    data1:{
        width: (SCREEN_WIDTH - 26) * 0.51,
    },
    data2: {
        width: SCREEN_WIDTH - 100 - (SCREEN_WIDTH - 26) * 0.51,
    },
    data3: {
        width: 74,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    data1text1: {
        height: 40,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    data1text2: {
        height: 40,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    btnBuy: {
        width: 74,
        height: 29
    }
});

export default Standard;