import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import themes from '../themes';
import { PokeProvider } from './usePoke';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  /* const deviceTheme = useColorScheme();
  const theme = (deviceTheme && themes[deviceTheme]) || themes.light; */

  return (
    <ThemeProvider theme={themes.light}>
      <NavigationContainer>
        <PokeProvider>
          {children}
          <StatusBar
            barStyle="dark-content"
            backgroundColor={themes.light.colors.background}
          />
        </PokeProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
