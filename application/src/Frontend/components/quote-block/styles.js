import { StyleSheet } from 'react-native';

import Constants from '../../constants';

export default StyleSheet.create({
    block: {
        width: '85%',
        height: 170,
        alignSelf: 'center',
        backgroundColor: Constants.theme.primary,
        marginBottom: 15,
        flexDirection: 'row',

        elevation: 7,
    },
    quote: {
        width: '80%',
        height: '100%',      
    },
    favorite: {
        width: '20%',
        height: '100%',
        alignItems: 'flex-end',
        padding: 5,
    },
    quoteText: {
        height: 85,
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontSize: 32,
        color: Constants.theme.white,
    },
    divisor: {
        width: '80%',
        height: 1,
        alignSelf: 'center',
        borderColor: Constants.theme.white,
        borderWidth: 1,
    },
});