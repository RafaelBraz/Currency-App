import React, { useContext, useState, useRef } from 'react';
import { View } from 'react-native';

import Title from '../../components/title';
import SelectInput from '../../components/select-input-button';

import { Context } from '../../../Datas/context';

const Conversor = () => {
    const { baseCurrency, getQuote } = useContext(Context);

    const [firstCurrencyCode, setFirstCurrencyCode] = useState(baseCurrency);
    const [secondCurrencyCode, setSecondCurrencyCode] = useState('USD');

    const [proportion, setProportion] = useState(1/getQuote('USD'));

    const changeFirstCurrency = (newCurrencyCode) => {
        setFirstCurrencyCode(newCurrencyCode);
        setProportion(getQuote(newCurrencyCode)/getQuote(secondCurrencyCode));
    };

    const changeSecondCurrency = (newCurrencyCode) => {
        setSecondCurrencyCode(newCurrencyCode);
        setProportion(getQuote(firstCurrencyCode)/getQuote(newCurrencyCode));
    };

    const [firstValue, setFirstValue] = useState(null);
    const [secondValue, setSecondValue] = useState(null);

    const changeFirst = (value) => {
        let converted = parseFloat(value*proportion).toFixed(2);

        setFirstValue(value);
        setSecondValue(converted.toString())
    }

    const changeSecond = (value) => {
        let converted = parseFloat(value/proportion).toFixed(2);

        setFirstValue(converted.toString());
        setSecondValue(value)
    }

    return (
        <View style={{height: '100%'}}>
            
            <Title text={`Calculadora\nde conversão`} />
            
            <SelectInput 
                selectedOption={firstCurrencyCode}
                setSelectedOption={changeFirstCurrency}
                value={firstValue} 
                onChangeValue={changeFirst} 
            />

            <SelectInput
                selectedOption={secondCurrencyCode}
                setSelectedOption={changeSecondCurrency}
                value={secondValue} 
                onChangeValue={changeSecond} 
            />

        </View>
    );
}

export default Conversor;