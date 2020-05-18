import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import Style from './styles';

import Constants from '../../constants';

const SelectInput = (parentProps) => {
    const [displayOption, setDisplayOption] = useState(false);

    const Option = (props) => {
        const [style, setStyle] = useState({
            optionStyle: Style.option,
            textColor: Constants.theme.white,
        });

        return (
            <View 
                style={style.optionStyle}
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
                    parentProps.setSelectedOption(Constants.currencies.filter(currency => currency.code === props.code)[0].code);
                    setDisplayOption(false);
                }}
            >
                <Text style={{color: style.textColor}}>
                    {props.code}
                </Text>
            </View>
        );
    };

    return (
        <View style={Style.selectInputBlock}>
            
            <View style={Style.selectedBlock}>
                
                <View
                    style={Style.inputCurrency}
                    onTouchStart={() => { setDisplayOption(!displayOption) }}
                >
                    <Text 
                        style={{ fontSize: 20, color: Constants.theme.white, marginRight: 10 }}
                    >
                        {parentProps.selectedOption}
                    </Text>
                    <Icon name='expand-more' color={Constants.theme.white} />
                </View>

                <TextInput
                    style={Style.inputValue} 
                    keyboardType={'numeric'}
                    onChangeText={text => parentProps.onChangeValue(text || '')}
                    placeholder={'0'}
                    value={parentProps.value}
                />

            </View>

            {
                displayOption ?
                <View style={Style.currencyOptionsBlock}>
                    {Constants.currencies.map(currency => 
                        <Option code={currency.code} key={currency.code} />
                    )}
                </View>
                : null
            }
            
        </View>
    );
  };
  
  export default SelectInput;