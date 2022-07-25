import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  padding-bottom: 50px;
`;
type TitleProps = {
  color: string;
};
export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  color: ${props => props.color};
  font-size: ${RFValue(16)}px;
  text-align: justify;
  margin-top: 20px;
`;

export const Data = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_stat};
  width: ${RFValue(95)}px;
  line-height: ${RFValue(14)}px;
  text-transform: capitalize;
`;
export const DataContent = styled.Text`
  color: ${({ theme }) => theme.colors.text_ternary};
  font-family: ${({ theme }) => theme.fonts.montserrat_regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  margin-left: ${RFValue(10)}px;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
