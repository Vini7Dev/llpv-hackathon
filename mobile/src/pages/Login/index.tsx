import React from 'react'
import Button from '../../components/Button'

import { Container, PageTitle } from './styles'
import { Input } from '../../components/Input'

export const Login: React.FC = () => {
  return (
    <Container>
      <PageTitle>Bem vindo(a), Vamos começar?</PageTitle>

      <Input name="user" placeholder="Email" icon="user" />
      <Input name="user" placeholder="Senha" icon="lock" />

      <Button text="Entrar" />
    </Container>
  )
}
