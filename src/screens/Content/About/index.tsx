import React, { useEffect, useState } from 'react';
import { pokeLocation } from '../../../@types/pokeLocation';
import { Poke } from '../../../@types/poke';
import { Container, Data, DataContent, Title, Wrapper } from './styles';
import PokeType from '../../../components/poke-types';

type AboutProps = {
  poke: Poke;
  backgroundColor: string;
};

export default function About({ poke, backgroundColor }: AboutProps) {
  const [isLoading, setIsLoading] = useState(true);

  async function loadPage() {
    setIsLoading(false);
  }

  function getIdOfPokeLocation(location: pokeLocation) {
    const formatedLocation = location.location_area.url.substring(40);
    return formatedLocation.substring(0, formatedLocation.length - 1);
  }

  function getNameOfPokeLocation(location: pokeLocation) {
    const locations: string[] = [];
    location.version_details.forEach(local => {
      locations.push(`${local.version.name} `);
    });
    return locations.join(', ');
  }

  useEffect(() => {
    loadPage();
  }, []);

  if (isLoading) {
    return <Container />;
  }

  return (
    <Container>
      <Title color={backgroundColor}>Pokédex Data</Title>
      <Wrapper>
        <Data>Species</Data>
        <DataContent>{poke.poke_species}</DataContent>
      </Wrapper>
      <Wrapper>
        <Data>Height</Data>
        <DataContent>{poke.height}</DataContent>
      </Wrapper>
      <Wrapper>
        <Data>Weight</Data>
        <DataContent>{poke.weight}</DataContent>
      </Wrapper>
      <Wrapper>
        <Data>Abilities</Data>
        <DataContent>
          {' '}
          {poke.abilities.map(abilitie => {
            return `${abilitie.ability.name} `;
          })}{' '}
        </DataContent>
      </Wrapper>
      <Wrapper>
        <Data>Weaknesses</Data>
        <DataContent>
          {poke.weakness.map(weak => {
            return <PokeType type={weak.name} key={weak.name} />;
          })}
        </DataContent>
      </Wrapper>

      <Title color={backgroundColor}>Training</Title>
      <Wrapper>
        <Data>Catch Rate</Data>
        <DataContent>{poke.capture_rate}</DataContent>
      </Wrapper>
      <Wrapper>
        <Data>Base Exp</Data>
        <DataContent> {poke.base_experience} </DataContent>
      </Wrapper>
      <Wrapper>
        <Data>Growth Rate</Data>
        <DataContent>{poke.growth_rate}</DataContent>
      </Wrapper>

      <Title color={backgroundColor}>Breeding</Title>
      <Wrapper>
        <Data>Egg Group</Data>
        <DataContent>{poke.egg_groups.join(', ')}</DataContent>
      </Wrapper>

      <Title color={backgroundColor}>Location</Title>
      {poke.location_area_encounters.map(location => {
        return (
          <Wrapper key={location.location_area.name}>
            <Data>{getIdOfPokeLocation(location)}</Data>
            <DataContent>{getNameOfPokeLocation(location)}</DataContent>
          </Wrapper>
        );
      })}
    </Container>
  );
}
