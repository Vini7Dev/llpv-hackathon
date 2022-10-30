import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, PageTitle, SuccessArea } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export const Login: React.FC = () => {
  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = useCallback(async () => {
    /*
    const response = await api.put<{ token: string }>('/login', {
      payload: {
        user: email,
        password,
      }
    })

    console.log('====> response', response)

    if (!response.data.token) {
      return
    }

    await AsyncStorage.setItem('@Hackathon:token', response.data.token);
    */

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      navigation.navigate('CashFlow')
    }, 3000)

  }, [email, password])

  return (
    <Container>
      <PageTitle>Bem vindo(a), Vamos começar?</PageTitle>

      <Input
        name="email"
        placeholder="E-mail"
        icon="user"
        onChangeText={(value) => setEmail(value)}
      />
      
      <Input
        name="password"
        placeholder="Senha"
        icon="lock"
        onChangeText={(value) => setPassword(value)}
      />
      
      {
        loading
          ? <LoadingComponent />
          : <Button text="Entrar" onPress={() => handleLogin()} />
      }

      <Button text="Cadastrar-se" variant="secondary" onPress={() => navigation.navigate('Signup')} />
    </Container>
  )
}

const LoadingComponent: React.FC = () => {
  return (
    <SuccessArea>
      <ActivityIndicator color="#2F6FED" size={52} />
    </SuccessArea>
  )
}
