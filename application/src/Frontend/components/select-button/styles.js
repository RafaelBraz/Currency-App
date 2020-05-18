import { StyleSheet } from 'react-native';

import Constants from '../../constants';

export default StyleSheet.create({
    selectBlock: {
        width: '80%',
        alignSelf: 'center',
    },
    selectedBlock: {
        height: 60,
        backgroundColor: Constants.theme.primary,
        flexDirection: 'row',        
    },
    optionsBlock: {
        marginTop: 5,
        paddingTop: 15,
        backgroundColor: Constants.theme.primary,
    },
    option: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        marginBottom: 15,
        borderTopColor: Constants.theme.white,
        borderBottomColor: Constants.theme.white,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    optionTouched: {
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        marginBottom: 15,
        backgroundColor: Constants.theme.white,
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
        backgroundColor: Constants.theme.white,
        borderColor: Constants.theme.white,
        borderWidth: 0.5,
    },
    inputListIcon: {
        width: '20%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
