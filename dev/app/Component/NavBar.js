import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';

const NavBar = (props) => {
    console.log(props.backBtn)
    
    return(
        <View>
            <View style={styles.nav}>
                {props.backBtn == 'false' ? (null):(<TouchableOpacity style={styles.navBack} onPress={()=>Actions.pop()}>
                    <Image source={Images.GoBack} style={styles.navImg} />
                </TouchableOpacity>) }
                <Text style={{color: '#fff', fontSize: Stylex.textFont}}>{props.title}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    nav:{
        height: 65,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: Stylex.red,
    },
    navBack: {
        width: 25,
        height: 45,
        position: 'absolute',
        top: StatusBar.currentHeight,
        left: 5,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    navImg:{
        width: 22,
        height: 18
    }
});

export default NavBar;