import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import Style from './styles';

import Constants from '../../constants';

const Select = () => {
    const [displayOption, setDisplayOption] = useState(false);
    const [selectedOption, setSelectedOption] = useState(Constants.currencies[0]);

    const Option = (props) => {
        const [style, setStyle] = useState({
            optionStyle: Style.option,
            textColor: Constants.theme.white,
        });

        return (
            <View
                style = {style.optionStyle}
                onTouchStart={() => {
                    setStyle({
                        optionStyle: Style.optionTouched,
                        textColor: Constants.theme.primary,
                    });
                }}
                onTouchEnd={() => {
                    setStyle({
                        optionStyle: Style.option,
                        textColor: Constants.theme.white,
                    });
                    setSelectedOption(Constants.currencies.filter(currency => currency.code === props.code)[0]);
                    setDisplayOption(false);
                }}
            >
                <Text style={{color: style.textColor}}>{`${props.code} - ${props.name}`}</Text>
            </View>
        );
    };

    return (
        <View style={Style.selectBlock}>
            <View
                style={Style.selectedBlock}
                onTouchStart={() => { setDisplayOption(!displayOption) }}
            >
                <View style={Style.inputTitle}>
                    <Text style={{color: Constants.theme.white}}>{`${selectedOption.code} - ${selectedOption.name}`}</Text>
                </View>
                
                <View style={Style.inputDivisor}/>
                
                <View
                    style={Style.inputListIcon}
                >
                    <Icon name='expand-more' color={Constants.theme.white} />
                </View>
            </View>
            { 
                displayOption ?
                <View style={Style.optionsBlock}>
                    {
                        Constants.currencies.map(currency => <Option name={currency.name} key={currency.code} code={currency.code} />)
                    }
                </View>
                : null
            }
        </View>
    );
};
  
  export default Select;