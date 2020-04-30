import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Style from './styles';

const QuoteBlock = (props) => {
    return (
        <View style={Style.block}>
            <View style={Style.quote}>
                <Text style={Style.quoteText}>{`${props.favorite} 1`}</Text>
                <View style={Style.divisor}/>
                <Text style={Style.quoteText}>{`${props.baseCurrency} ${props.baseValue}`}</Text>
            </View>
            <View style={Style.favorite}>
                <Icon name='grade' color='#FFFF00' size={30} />
            </View>
        </View>
    );
};

export default QuoteBlock;