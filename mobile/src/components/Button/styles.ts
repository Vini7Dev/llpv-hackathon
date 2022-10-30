import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface IButtonContainerProps {
  variant?: 'primary' | 'secondary'
}

export const ButtonContainer = styled<IButtonContainerProps>(RectButton)`
  width: 100%;
  height: 56px;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  background: ${
    (props: IButtonContainerProps) => props.variant === 'primary' ? '#2F6FED' : 'transparent'
  };
  border-radius: 10px;
  margin-top: 8px;
  width: 100%;
`;

export const ButtonText = styled.Text<IButtonContainerProps>`
  font-size: 18px;
  color: ${
    (props: IButtonContainerProps) => props.variant === 'primary' ? '#fff' : '#2F6FED'
  };
`;
