import React from 'react';
import { View, Dimensions } from 'react-native';

import { LineChart } from 'react-native-chart-kit';

const Chart = (props) => {

    return (
        <View style={{
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingTop: 50,
        }}>
            <LineChart
                bezier
                data={props.data}
                width={Dimensions.get("window").width*8 /10}
                height={220}
                chartConfig={{
                    backgroundColor: Constants.theme.backgroud,
                    backgroundGradientFrom: Constants.theme.backgroud,
                    backgroundGradientTo: Constants.theme.backgroud,
                    color: () => Constants.theme.primaryRGBA,
                }}
            />
        </View>    
    );
};

export default Chart;