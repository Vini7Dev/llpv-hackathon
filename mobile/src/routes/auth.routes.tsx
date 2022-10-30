import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from '../screens/Login'
import { Signup } from '../screens/Signup'
import { CashFlow } from '../screens/CashFlow';

const Auth = createStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Signup" component={Signup} />
      <Auth.Screen name="CashFlow" component={CashFlow} />
    </Auth.Navigator>
  )
}
