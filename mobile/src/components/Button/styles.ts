import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  width: 100%;
  height: 56px;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  background: #2F6FED;
  border-radius: 10px;
  margin-top: 8px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #fff;
`;