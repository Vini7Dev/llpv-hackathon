import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, PageTitle } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export const Login: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <PageTitle>Bem vindo(a), Vamos começar?</PageTitle>

      <Input name="user" placeholder="E-mail" icon="user" />
      <Input name="password" placeholder="Senha" icon="lock" />

      <Button text="Entrar" onPress={() => navigation.navigate('Signup')} />
    </Container>
  )
}
