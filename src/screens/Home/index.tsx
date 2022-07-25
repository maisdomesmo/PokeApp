import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import Filters from '../../components/Filters';
import {
  About,
  Container,
  FiltersBox,
  Header,
  InputBox,
  Pokeball,
  Title,
} from './styles';
import PokeCard from '../../components/poke-card';
import { usePoke } from '../../hooks/usePoke';
import { pokeCardInfo } from '../../@types/pokeCardInfo';

export function HomeScreen() {
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { getPoke } = usePoke();
  const [pokes, setPokes] = useState<pokeCardInfo[]>([]);

  async function loadPoke() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const poke = await getPoke(offset);
    const newpokes: pokeCardInfo[] = [...pokes, ...poke];

    setOffset(offset + 20);
    setPokes(newpokes);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPoke();
  }, []);

  const renderItem = poke => <PokeCard poke={poke} />;

  return (
    <Container>
      <View>
        <Header>
          <Pokeball />
          <FiltersBox>
            <Filters />
          </FiltersBox>
          <Title>Pokédex</Title>
          <About>
            Search for Pokémon by name or using the National Pokédex number.
          </About>
          <InputBox>
            <TextInput placeholder="What Pokémon are you looking for?" />
          </InputBox>
        </Header>
      </View>

      {isLoading ? (
        <Container />
      ) : (
        <FlatList
          data={pokes}
          // eslint-disable-next-line react/jsx-no-bind
          onEndReached={loadPoke}
          onEndReachedThreshold={0.5}
          renderItem={({ item: poke }) => renderItem(poke)}
          keyExtractor={poke => poke.name}
          initialNumToRender={40}
          maxToRenderPerBatch={100}
          updateCellsBatchingPeriod={10}
          removeClippedSubviews
        />
      )}
    </Container>
  );
}
