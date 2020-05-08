import React, { useState, useEffect } from 'react';

import { initBaseCurrency, initFavorites, initQuotes, updateItem } from './storage';

export const Context = React.createContext(null);

const DataContext = (props) => {
    const [baseCurrency, setBaseCurrency] = useState('BRL');
    const [favorites, setFavorites] = useState([]);
    const [currenciesQuote, setCurrenciesQuote] = useState({
        'BRL': 1,
        'USD': 0,
        'EUR': 0,
        'GBP': 0,
        'BTC': 0,
        'ETH': 0,
    });

    useEffect(() => {

        async function initialize() {
            const response_baseCurrency = await initBaseCurrency();
            const response_favorites = await initFavorites();
            const response_quotes = await initQuotes();

            setBaseCurrency(response_baseCurrency);
            setFavorites(response_favorites);
            setCurrenciesQuote(response_quotes);

            console.log(response_baseCurrency);
            console.log(response_favorites);
            console.log(response_quotes);
        }

        initialize()

    }, [])

    const addFavorite = (currencyCode) => {
        if(favorites.length < 4) {
            const currentFavorites = favorites;
            try {
                const newFavorites = [...favorites, currencyCode];
                updateItem('favorites', newFavorites)
                setFavorites(newFavorites);
                console.log(`Add ${currencyCode} to favorites`);
            } catch (e) {
                updateItem('favorites', currentFavorites)
                setFavorites(currentFavorites);
                console.log(`Error: ${e}`);
            }
        }
    };

    const removeFavorite = (currencyCode) => {
        const currentFavorites = favorites;
        try {
            const newFavorites = favorites.filter(favorite => {
                return favorite !== currencyCode;
            });
            updateItem('favorites', newFavorites)
            setFavorites(newFavorites);
            console.log(`Remove ${currencyCode} from favorites`);
        } catch(e) {
            updateItem('favorites', currentFavorites)
            setFavorites(currentFavorites);
            console.log(`Error: ${e}`);
        }
    }

    const changeBaseCurrency = (newBaseCurrency) => {
        const currentBaseCurrency = baseCurrency;
        try {
            updateItem('baseCurrency', newBaseCurrency);
            setBaseCurrency(newBaseCurrency);
            console.log(`Change base currency to ${newBaseCurrency}`);
        } catch (e) {
            updateItem('baseCurrency', currentBaseCurrency);
            setBaseCurrency(currentBaseCurrency);
            console.log(`Error: ${e}`);
        }
    };

    const getQuote = (currencyCode) => {
        return currenciesQuote[currencyCode];
    };

    return (
        <Context.Provider
            value={{
                baseCurrency, 
                favorites, 
                getQuote, 
                addFavorite, 
                removeFavorite, 
                changeBaseCurrency, 
            }}    
        >
            {props.children}
        </Context.Provider>
    );
}

export default DataContext;