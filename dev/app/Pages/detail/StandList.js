import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

export default class StandList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        console.log(this.props.pid);
        console.log(StatusBar.currentHeight)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true} 
                    barStyle='light-content'
                    hidden={false} 
                    animated={true}/>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.navBack} onPress={()=>Actions.pop()}>
                        <Image source={Images.GoBack} style={styles.navImg} />
                    </TouchableOpacity>
                    <Text style={{color: '#fff', fontSize: Stylex.textFont}}>标的详情</Text>
                </View>
                <Text>StandList</Text>
                <Text>{this.props.pid}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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