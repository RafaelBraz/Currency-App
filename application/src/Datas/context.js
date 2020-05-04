import React, { useState, useEffect } from 'react';

export const Context = React.createContext(null);

const DataContext = (props) => {
    const [baseCurrency, setBaseCurrency] = useState('BRL');
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (currencyCode) => {
        console.log(`Add ${currencyCode} to favorites`);
        if(favorites.length < 4) {
            setFavorites([...favorites, currencyCode]);
        }
    };

    const removeFavorite = (currencyCode) => {
        console.log(`Remove ${currencyCode} from favorites`);
        setFavorites(favorites.filter(favorite => {
            return favorite !== currencyCode;
        }));
    }

    const changeBaseCurrency = (newBaseCurrency) => {
        console.log(`Change base currency to ${newBaseCurrency}`);
        setBaseCurrency(newBaseCurrency);
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