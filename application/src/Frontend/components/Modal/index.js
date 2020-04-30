import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Select from '../select-button';

import Constants from '../../constants';
import Style from './styles';

const Modal = () => {

    const SelectedFavorites = (props) => {
        return (
            <View style={{backgroundColor: Constants.themeColor, width: '80%', height: 60, marginBottom: 20, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: Constants.theme.white}}>{`${props.currency.code} - ${props.currency.name}`}</Text>
                </View>
                <View style={{width: 1, height: '80%', borderColor: Constants.theme.white, borderWidth: 1}} />
                <View style={{width: '20%', height: '100%', justifyContent: 'center'}}>
                    <Icon name='clear' color={Constants.theme.white} />
                </View>
            </View>
        );
    };

    const NewFavorite = () => {
        return (
            <View style={Style.newBlock}>
                <Icon name='add' color={Constants.themeColor} />
            </View>
        );
    };

    return (
        <View style={Style.background}>
            <View style={Style.modal}>
                
                <Text style={Style.text}>Seleciona sua moeda base</Text>
                <Select />
                
                <Text style={Style.text}>{`Selecione até 4 (quatro)\nmoedas favoritas`}</Text>
                {
                    Constants.favorites.map(favorite => <SelectedFavorites 
                            currency={Constants.currencies.filter(currency => currency.code === favorite)[0]} 
                            key={favorite} 
                        />)
                }
                {    
                    Constants.favorites.length < 4 ? <NewFavorite /> : null
                }

            </View>
        </View>
    );
};

export default Modal;