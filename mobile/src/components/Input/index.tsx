import React from 'react'
import { TextInputProps } from 'react-native'

import {
  InputContainer,
  InputText,
  InputIcon,
} from './styles'

interface InputProps extends TextInputProps {
  name: string
  placeholder: string
  icon?: string
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  icon,
}) => {
  return (
    <InputContainer>
      {
        icon && <InputIcon name={icon} size={27} color="#2F6FED" />
      }
      <InputText name={name} placeholder={placeholder} />
    </InputContainer>
  )
}
