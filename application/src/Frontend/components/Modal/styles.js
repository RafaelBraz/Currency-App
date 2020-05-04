import { StyleSheet } from 'react-native';

import Constants from '../../constants';

export default StyleSheet.create({
    background: {
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#00000088',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: '80%',
        backgroundColor: Constants.theme.white,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
});