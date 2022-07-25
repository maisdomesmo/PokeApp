import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Points from '../../assets/pointsProfile.svg';
import Circle from '../../assets/circle.svg';
import Arrow from '../../assets/arrow.svg';
import PokeBall from '../../assets/pokeball.svg';

type BackgroundColor = {
  color: string;
};

export const BackgroundCard = styled.View<BackgroundColor>`
  height: 100%;
  width: 100%;

  background: ${props => props.color};
`;

export const Types = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 185px;
`;

export const BackgroundImage = styled(Points)`
  height: 65px;
  width: 140px;
  position: absolute;
  right: 0;
  top: 187px;
`;

export const BackIcon = styled(Arrow)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 42px;
  left: 42px;
`;

export const PokeBackgroundImage = styled(Circle)`
  width: ${RFValue(125)}px;
  height: ${RFValue(125)}px;
  margin: 95px 0 0 40px;
  z-index: -2;
  position: absolute;
`;
export const PressableMenu = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${RFValue(90)}px;
`;
export const PokeBallonNav = styled(PokeBall)`
  position: absolute;
  bottom: 5%;
`;

export const PokeId = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  color: #17171b;
  margin: 114px 0 0 190px;
  position: absolute;
`;

export const PokeName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  color: ${({ theme }) => theme.colors.text_secondary};
  font-size: ${RFValue(26)}px;
  text-transform: capitalize;
  margin: 133px 0 0 190px;
`;

export const Nav = styled.View`
  width: 90%;
  margin-left: 5%;
  position: absolute;
  top: 281px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedNavGuide = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  color: ${({ theme }) => theme.colors.text_secondary};
  margin-bottom: 45px;
  text-align: center;
`;

export const NavGuide = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_regular};
  color: ${({ theme }) => theme.colors.text_secondary};
  margin-bottom: 45px;
  text-align: center;
  width: 100%;
`;

export const Content = styled.ScrollView`
  border-radius: 20px;
  background-color: white;
  height: 100%;
  margin-top: 123px;
`;
