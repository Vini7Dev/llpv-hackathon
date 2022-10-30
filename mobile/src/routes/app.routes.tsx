import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from '../screens/Login'
import { Signup } from '../screens/Signup'

const Auth = createStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Signup" component={Signup} />
    </Auth.Navigator>
  )
}
