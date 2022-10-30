import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from '../screens/Login'
import { Signup } from '../screens/Signup'
import { CashFlow } from '../screens/CashFlow';

const App = createStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="CashFlow" component={CashFlow} />
      <App.Screen name="Login" component={Login} />
      <App.Screen name="Signup" component={Signup} />
    </App.Navigator>
  )
}
