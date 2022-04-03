import React from 'react';
import {View} from 'react-native'
import {Container, Button, Text, H1, Input, Form, Item, Toast} from 'native-base'
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native'


const Login = () => {
    //React Navigation
    const navigation = useNavigation();
    return ( 
        <Container style={[globalStyles.contenedor, {backgroundColor: '#ffbbff'}]}>
            <View style = {globalStyles.contenido}>
                <H1 style = {globalStyles.titulo}> MyKiu</H1>

                <Form>
                    <Item inlineLabel last style= {globalStyles.input}>
                        <Input
                            autoCompleteType = "email"
                            placeholder='Email'
                        />
                    </Item>
                    <Item inlineLabel last style= {globalStyles.input}>
                        <Input 
                            secureTextEntry={true}
                            placeholder='Password'
                        />
                    </Item>
                </Form>

                <Button
                square
                block
                style ={globalStyles.botton}
                >
                    <Text style ={globalStyles.bottonTexto}>Iniciar Sesión</Text>
                </Button>

                <Text 
                    onPress={() => navigation.navigate("CrearCuenta")}
                    style ={globalStyles.enlace}>Crear Cuenta</Text>
            </View>
        </Container>
     );
}
export default Login;
