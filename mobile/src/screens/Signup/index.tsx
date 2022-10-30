import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Container, PageSubtitle, PageTitle, SubmitButtonArea, SubtitleImage } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import emogiSubtitle from '../../assets/emogi-subtitle.png'

export const Signup: React.FC = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <PageTitle>Falta pouco!</PageTitle>
          <PageSubtitle>
            Precisamos de alguns dados <SubtitleImage source={emogiSubtitle} width={32} height={32} />
          </PageSubtitle>

          <Input name="socialReason" placeholder="Razão Social" icon="award" />
          <Input name="cnpj" placeholder="CNPJ" icon="briefcase" />
          <Input name="whatsapp" placeholder="Whatsapp" icon="phone" />
          <Input name="email" placeholder="E-mail" icon="at-sign" />
          <Input name="password" placeholder="Senha" icon="lock" />

          <SubmitButtonArea>
            <Button text="Cadastrar-se" />
          </SubmitButtonArea>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  )
}
