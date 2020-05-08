import React, { useContext, useState } from 'react';
import { View } from 'react-native';

import Title from '../../components/title';
import SelectInput from '../../components/select-input-button';

import { Context } from '../../../Datas/context';

const Conversor = () => {
    const { baseCurrency } = useContext(Context);

    const [firstValue, setFirstValue] = useState(null);
    const [secondValue, setSecondValue] = useState(null);

    const changeFirst = (value) => {
        setFirstValue(value);
        setSecondValue(parseFloat(value*2).toFixed(2).toString())
    }

    const changeSecond = (value) => {
        setFirstValue(parseFloat(value/2).toFixed(2).toString());
        setSecondValue(value)
    }

    return (
        <View style={{height: '100%'}}>
            <Title text={`Calculadora\nde conversão`} />
            <SelectInput initialCurrency={baseCurrency} value={firstValue} onChangeValue={changeFirst} />
            <SelectInput initialCurrency={'USD'} value={secondValue} onChangeValue={changeSecond} />
        </View>
    );
}

export default Conversor;