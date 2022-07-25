import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import themes from '../../themes';
import TypeIcon from '../type-icon';
import { TypeBackground, TypeName } from './styles';

type PokeTypeProps = {
  type: string;
  name?: string;
};

PokeType.defaultProps = {
  name: '',
};

export default function PokeType({ type, name }: PokeTypeProps) {
  const [typeColor, setTypeColor] = useState('');
  // eslint-disable-next-line no-shadow
  function getTypeColor(type: string) {
    // eslint-disable-next-line array-callback-return
    Object.keys(themes.light.colors).map(key => {
      if (key === `type_${type}`) {
        setTypeColor(themes.light.colors[key]);
      }
    });
  }

  useEffect(() => {
    getTypeColor(type);
  }, []);

  return (
    <View style={{ alignItems: 'baseline' }}>
      <TypeBackground color={typeColor}>
        <TypeIcon type={type} />

        {name ? <TypeName>{type}</TypeName> : null}
      </TypeBackground>
    </View>
  );
}
