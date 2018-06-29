'use strict';
import {
  AsyncStorage,
  AlertIOS,
} from 'react-native';

var Request = {
    send(url,rqtype,datas) {
        var myFetchOptions = {
            method: rqtype,
            headers:{
                'tnapikey':'6056905ce4f440d6a5b8179d80e5fd4d',
                'Content-Type': 'application/json',
                'channel': 'h5'
            },
            data: datas,
            dataType:'json',
        }
        return new Promise(function (resolve, reject) { 
            fetch(url,myFetchOptions)
                .then((response) => {
                    return response.json()
                })
                .then((res) => { 
                    resolve(res);       
                })
                .catch((error) => {
                    resolve(error);
                });
         })
    }
};

module.exports = Request;