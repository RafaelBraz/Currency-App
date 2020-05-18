import { StyleSheet } from 'react-native';

import Constants from '../../constants';

export default StyleSheet.create({
    FAB: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 65,
        height: 65,
        borderRadius: 100,
        borderColor: Constants.theme.primary,
        borderWidth: 1,
        backgroundColor: Constants.theme.white,
        alignItems: 'center',
        justifyContent: 'center',

        elevation: 2, 
    }

});