import React, { useState, useEffect, useContext } from 'react';
import { FlatList, View, Text } from 'react-native';

import Title from '../../components/title';
import QuoteBlock from '../../components/quote-block';

import Constants from '../../constants';
import { Context } from '../../../Datas/context';

const Quote = () => {
    const { baseCurrency, favorites, currenciesQuote } = useContext(Context);
    const [favoriteList, setFavoriteList] = useState([{title: true, code: '#'}]);

    useEffect(() => {
        const favoritesCurrencies = Constants.currencies.filter( currency => favorites.includes(currency.code) );
        setFavoriteList([{title: true, code: '#'}, ...favoritesCurrencies]);
    }, [favorites]);

    return (
        <View style={{height: '100%'}}>
            <FlatList
                data={favoriteList}
                renderItem={({item}) => item.title ? 
                    <Title text={`Cotação das\nmoedas favoritas`} /> 
                    :<QuoteBlock 
                        favoriteCode={item.code}
                        baseCurrency={baseCurrency}
                        baseValue={currenciesQuote[item.code]}
                    />}
                keyExtractor={item => item.code}
            />
            {
                favoriteList.length === 1 ?
                <Text style={{
                    position: 'absolute',
                    top: '50%',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 18,
                    color: Constants.theme.gray,
                }}>
                    {`Você ainda não adicionou\nnenhuma moeda aos favoritos`}
                </Text>
                : null
            }
        </View>
    );
}

export default Quote;