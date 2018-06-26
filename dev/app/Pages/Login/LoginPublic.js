import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {  Button, NavigationBar, Input } from 'teaset'

import LoginInput from './Component/LoginInput';

export default class LoginPublic extends Component {
    mobile = '';
    verification = '1234';
    password = '';
    newPassword = '';
    againPass = '';
    isImage = false;
    imageUrl = Config.baseApi + '/v1/captcha';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={this.props.headerTitle}
                               style={{height:64,backgroundColor:'white'}}
                               statusBarStyle='default'
                               rightView={
                                   <TouchableOpacity onPress={()=>Actions.pop()}>
                                       <Text>关闭b</Text>
                                   </TouchableOpacity>
                               }
                />
                <View style={{backgroundColor:'white',marginTop:px2dp(128)}}>
                    <LoginInput placeholder='请输入手机号'
                                maxLength={11}
                                onChangeText={(text)=>{
                                    this.mobile = text;
                                }}
                    />
                    <LoginInput placeholder='请输入验证码'
                                isVerify={true}
                                getVerifyCode={()=>{
                                    this.isImage = true;
                                }}
                                onChangeText={(text)=>{
                                    this.verification = text;
                                }}
                    />
                    {
                        this.props.headerTitle==='重置密码'
                            ?
                            <LoginInput placeholder='输入新密码'
                                        onChangeText={(text)=>{
                                            this.newPassword = text;
                                        }}
                            />
                            :
                            <LoginInput placeholder='设置密码'
                                        onChangeText={(text)=>{
                                            this.password = text;
                                        }}
                            />
                    }
                    <LoginInput placeholder='再次输入密码'
                                onChangeText={(text)=>{
                                    this.againPass = text;
                                }}
                    />
                    {
                        this.props.headerTitle === '创建账号'
                            ?
                            <Button title={'注册'}
                                    style={styles.loginButtonStyle}
                                    titleStyle={{fontSize:FONT_SIZE(14), color:'#fff'}}
                                    onPress={()=>this._onRegisterPress()}
                            />
                            :
                            <Button title={'重置密码'}
                                    style={styles.loginButtonStyle}
                                    titleStyle={{fontSize:FONT_SIZE(14), color:'#fff'}}
                                    onPress={()=>this._onResetPress()}
                            />
                    }


                </View>
            </View>
        );
    }

    _onResetPress = ()=>{

    };

    _onRegisterPress = () =>{

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    loginButtonStyle:{
        marginLeft:px2dp(108),
        marginRight:px2dp(108),
        height:px2dp(80),
        marginTop:px2dp(164),
        backgroundColor:'#ff7000',
        borderColor:Theme.transparentColor,
        borderRadius:20

    },
});