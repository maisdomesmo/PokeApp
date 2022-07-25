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
  margin-top: 30px;
`;

export const Data = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_stat};
  width: ${RFValue(130)}px;
  line-height: ${RFValue(14)}px;
  text-transform: capitalize;
`;
export const DataContent = styled.Text`
  color: ${({ theme }) => theme.colors.text_ternary};
  font-family: ${({ theme }) => theme.fonts.montserrat_regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  text-transform: capitalize;
  width: ${RFValue(30)}px;
  margin-left: 10px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

type StatsBarProps = {
  range: number;
  color: string;
};
export const StatsBar = styled.View<StatsBarProps>`
  margin-left: 20px;
  width: ${props => props.range}px;
  height: 4px;
  border-radius: 2px;
  background-color: ${props => props.color};
`;

export const TypesWrapper = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
`;
