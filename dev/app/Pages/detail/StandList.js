import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import NavBar from '../../Component/NavBar';

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
                <NavBar title="" />
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
});