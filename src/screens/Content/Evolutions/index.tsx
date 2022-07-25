import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Poke } from '../../../@types/poke';
import {
  Container,
  Data,
  DataContent,
  PokeBackgroundImage,
  Title,
  Wrapper,
  ContainerWrapper,
  EvolutionArrow,
} from './styles';

type EvolutionProps = {
  poke: Poke;
  backgroundColor: string;
};

export default function Evolutions({ poke, backgroundColor }: EvolutionProps) {
  const [firstId, setFirstId] = useState('');
  const [secondId, setSecondId] = useState('');
  const [thirdId, setThirdId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  function getIds() {
    if (poke.evolution_chain.chain.species.name === poke.name) {
      setFirstId(getFormatedId(Number(poke.id)));
      setSecondId(getFormatedId(Number(poke.id) + 1));
      setThirdId(getFormatedId(Number(poke.id) + 2));
      setIsLoading(false);
    } else if (
      poke.evolution_chain.chain.evolves_to[0].species.name === poke.name
    ) {
      setFirstId(getFormatedId(Number(poke.id) - 1));
      setSecondId(getFormatedId(Number(poke.id)));
      setThirdId(getFormatedId(Number(poke.id) + 1));
      setIsLoading(false);
    } else if (
      poke.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name ===
      poke.name
    ) {
      setFirstId(getFormatedId(Number(poke.id) - 2));
      setSecondId(getFormatedId(Number(poke.id) - 1));
      setThirdId(getFormatedId(Number(poke.id)));
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getIds();
  }, []);

  function getFormatedId(id: number) {
    if (id < 10) {
      return `#00${id}`;
    }
    if (id < 100) {
      return `#0${id}`;
    }
    return `#${id}`;
  }

  if (isLoading) {
    return <Container />;
  }

  return (
    <Container>
      <Title color={backgroundColor}>Evolution Chart</Title>
      {!poke.evolution_chain.chain.evolves_to[0] ? (
        <Wrapper>
          <Image
            style={{ width: 75, height: 75 }}
            source={{ uri: `${poke.evolution_chain.chain.species.sprite}` }}
          />
          <PokeBackgroundImage />
          <DataContent>{firstId}</DataContent>
          <Data>{poke.evolution_chain.chain.species.name}</Data>
        </Wrapper>
      ) : null}

      {!poke.evolution_chain.chain.evolves_to[0].evolves_to[0] ? (
        <ContainerWrapper>
          <Wrapper>
            <Image
              style={{ width: 75, height: 75 }}
              source={{ uri: `${poke.evolution_chain.chain.species.sprite}` }}
            />
            <PokeBackgroundImage />
            <DataContent>{firstId}</DataContent>
            <Data>{poke.evolution_chain.chain.species.name}</Data>
          </Wrapper>
          <EvolutionArrow />
          <Wrapper>
            <Image
              style={{ width: 75, height: 75 }}
              source={{
                uri: `${poke.evolution_chain.chain.evolves_to[0].species.sprite}`,
              }}
            />
            <PokeBackgroundImage />
            <DataContent>{secondId}</DataContent>
            <Data>{poke.evolution_chain.chain.evolves_to[0].species.name}</Data>
          </Wrapper>
        </ContainerWrapper>
      ) : null}

      {poke.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name ? (
        <>
          <ContainerWrapper>
            <Wrapper>
              <Image
                style={{ width: 75, height: 75 }}
                source={{ uri: `${poke.evolution_chain.chain.species.sprite}` }}
              />
              <PokeBackgroundImage />
              <DataContent>{firstId}</DataContent>
              <Data>{poke.evolution_chain.chain.species.name}</Data>
            </Wrapper>
            <EvolutionArrow />
            <Wrapper>
              <Image
                style={{ width: 75, height: 75 }}
                source={{
                  uri: `${poke.evolution_chain.chain.evolves_to[0].species.sprite}`,
                }}
              />
              <PokeBackgroundImage />
              <DataContent>{secondId}</DataContent>
              <Data>
                {poke.evolution_chain.chain.evolves_to[0].species.name}
              </Data>
            </Wrapper>
          </ContainerWrapper>
          <ContainerWrapper>
            <Wrapper>
              <Image
                style={{ width: 75, height: 75 }}
                source={{
                  uri: `${poke.evolution_chain.chain.evolves_to[0].species.sprite}`,
                }}
              />
              <PokeBackgroundImage />
              <DataContent>{secondId}</DataContent>
              <Data>
                {poke.evolution_chain.chain.evolves_to[0].species.name}
              </Data>
            </Wrapper>
            <EvolutionArrow />
            <Wrapper>
              <Image
                style={{ width: 75, height: 75 }}
                source={{
                  uri: `${poke.evolution_chain.chain.evolves_to[0].evolves_to[0].species.sprite}`,
                }}
              />
              <PokeBackgroundImage />
              <DataContent>{thirdId}</DataContent>
              <Data>
                {
                  poke.evolution_chain.chain.evolves_to[0].evolves_to[0].species
                    .name
                }
              </Data>
            </Wrapper>
          </ContainerWrapper>
        </>
      ) : null}
    </Container>
  );
}
