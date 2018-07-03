import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import NavBar from '../Component/NavBar';

export default class Pioneer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar title="播种者" backBtn="false"/>
                <Text style={styles.text} onPress={()=>Actions.Login()}>登陆</Text>
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
});