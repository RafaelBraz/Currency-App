import React from 'react';
import { View } from 'react-native';
import Style from './styles';

const Modal = (props) => {
    return (
        <View style={Style.background}>
            <View style={Style.modal}>
                {props.children}
            </View>
        </View>
    );
};

export default Modal;