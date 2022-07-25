import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type TypeColor = {
  color: string;
};

export const TypeBackground = styled.View<TypeColor>`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;
  overflow: hidden;
`;

export const TypeName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_regular};
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: ${RFValue(12)}px;
  text-transform: capitalize;
  margin-left: 5px;
`;
