import { StyleSheet } from 'react-native';

import Constants from '../../constants';

export default StyleSheet.create({
    block: { 
        width: '100%',
        height: 130,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        color: Constants.theme.primary,
        textAlign: 'center',
    },
});
