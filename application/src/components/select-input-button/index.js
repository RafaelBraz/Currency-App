import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import Style from './styles';

import Context from '../../context';

const SelectInput = (props) => {
    const Constants = useContext(Context);

    const [displayOption, setDisplayOption] = useState(false);
    const [selectedOption, setSelectedOption] = useState(Constants.currencies[0]);

    const Option = (props) => {
        const [style, setStyle] = useState({
            optionStyle: Style.option,
            textColor: '#FFFFFF',
        });

        return (
            <View 
                style={style.optionStyle}
                onTouchStart={() => {
                    setStyle({
                        optionStyle: Style.optionTouched,
                        textColor: '#676CFB',
                    });
                }}
                onTouchEnd={() => {
                    setStyle({
                        optionStyle: Style.option,
                        textColor: '#FFFFFF',
                    });
                    setSelectedOption(Constants.currencies.filter(currency => currency.code === props.code)[0]);
                    setDisplayOption(false);
                }}
            >
                <Text style={{color: style.textColor}}>
                    {props.code}
                </Text>
            </View>
        );
    };

    const textChange = (text) => {
        console.log(`O texto mudou: ${text}`);
    }

    return (
        <View style={Style.selectInputBlock}>
            <View style={Style.selectedBlock}>
                <View
                    style={Style.inputCurrency}
                    onTouchStart={() => { setDisplayOption(!displayOption) }}
                >
                    <Text style={{fontSize: 20, color: '#FFFFFF', marginRight: 10 }}>{selectedOption.code}</Text>
                    <Icon name='expand-more' color='#FFFFFF' />
                </View>
                <TextInput
                    style={Style.inputValue} 
                    keyboardType={'numeric'} 
                    placeholder={'0'} 
                    onChangeText={text => textChange(text || 0)}
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