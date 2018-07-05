import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

const TabIcon = (props) => {
    // console.log(props);
    return(
        <View style={styles.tabBarStyle}>
            <Image
                source={!props.focused ? props.image : props.selectedImage}
                style={[{ height:27,width:27,marginTop:5,tintColor:props.tintColor }]}
            />
            <Text
                style={{paddingLeft:px2dp(5),color:props.tintColor,marginTop:px2dp(6),fontSize:FONT_SIZE(10)}}
            >
                {props.title}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#fff',
        height:49,
        width: SCREEN_WIDTH / 4,
        justifyContent:'center',
        alignItems: 'center',
    },
});


export default TabIcon;