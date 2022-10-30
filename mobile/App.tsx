import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { Routes } from './src/routes/index.routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor='#312e38' translucent />

      <Routes />
    </NavigationContainer>
  )
}
