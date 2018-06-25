import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import './app/Common/SetTheme';
import './app/Common/Global';
import App from './App';

AppRegistry.registerComponent('dev', () => App);
