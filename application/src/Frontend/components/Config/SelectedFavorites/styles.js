import { StyleSheet } from 'react-native';

import Constants from '../../../constants';

export default StyleSheet.create({
    favoriteBlock: {
        backgroundColor: Constants.theme.primary, 
        width: '80%', 
        height: 60,
        marginBottom: 10,
        flexDirection: 'row', 
        alignItems: 'center',
    },
    favoriteCurrency: {
        width: '80%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    favoriteDivisor: {
        width: 1, 
        height: '80%', 
        borderColor: Constants.theme.white, 
        borderWidth: 1,
    },
    favoriteDeleteButton: {
        width: '20%', 
        height: '100%', 
        justifyContent: 'center',
    }
});