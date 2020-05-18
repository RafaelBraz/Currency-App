import { StyleSheet } from 'react-native';

import Constants from '../../constants';

export default StyleSheet.create({
    selectInputBlock: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 30,
    },
    selectedBlock: {
        height: 90,
        flexDirection: 'row',
        borderColor: Constants.theme.primary,
        borderWidth: 1,
    },
    inputCurrency: {
        width: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.theme.primary,
        borderColor: Constants.theme.primary,
        borderRightWidth: 1,
    },
    inputValue: {
        width: '65%',
        height: 90,
        paddingRight: 30,
        fontSize: 20,
        color: Constants.theme.primary,
        textAlign: 'right',
        textAlignVertical: 'center',
    },
    currencyOptionsBlock: {
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.theme.primary,
        paddingTop: 10,
    },
    option: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderTopColor: Constants.theme.white,
        borderBottomColor: Constants.theme.white,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    optionTouched: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: Constants.theme.white,
    },
});