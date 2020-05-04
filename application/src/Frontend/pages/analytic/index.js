import React, { useContext } from 'react';
import { View } from 'react-native';

import Title from '../../components/title';
import Select from '../../components/select-button';

import { Context } from '../../../Datas/context';

const Analytic = () => {
    const { baseCurrency } = useContext(Context);

    return (
        <View style={{height: '100%'}}>
            <Title text={'Análise temporal'} />
            <Select initialCode={baseCurrency} onValueChange={() => {}} />
        </View>
    );
}

export default Analytic;