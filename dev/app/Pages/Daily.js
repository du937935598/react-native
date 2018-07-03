import React, {Component} from 'react';
import { StyleSheet, Text, Alert, TextStyle, Button, View } from 'react-native';

import NavBar from '../Component/NavBar';

export default class Daily extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    _saveStroage() {
        console.log('aaaaa')
        var data = {
            first: '1',
            second: '2',
            thress: '3'
        }
        LocalStor.set( 'firsr', data, 4000,'22');
    }

    _getStroage() {
        LocalStor.get('firsr','22').then(ret => {
            alert(ret)
            console.log(ret)  //获取缓存结果
        }).catch(err => {
            alert('你还没登陆，点啥呢？');
            Actions.Login();
            console.log(err) //抛出的错误
        });
    }

    render() {
        return (
            <View>
                <NavBar title="每日一粒" backBtn="false"/>
                <View style={{ paddingTop: 30 }}>
                <Button
                    onPress={() => this._saveStroage()}
                    title="存储缓存"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => this._getStroage()}
                    title="获取缓存"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#ddd',
    },
});