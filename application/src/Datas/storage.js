import {AsyncStorage} from 'react-native';

const _storeData = async () => {
    try {
        const response = await AsyncStorage.setItem('key', 'value');
        return response;
    } catch (err) {
        return;
    }
};

const _loadData = async () => {
    try {
        const response = await AsyncStorage.getItem('key');
        if (response !== undefined) {
            return response;
        } else {
            throw Error('Não foi possível adquirir o item');
        }
    } catch (err) {
        return;
    }
};

const _removeData = async () => {
    try {
        const response = await AsyncStorage.removeItem('key');
        return response;
    } catch (err) {

    }
}