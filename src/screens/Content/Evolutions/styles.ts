import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Pokeball from '../../../assets/ballGrey.svg';
import Arrow from '../../../assets/evolutionArrow.svg';

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  margin-bottom: 20px;
  margin-left: 10%;
`;

export const Data = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_stat};
  width: ${RFValue(120)}px;
  line-height: ${RFValue(16)}px;
  text-transform: capitalize;
  text-align: center;
`;
export const DataContent = styled.Text`
  color: ${({ theme }) => theme.colors.text_ternary};
  font-family: ${({ theme }) => theme.fonts.montserrat_regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(16)}px;
  text-transform: capitalize;
  text-align: center;
  width: 100px;
  margin-top: 12px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const EvolutionArrow = styled(Arrow)`
  height: 20px;
  width: 20px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const PokeBackgroundImage = styled(Pokeball)`
  position: absolute;
  z-index: -2;
`;
