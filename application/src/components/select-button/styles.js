import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    selectBlock: {
        width: '80%',
        alignSelf: 'center',
    },
    selectedBlock: {
        height: 60,
        backgroundColor: '#676CFB',
        flexDirection: 'row',        
    },
    optionsBlock: {
        marginTop: 5,
        paddingTop: 15,
        backgroundColor: '#676CFB',
    },
    option: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        marginBottom: 15,
        borderTopColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    optionTouched: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
    },
    inputTitle: {
        width: '80%',
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    inputDivisor: {
        width: 0.5,
        height: 50,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 0.5,
    },
    inputListIcon: {
        width: '20%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
