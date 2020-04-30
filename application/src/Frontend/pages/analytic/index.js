import React from 'react';
import { View } from 'react-native';

import Title from '../../components/title';
import Select from '../../components/select-button';

const Analytic = () => {
    return (
        <View style={{height: '100%'}}>
            <Title text={'Análise temporal'} />
            <Select />
        </View>
    );
}

export default Analytic;