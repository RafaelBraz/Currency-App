import React, { useState } from 'react';
import { View } from 'react-native';

import Title from '../../components/title';
import SelectInput from '../../components/select-input-button';

const Conversor = () => {
    return (
        <View style={{height: '100%'}}>
            <Title text={`Calculadora\nde conversão`} />
            <SelectInput />
            <SelectInput />
        </View>
    );
}

export default Conversor;