import AsyncStorage from '@react-native-community/async-storage';

const _setItem = async (key, value) => {
    try {
        const response = await AsyncStorage.setItem(key, value);
        return response;
    } catch(e) {
        throw e;
    }
}

const _getItem = async (key) => {
    try {
        const response = await AsyncStorage.getItem(key);
        return response;
    } catch(e) {
        throw e;
    }
}

const _removeItem = async (key) => {
    try {
        const response = await AsyncStorage.removeItem(key);
        return response;
    } catch(e) {
        throw e;
    }
}

export const updateItem = async (key, value) => {
    try {
        await _removeItem(key);
        if (key === 'favorites') {
            await _setItem('favorites', JSON.stringify({"codes": value}));
        } else if(key === 'quotes') {
            await _setItem('quotes', JSON.stringify(value));
        } else {
            await _setItem(key, value);
        }
        return 1;
    } catch (e) {
        throw e;
    }
}

export const initBaseCurrency = async () => {
    try {
        const baseCurrency = await _getItem('baseCurrency');
        if(baseCurrency === null) {
            await _setItem('baseCurrency', 'BRL');
            return 'BRL';
        } else {
            return baseCurrency;
        }
    } catch(e) {
        throw e;
    }
}

export const initFavorites = async () => {
    try {
        const favorites = await _getItem('favorites');
        if(favorites === null) {
            await _setItem('favorites', JSON.stringify({"codes": []}));
            return [];
        } else {
            return JSON.parse(favorites).codes;
        }
    } catch(e) {
        throw e;
    }
}

export const initQuotes = async () => {
    try {
        const quotes = await _getItem('quotes');
        if(quotes === null) {
            await _setItem('quotes', JSON.stringify({
                'BRL': 1,
                'USD': 0,
                'EUR': 0,
                'GBP': 0,
                'BTC': 0,
                'ETH': 0,
            }));
            return [];
        } else {
            return JSON.parse(quotes);
        }
    } catch (e) {
        throw e;
    }
}