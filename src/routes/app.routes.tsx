import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { pokeCardInfo } from '../@types/pokeCardInfo';
import { HomeScreen } from '../screens/Home';
import { Profile } from '../screens/Profile';

type RoutesParamList = {
  Home: undefined;
  Profile: {
    poke: pokeCardInfo;
    backgroundTypeColor: string;
    formatedId: string;
  };
};

export type NavigationProps = NativeStackNavigationProp<RoutesParamList>;

const Stack = createNativeStackNavigator<RoutesParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
