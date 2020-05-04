import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Constants from '../../../constants';
import Style from './styles';

const SelectedFavorites = (props) => {
    return (
        <View style={Style.favoriteBlock}>
            
            <View style={Style.favoriteCurrency}>
                <Text style={{color: Constants.theme.white}}>{`${props.currency.code} - ${props.currency.name}`}</Text>
            </View>

            <View style={Style.favoriteDivisor} />

            <View style={Style.favoriteDeleteButton} onTouchEnd={
                () => { props.removeFavorite(props.currency.code) }
            }>
                <Icon name='clear' color={Constants.theme.white} />
            </View>

        </View>
    );
};

export default SelectedFavorites;