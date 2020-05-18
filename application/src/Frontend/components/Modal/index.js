import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import Style from './styles';

const Modal = (props) => {
    return (
        <View style={Style.background}>
            <View style={Style.modal}>
                <View style={{position:'absolute', top: 10, right: 10}} onTouchEnd={
                    () => props.changeModalVisibility()
                }>
                    <Icon name="close" color="#999999" size={25} />
                </View>
                {props.children}
            </View>
        </View>
    );
};

export default Modal;