import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CashFlow } from '../screens/CashFlow';

const Auth = createStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="CashFlow" component={CashFlow} />
    </Auth.Navigator>
  )
}
