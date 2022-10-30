import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { ButtonContainer, ButtonText } from './styles'

interface ButtonProps extends RectButtonProperties {
  text: string
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', ...rest }) => {
  return (
    <ButtonContainer variant={variant} {...rest}>
      <ButtonText variant={variant}>{text}</ButtonText>
    </ButtonContainer>
  )
}