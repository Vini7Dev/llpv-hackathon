import styled from 'styled-components/native'
import FeatherIcons from '@expo/vector-icons/Feather'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

export const ComponentContainer = styled.View`
  flex-direction: column;
`

export const DateInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 24px;
  border: 2px solid #474053;
  border-radius: 4px;
  background-color: #fff;
`

export const DateInputButton = styled(TouchableNativeFeedback)`
  color: #3F444D;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.5;
`

export const DateInputButtonText = styled.Text`
  color: #3F444D;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.5;
`

export const DateInputLabel = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #3F444D;
  margin-bottom: 7px;
`

export const DateInputIcon = styled(FeatherIcons)`
  margin-right: 8px;
`

export const CalendarModal = styled.View`
  position: absolute;
  top: -70px;
  left: -25px;
  z-index: 1000;
  height: 8000px;
  background-color: #000;
`

export const CalendarModalContent = styled.View`
  position: relative;
  background-color: #fff;
`
