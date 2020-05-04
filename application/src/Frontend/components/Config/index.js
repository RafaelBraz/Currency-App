import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import Select from '../select-button';
import NewFavorite from './NewFavorite';
import SelectedFavorites from './SelectedFavorites';

import { Context } from '../../../Datas/context';

import Constants from '../../constants';
import Style from './styles';

const Config = () => {
    const { baseCurrency, favorites, addFavorite, removeFavorite, changeBaseCurrency } = useContext(Context);

    return (
        <View>
            
            <Text style={Style.text}>Seleciona sua moeda base</Text>
            <Select initialCode={baseCurrency} onValueChange={changeBaseCurrency} />
            
            <Text style={Style.text}>{`Selecione até 4 (quatro)\nmoedas favoritas`}</Text>
            {
                favorites.map(favorite => <SelectedFavorites 
                        removeFavorite={removeFavorite}
                        currency={Constants.currencies.filter(currency => currency.code === favorite)[0]} 
                        key={favorite} 
                    />)
            }
            {    
                favorites.length < 4 ? <NewFavorite
                            addFavorite={addFavorite}
                        />
                : null
            }

        </View>
    );
    
};

export default Config;