import { StyleSheet } from 'react-native';

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
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    text: {
        width: '80%',
        height: 60,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 16,
        color: '#676CFB',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    newBlock: {
        width: '80%',
        height: 60,
        marginBottom: 20,
        borderColor: '#676CFB',
        borderWidth: 1,
        justifyContent: 'center',
    },
});