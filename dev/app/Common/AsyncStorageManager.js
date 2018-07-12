/**
 * @date 2018/7/11
 * @Description: 本地缓存管理
 */
'use strict';
import {AsyncStorage} from 'react-native';

/**
 * 保存数据
 * @param key
 * @param value
 * @returns {Promise.<*>}
 */
const setStorage_proto = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        return error;
    }
};

/**
 * 获取数据
 * @param key
 * @returns {Promise.<*>}
 */
const getStorage_proto = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        return error;
    }
};

/**
 * 清除数据
 * @param key
 * @returns {Promise.<*>}
 */
const removeStorage_photo = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true
    } catch (error) {
        return error;
    }
};

export default {
    setStorage_proto,
    getStorage_proto,
    removeStorage_photo,
}