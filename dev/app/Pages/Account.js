import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
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