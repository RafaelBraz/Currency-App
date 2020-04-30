import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    selectInputBlock: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 30,
    },
    selectedBlock: {
        height: 90,
        flexDirection: 'row',
        borderColor: '#676CFB',
        borderWidth: 1,
    },
    inputCurrency: {
        width: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#676CFB',
        borderColor: '#676CFB',
        borderRightWidth: 1,
    },
    inputValue: {
        width: '65%',
        height: 90,
        paddingRight: 30,
        fontSize: 20,
        color: '#676CFB',
        textAlign: 'right',
        textAlignVertical: 'center',
    },
    currencyOptionsBlock: {
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#676CFB',
        paddingTop: 10,
    },
    option: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderTopColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    optionTouched: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
    },
});