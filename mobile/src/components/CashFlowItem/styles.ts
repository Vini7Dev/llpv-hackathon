import styled from 'styled-components/native';
import FeatherIcons from '@expo/vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler';

export const CashFlowItemContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const CashFlowPositiveIcon = styled(FeatherIcons)`
  width: 30px;
  height: 30px;
  background-color: #EDFDF8;
  color: #08875D;
  justify-content: center;
  align-items: center;
  padding: 3px;
`

export const CashFlowNegativeIcon = styled(FeatherIcons)`
  background-color: #FEF1F2;
  color: #E02D3C;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding: 3px;
`


export const CashFlowDate = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #3F444D;
  width: 100%;
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
