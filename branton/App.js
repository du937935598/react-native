import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default class Main extends React.Component {

    state = {
        screenReaderEnabled: false,
    }

    onPressLearnMore(){
        console.log('function')
    }

    render() {
      return(
        <View style={styles.container}>
            <Text>
            The screen reader is {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
            </Text>
            <Button onPress={this.onPressLearnMore} title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button"/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  defaultText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 50,
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  content: {
      flex: 1,
  },
  text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});