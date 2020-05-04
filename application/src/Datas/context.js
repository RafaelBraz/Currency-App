import React, { useState, useEffect } from 'react';

import { initBaseCurrency, initFavorites, updateItem } from './storage';

export const Context = React.createContext(null);

const DataContext = (props) => {
    const [baseCurrency, setBaseCurrency] = useState('BRL');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {

        async function initialize() {
            const response_baseCurrency = await initBaseCurrency();
            const response_favorites = await initFavorites();

            setBaseCurrency(response_baseCurrency);
            setFavorites(response_favorites);

            console.log(response_baseCurrency);
            console.log(response_favorites);
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

    return (
        <Context.Provider
            value={{baseCurrency, favorites, addFavorite, removeFavorite, changeBaseCurrency}}    
        >
            {props.children}
        </Context.Provider>
    );
}

export default DataContext;