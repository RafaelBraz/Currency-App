import React, { useContext, useState, useRef, useEffect } from 'react';
import { View } from 'react-native';

import Title from '../../components/title';
import SelectInput from '../../components/select-input-button';

import { Context } from '../../../Datas/context';

const Conversor = () => {
    const { baseCurrency, currenciesQuote } = useContext(Context);

    const [firstCurrencyCode, setFirstCurrencyCode] = useState(baseCurrency);
    const [secondCurrencyCode, setSecondCurrencyCode] = useState('USD');

    const [proportion, setProportion] = useState(1/currenciesQuote['USD']);
    
    useEffect(() => {
        setProportion(currenciesQuote[firstCurrencyCode]/currenciesQuote[secondCurrencyCode]);
    }, [currenciesQuote])

    const changeFirstCurrency = (newCurrencyCode) => {
        setFirstCurrencyCode(newCurrencyCode);
        setProportion(currenciesQuote[newCurrencyCode]/currenciesQuote[secondCurrencyCode]);
    };

    const changeSecondCurrency = (newCurrencyCode) => {
        setSecondCurrencyCode(newCurrencyCode);
        setProportion(currenciesQuote[firstCurrencyCode]/currenciesQuote[newCurrencyCode]);
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
        <View style={{height: '100%', backgroundColor: Constants.theme.backgroud}}>
            
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