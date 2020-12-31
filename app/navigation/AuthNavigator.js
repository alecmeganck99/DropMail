import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Startscherm, Overzicht, Registreer, Mail, Profiel, Write } from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Startscherm} />
    <Stack.Screen name="Mails" component={Overzicht} />
    <Stack.Screen name="Register" component={Registreer} />
    <Stack.Screen name="Mail" component={Mail} />
    <Stack.Screen name="Profiel" component={Profiel} />
    <Stack.Screen name="NewMail" component={Write} />
  </Stack.Navigator>
)

export default AuthNavigator;