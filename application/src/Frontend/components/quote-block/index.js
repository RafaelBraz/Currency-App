import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Style from './styles';

import { Context } from '../../../Datas/context';

const QuoteBlock = (props) => {
    const { removeFavorite } = useContext(Context);
    return (
        <View style={Style.block}>
            <View style={Style.quote}>
                <Text style={Style.quoteText}>{`${props.favoriteCode} 1`}</Text>
                <View style={Style.divisor}/>
                <Text style={Style.quoteText}>{`${props.baseCurrency} ${props.baseValue}`}</Text>
            </View>
            <View style={Style.favorite} onTouchEnd={
                () => { removeFavorite(props.favoriteCode) }
            }>
                <Icon name='grade' color='#FFFF00' size={30} />
            </View>
        </View>
    );
};

export default QuoteBlock;