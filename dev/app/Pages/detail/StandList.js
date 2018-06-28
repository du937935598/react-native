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
                <TouchableOpacity onPress={()=>Actions.pop()}>
                    <Text>返回</Text>
                </TouchableOpacity>
                <Text>StandList</Text>
                <Text>{this.props.pid}</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
                <Text>aaa</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});