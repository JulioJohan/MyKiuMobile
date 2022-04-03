import {StyleSheet} from 'react-native'

const globalStyles = StyleSheet.create({
    contenedor:{
        flex: 1,
    },
    contenido: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: '2.5%',
        flex: 1
    },
    titulo: {
        textAlign: 'center',
        marginBottom: 20, 
        fontSize: 32,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#c2c2c2',
        marginBottom: 20
    },
    botton: {
        backgroundColor: '#800080',
        marginTop: 5
    },
    bottonTexto:{
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    enlace: {
        color: '#000000',
        marginTop: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase' 
    }

})

export default globalStyles