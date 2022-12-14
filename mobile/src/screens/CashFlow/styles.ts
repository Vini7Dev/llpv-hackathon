import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'
import FeatherIcons from '@expo/vector-icons/Feather'

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 25px;
  background-color: #fff;
`

export const TopBar = styled.View`
  width: 100%;
  height: 75px;
  background-color: #2F6FED;
`

export const PageTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #2F6FED;
  margin: 20px 0;
`

export const DateInputsContainer = styled.View`
  flex-direction: row;
`

export const DateInputsDivisor = styled.View`
  width: 10px;
  height: 10px;
`

export const CashFlowList = styled(ScrollView)``

export const CashFlowPerMonth = styled.View``

export const CashFlowMonth = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #2F6FED;
  margin-bottom: 16px;
`

export const CashFlowTotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 120px;
`

export const CashFlowTotalIcon = styled(FeatherIcons)`
  width: 30px;
  height: 30px;
  background-color: #F0F5FF;
  color: #2F6FED;
  justify-content: center;
  align-items: center;
  padding: 3px;
`

export const CashFlowTotalDescription = styled.Text`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  margin-left: 12px;
`

export const CashFlowValue = styled.Text`
  font-size: 15px;
  line-height: 18px;
  margin-left: auto;
`

export const CashFlowValueBold = styled.Text`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin-left: auto;
`

export const SelectDateIntervalAlert = styled.Text`
  font-size: 18px;
  line-height: 29px;
  margin: 20px 0;
`

export const SuccessArea = styled.View``

export const ModalTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #FD620B;
`

export const ModalDescription = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`

export const ModalQuestion = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`

export const ModalButtonsContainer = styled.Text`
  align-items: center;
`

export const ModalButtonPrimaryContainer = styled.View`
  border: 1px solid #FD620B;
  padding: 10px 20px;
  background-color: #FD620B;
`

export const ModalButtonPrimary = styled.Text`
  font-weight: 600;
  font-size: 12.7818px;
  line-height: 18px;
  color: #fff;
`

export const ModalButtonSecondaryContainer = styled.View`
  border: 1px solid #FD620B;
  padding: 10px 20px;
  margin-left: auto;
`

export const ModalButtonSecondary = styled.Text`
  font-weight: 600;
  font-size: 12.7818px;
  line-height: 18px;
  color: #FD620B;
`
