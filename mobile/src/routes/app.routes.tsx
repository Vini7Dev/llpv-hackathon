import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from '../screens/Login'
import { Signup } from '../screens/Signup'

const App = createStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Login" component={Login} />
      <App.Screen name="Signup" component={Signup} />
    </App.Navigator>
  )
}
