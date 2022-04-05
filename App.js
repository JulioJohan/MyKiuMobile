import 'react-native-gesture-handler';
import React from 'react';
import {Root} from 'native-base'

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();

import Login from './views/Login';
import CrearCuenta from './views/CrearCuenta';

//sfc
const App = () => {
  return ( 
    <>
    <Root>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Iniciar Sesión",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CrearCuenta"
          component={CrearCuenta}
          options={{
            title: "Crear cuenta",
            headerStyle:{
              backgroundColor: '#30305a'
            },
            headerTintColor: '#fff',
            headerTitle:{
              fontWeight: 'Bold'
            }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </Root>
    </>
   );
}
 
export default App;