import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    block: {
        width: '80%',
        height: 170,
        alignSelf: 'center',
        backgroundColor: '#676CFB',
        marginBottom: 30,
        flexDirection: 'row',
    },
    quote: {
        width: '70%',
        height: '100%',      
    },
    favorite: {
        width: '30%',
        height: '100%',
        alignItems: 'flex-end',
        padding: 5,
    },
    quoteText: {
        height: 85,
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontSize: 32,
        color: '#FFFFFF',
    },
    divisor: {
        width: '80%',
        height: 1,
        alignSelf: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
});