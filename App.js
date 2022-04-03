import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();

import Login from './views/Login';
import CrearCuenta from './views/CrearCuenta';

//sfc
const App = () => {
  return ( 
    <>
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
              backgroundColor: '#800080'
            },
            headerTintColor: '#fff',
            headerTitle:{
              fontWeight: 'Bold'
            }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </>
   );
}
 
export default App;