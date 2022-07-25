import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Background from '../../assets/background.svg';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 20px 50px 20px;
`;

export const Header = styled.View`
  height: 30%;
  margin-bottom: 45px;
`;

export const Pokeball = styled(Background)`
  width: 100%;
  align-self: center;
  z-index: -2;
  position: absolute;
`;

export const FiltersBox = styled.View`
  margin-top: 40px;
  margin-right: 0;
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_bold};
  font-size: ${RFValue(32)}px;
  margin-top: 35px;
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat_regular};
  font-size: ${RFValue(14)}px;
  margin-top: 35px;
`;

export const InputBox = styled.View`
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.colors.background_input};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 21px;
  margin-bottom: 45px;
`;
