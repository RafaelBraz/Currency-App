import { StyleSheet } from 'react-native';

import Constants from '../../../constants';

export default StyleSheet.create({
    newBlock: {
        height: 60,
        borderColor: Constants.theme.primary,
        borderWidth: 1,
        justifyContent: 'center',
    },
    optionContent: {
        borderLeftColor: Constants.theme.primary,
        borderRightColor: Constants.theme.primary,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    optionBlock: {
        width: '100%', 
        height: 60, 
        borderBottomColor: Constants.theme.primary, 
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionText: {
        color: Constants.theme.primary,
    },
});