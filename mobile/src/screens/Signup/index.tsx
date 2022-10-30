import React, { useState } from 'react'
import { ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import StepIndicator from 'react-native-step-indicator'

import {
  Container,
  PageSubtitle,
  PageTitle,
  SubmitButtonArea,
  SubtitleImage,
  StepIndicatorContainer,
  SuccessArea,
} from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import emogiSubtitle from '../../assets/emogi-subtitle.png'

const labels = ["Identificação","Acesso","Sucesso!"]
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#2F6FED',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#2F6FED',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#2F6FED',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#2F6FED',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#2F6FED',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#2F6FED'
}

export const Signup: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState(0)

  return (
    <Container>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <StepIndicatorContainer>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={currentPosition}
              stepCount={3}
              labels={labels}
            />
          </StepIndicatorContainer>

          { currentPosition === 0 && <Step1 onPressToContinue={setCurrentPosition} /> }
          { currentPosition === 1 && <Step2 onPressToContinue={setCurrentPosition} /> }
          { currentPosition === 2 && <Step3 /> }
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  )
}

const Step1: React.FC<{ onPressToContinue(step: number): void}> = ({
  onPressToContinue,
}) => {
  return (
    <>
      <PageTitle>Falta pouco!</PageTitle>
      <PageSubtitle>
        Precisamos de alguns dados <SubtitleImage source={emogiSubtitle} width={32} height={32} />
      </PageSubtitle>

      <Input name="socialReason" placeholder="Razão Social" icon="award" />
      <Input name="cnpj" placeholder="CNPJ" icon="briefcase" />
      <Input name="whatsapp" placeholder="Whatsapp" icon="phone" />

      <SubmitButtonArea>
        <Button text="Próximo" onPress={() => onPressToContinue(1)} />
      </SubmitButtonArea>
    </>
  )
}

const Step2: React.FC<{ onPressToContinue(step: number): void}> = ({
  onPressToContinue,
}) => {
  return (
    <>
      <PageTitle>Última etapa!</PageTitle>
      <PageSubtitle>
        Para finalizar, insira seus dados de acesso
      </PageSubtitle>

      <Input name="email" placeholder="E-mail" icon="at-sign" />
      <Input name="password" placeholder="Senha" icon="lock" />

      <SubmitButtonArea>
        <Button text="Cadastrar-se" onPress={() => onPressToContinue(2)} />
      </SubmitButtonArea>
    </>
  )
}

const Step3: React.FC = () => {
  return (
    <SuccessArea>
      <ActivityIndicator color="#2F6FED" size={52} />
    </SuccessArea>
  )
}
