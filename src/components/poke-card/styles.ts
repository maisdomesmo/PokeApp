import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Points from '../../assets/points.svg';
import Pokeball from '../../assets/pokeball.svg';

type BackgroundColor = {
  color: string;
};

export const BackgroundCard = styled.View<BackgroundColor>`
  height: ${RFValue(114)}px;
  width: 100%;
  border-radius: 10px;
  background: ${props => props.color};
  margin-top: 30px;
`;

export const Types = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  margin-top: 5px;
`;

export const BackgroundImage = styled(Points)`
  width: ${RFValue(74)}px;
  height: ${RFValue(32)}px;
  margin: 5px 0 0 90px;
`;

export const PokeBackgroundImage = styled(Pokeball)`
  position: absolute;
  right: 0;
`;

export const PokeId = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  color: #17171b;
  margin: 20px 0 0 20px;
  position: absolute;
`;

export const PokeName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: ${RFValue(24)}px;
  text-transform: capitalize;
  margin: 0 0 0 20px;
`;
