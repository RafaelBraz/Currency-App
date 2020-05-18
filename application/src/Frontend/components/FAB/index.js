import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import Constants from '../../constants';

import Styles from './styles';

const FAB = (props) => {
    return (
        <View style={Styles.FAB} onTouchEnd={
            () => { props.changeModalVisibility() }
        }>
            <Icon name='settings' color={Constants.theme.primary} />
        </View>
    );
}

export default FAB;