import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  TouchableHighlight,
  Text
} from 'react-native';
import {root} from '../js/host';

export default class Home extends Component {
    constructor(props) {
      super(props);
      var ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.state = {
        dataSource: ds.cloneWithRows(['a','b','c']),
      };
    };

    componentWillMount(){
      this._fetchData()
    }

    _fetchData(){
      var myFetchOptions = {
        method: 'GET'
      };
      fetch(root + '/admin.php/Enum/queryEnum.html', myFetchOptions)
      .then(response => response.json())
      .then(res => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(res.list)
        })
      })
    }
    
    renderRow(row){
      return(
        <TouchableHighlight>
          <View>
            <Text>{row.id}</Text>
            <Text>{row.type_name}</Text>
          </View>
        </TouchableHighlight>
      )
    }

    render() {
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>首页</Text>
          </View>
          <ListView 
          dataSource={this.state.dataSource} 
          renderRow={this.renderRow} 
          enableEmptySections={true}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fa6450',
  },
  headerTitle:{
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
});