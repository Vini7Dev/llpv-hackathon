import styled from 'styled-components/native'
import FeatherIcons from '@expo/vector-icons/Feather'

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 24px;
  border: 2px solid #474053;
  border-radius: 4px;
  background-color: #fff;
`

export const InputText = styled.TextInput`
  &::placeholder {
    color: #3F444D;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    opacity: 0.5;
  }
`

export const InputIcon = styled(FeatherIcons)`
  margin-right: 8px;
`
