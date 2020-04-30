import React from 'react';
import { View, Text } from 'react-native';

import Style from './styles';

const Title = (props) => {
    return (
        <View style={Style.block}>
            <Text style={Style.title}>{props.text}</Text>
        </View>
    );
  };
  
  export default Title;