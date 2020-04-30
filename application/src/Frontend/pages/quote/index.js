import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';

import Title from '../../components/title';
import QuoteBlock from '../../components/quote-block';

import Constants from '../../constants';

const Quote = () => {
    const [favoriteList, setFavoriteList] = useState([{title: true, code: '#'}]);

    useEffect(() => {
        const favorites = Constants.currencies.filter( currency => Constants.favorites.includes(currency.code) );
        setFavoriteList([{title: true, code: '#'}, ...favorites]);
        console.log(favoriteList);
    }, [Constants.favorites]);

    return (
        <View style={{height: '100%'}}>
            <FlatList
                data={favoriteList}
                renderItem={({item}) => item.title ? 
                    <Title text={`Cotação das\nmoedas favoritas`} /> 
                    :<QuoteBlock 
                        favorite={item.code}
                        baseCurrency={'BRL'}
                        baseValue={item.valueInBRL}
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