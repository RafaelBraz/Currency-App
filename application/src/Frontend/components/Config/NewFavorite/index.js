import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Constants from '../../../constants';

import Style from './styles';

const NewFavorite = (parentProps) => {
    const [optionsOpen, setOptionsOpen] = useState(false);

    const Option = (optionProps) => {
        return (
            <View style={Style.optionBlock} onTouchEnd={
                () => { 
                    optionProps.onSelectOption(optionProps.code);
                    setOptionsOpen(false);
                }
            }>
                <Text style={Style.optionText}>{`${optionProps.code} - ${optionProps.name}`}</Text>
            </View>
        );
    };

    return (
        <View>
            <View style={Style.newBlock} onTouchEnd={
                () => { setOptionsOpen(true) }
            }>
                <Icon name='add' color={Constants.theme.primary} />
            </View>
            {
                optionsOpen ?
                <View style={Style.optionContent}>
                    {
                        Constants.currencies.map(currency => <Option name={currency.name} key={currency.code} code={currency.code} onSelectOption={parentProps.addFavorite} />)
                    }
                </View>
                : null
            }
        </View>
    );
};

export default NewFavorite;