import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import themes from '../../themes';
import PokeType from '../poke-types';
import {
  BackgroundCard,
  BackgroundImage,
  PokeBackgroundImage,
  PokeId,
  PokeName,
  Types,
} from './styles';
import { pokeCardInfo } from '../../@types/pokeCardInfo';
import { NavigationProps } from '../../routes/app.routes';

type PokeCardProps = {
  poke: pokeCardInfo;
};

export default function PokeCard({ poke }: PokeCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundTypeColor, setBackgroundTypeColor] = useState('');
  const navigation = useNavigation<NavigationProps>();
  const [formatedId, setFormatedId] = useState('');

  function getFormatedId(id: number) {
    if (id < 10) {
      setFormatedId(`00${id}`);
    } else if (id < 100) {
      setFormatedId(`0${id}`);
    } else {
      setFormatedId(`${id}`);
    }
  }

  function getTypeColor(type: string) {
    // eslint-disable-next-line array-callback-return
    Object.keys(themes.light.colors).map(key => {
      if (key === `background_type_${type}`) {
        setBackgroundTypeColor(themes.light.colors[key]);
      }
    });
  }

  useEffect(() => {
    getTypeColor(poke.types[0].type.name);
    getFormatedId(poke.id);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <View />;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Profile', {
          poke,
          backgroundTypeColor,
          formatedId,
        });
      }}
    >
      <BackgroundCard color={backgroundTypeColor}>
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
        <Image
          style={{
            width: RFValue(125),
            height: RFValue(125),
            position: 'absolute',
            right: 10,
            bottom: 10,
          }}
          source={{ uri: poke.sprites.other['official-artwork'].front_default }}
        />
        <Image
          style={{
            width: RFValue(130),
            height: RFValue(130),
            position: 'absolute',
          }}
          source={{ uri: '../../assets/background.svg' }}
        />
      </BackgroundCard>
    </TouchableOpacity>
  );
}
