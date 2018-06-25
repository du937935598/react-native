/**
 * Created by Rabbit on 2017/11/2.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    } 

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} onPress={()=>Actions.Login()}>登录</Text>
                <Text>aaa</Text>
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
    },
    text:{
        textAlign: 'center'
    }
});