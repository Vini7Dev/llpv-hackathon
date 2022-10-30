import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const Routes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const getAuthentication = async () => {
      const token = await AsyncStorage.getItem('@Hackathon:token')

      if(token) {
        setIsAuthenticated(true)
      }
    }

    getAuthentication()
  })
  
  if (!isAuthenticated) {
    return <AppRoutes />
  }
  
  return <AuthRoutes />
}
