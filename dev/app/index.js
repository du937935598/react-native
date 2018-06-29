import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import './Common/SetTheme';
import './Common/Global';

import Router from './Router';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router/>
        );
    }
}


AppRegistry.registerComponent('SaiYa', () => index);