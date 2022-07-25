import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Poke } from '../../@types/poke';
import PokeType from '../../components/poke-types';
import { usePoke } from '../../hooks/usePoke';
import About from '../Content/About';
import Evolutions from '../Content/Evolutions';
import Status from '../Content/Status';
import {
  BackgroundCard,
  BackgroundImage,
  BackIcon,
  Content,
  Nav,
  NavGuide,
  PokeBackgroundImage,
  PokeBallonNav,
  PokeId,
  PokeName,
  PressableMenu,
  Types,
  SelectedNavGuide,
} from './styles';

type ProfileProps = {
  route: any;
  backgroundTypeColor: string;
};

export function Profile({ route }: ProfileProps) {
  const { poke, backgroundTypeColor, formatedId } = route.params;
  const { getPokeDetail } = usePoke();
  const navigation = useNavigation();
  const [pokeDetail, setPokeDetail] = useState<Poke>();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<string>('about');

  async function loadInfos() {
    const data = await getPokeDetail(poke.name);
    setPokeDetail(data);
    setIsLoading(false);
  }

  useEffect(() => {
    loadInfos();
  }, []);

  if (isLoading) {
    return <BackgroundImage color="#fff" />;
  }

  return (
    <BackgroundCard color={backgroundTypeColor}>
      <Image
        style={{
          width: 125,
          height: 125,
          position: 'absolute',
          left: 40,
          top: 95,
          bottom: 95,
        }}
        source={{ uri: poke.sprites.other['official-artwork'].front_default }}
      />
      <Image
        style={{
          width: 130,
          height: 130,
          position: 'absolute',
        }}
        source={{ uri: '../../assets/background.svg' }}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <BackgroundImage />
      <PokeBackgroundImage />
      <PokeId>#{formatedId}</PokeId>
      <PokeName>{poke.name}</PokeName>
      <Types>
        {poke.types.map(type => {
          return (
            <PokeType
              key={type.type.name}
              type={type.type.name}
              name={type.type.name}
            />
          );
        })}
      </Types>
      <Nav>
        <PressableMenu onPress={() => setContent('about')}>
          {content === 'about' ? (
            <>
              <SelectedNavGuide>About</SelectedNavGuide>
              <PokeBallonNav />
            </>
          ) : (
            <NavGuide>About</NavGuide>
          )}
        </PressableMenu>
        <PressableMenu onPress={() => setContent('status')}>
          {content === 'status' ? (
            <>
              <SelectedNavGuide>Status</SelectedNavGuide>
              <PokeBallonNav />
            </>
          ) : (
            <NavGuide>Status</NavGuide>
          )}
        </PressableMenu>
        <PressableMenu onPress={() => setContent('evolutions')}>
          {content === 'evolutions' ? (
            <>
              <SelectedNavGuide>Evolution</SelectedNavGuide>
              <PokeBallonNav />
            </>
          ) : (
            <NavGuide>Evolution</NavGuide>
          )}
        </PressableMenu>
      </Nav>
      <Content>
        {content === 'status' ? (
          <Status backgroundColor={backgroundTypeColor} poke={pokeDetail} />
        ) : null}
        {content === 'about' ? (
          <About backgroundColor={backgroundTypeColor} poke={pokeDetail} />
        ) : null}
        {content === 'evolutions' ? (
          <Evolutions backgroundColor={backgroundTypeColor} poke={pokeDetail} />
        ) : null}
      </Content>
    </BackgroundCard>
  );
}
