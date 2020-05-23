import React, { useState, useEffect } from 'react';

import { initBaseCurrency, initFavorites, initQuotes, updateItem, getQuotes } from './storage';
import { getCurrency } from './api';

export const Context = React.createContext(null);


/**
 * Componente representando o contexto que é geral para a aplicação,
 * provendo as funções necessárias para seu funcionamento e mantendo
 * a cache da aplicação sempre atualizada
 */
const DataContext = (props) => {
    const [baseCurrency, setBaseCurrency] = useState('BRL');
    const [favorites, setFavorites] = useState([]);
    const [currenciesQuote, setCurrenciesQuote] = useState({
        'BRL': 1,
        'USD': 1,
        'EUR': 1,
        'GBP': 1,
        'BTC': 1,
        'ETH': 1,
    });

    const updateStateQuotes = async () => {
        console.log('Atualizando cotações...');
        let newQuotes = await getCurrency((Object.keys(currenciesQuote)).filter(code => {
            return code !== 'BRL';
        }));
        console.log('cotações atualizadas: ', newQuotes);

        let date = new Date();
        let timestamp = date.getTime();

        updateItem('quotes', newQuotes);
        updateItem('lastUpdate', timestamp.toString());
        
        setCurrenciesQuote(newQuotes);
    }

    useEffect(() => {

        const initialize = async () => {
            const response_baseCurrency = await initBaseCurrency();
            setBaseCurrency(response_baseCurrency);
            console.log(response_baseCurrency);

            const response_favorites = await initFavorites();
            setFavorites(response_favorites);
            console.log(response_favorites);

            const response_quotes = await initQuotes();
            if(response_quotes === -1) {
                await updateStateQuotes();
            } else {
                console.log('Cotações atualizadas recentemente.')
                setCurrenciesQuote(response_quotes);
                console.log(response_quotes);
            }
        };

        initialize();

    }, []);

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
            // Caso ocorra algum erro durante a atualização da moeda base
            // retorna ao estado anterior
            updateItem('baseCurrency', currentBaseCurrency);
            setBaseCurrency(currentBaseCurrency);
            console.log(`Error: ${e}`);
        }
    };

    return (
        <Context.Provider
            value={{
                baseCurrency, 
                favorites, 
                currenciesQuote, 
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