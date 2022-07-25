import { Poke } from '../../../@types/poke';
import { typeOfPokesIcons } from '../../../@types/typesOfPokes';
import PokeType from '../../../components/poke-types';
import {
  Container,
  Title,
  Wrapper,
  Data,
  DataContent,
  StatsBar,
  TypesWrapper,
} from './style';

type StatusProps = {
  poke: Poke;
  backgroundColor: string;
};

export default function Status({ poke, backgroundColor }: StatusProps) {
  const normalTypes = getNormalRelation(Object.keys(typeOfPokesIcons));

  function getNormalRelation(types: string[]) {
    poke.weakness.forEach(weak => {
      types.forEach(type => {
        if (type.toUpperCase().trim() === weak.name.toUpperCase().trim()) {
          types.splice(types.indexOf(type), 1);
        }
      });
    });
    poke.strongness.forEach(strong => {
      types.forEach(type => {
        if (type.toUpperCase().trim() === strong.name.toUpperCase().trim()) {
          types.splice(types.indexOf(type), 1);
        }
      });
    });
    return types;
  }

  return (
    <Container>
      <Title color={backgroundColor}>Base Stats</Title>
      <Wrapper>
        <Data>{poke.stats[0].stat.name}</Data>
        <DataContent>{poke.stats[0].base_stat}</DataContent>
        <StatsBar color={backgroundColor} range={poke.stats[0].base_stat} />
      </Wrapper>
      <Wrapper>
        <Data>{poke.stats[1].stat.name}</Data>
        <DataContent>{poke.stats[1].base_stat}</DataContent>
        <StatsBar color={backgroundColor} range={poke.stats[1].base_stat} />
      </Wrapper>
      <Wrapper>
        <Data>{poke.stats[2].stat.name}</Data>
        <DataContent>{poke.stats[2].base_stat}</DataContent>
        <StatsBar color={backgroundColor} range={poke.stats[2].base_stat} />
      </Wrapper>
      <Wrapper>
        <Data>{poke.stats[3].stat.name}</Data>
        <DataContent>{poke.stats[3].base_stat}</DataContent>
        <StatsBar color={backgroundColor} range={poke.stats[3].base_stat} />
      </Wrapper>
      <Wrapper>
        <Data>{poke.stats[4].stat.name}</Data>
        <DataContent>{poke.stats[4].base_stat}</DataContent>
        <StatsBar color={backgroundColor} range={poke.stats[4].base_stat} />
      </Wrapper>
      <Wrapper>
        <Data>{poke.stats[5].stat.name}</Data>
        <DataContent>{poke.stats[5].base_stat}</DataContent>
        <StatsBar color={backgroundColor} range={poke.stats[5].base_stat} />
      </Wrapper>
      <Title color={backgroundColor}>Double Damage From</Title>
      <TypesWrapper>
        {poke.weakness.map(weak => {
          return <PokeType key={weak.name} type={weak.name} />;
        })}
      </TypesWrapper>
      <Title color={backgroundColor}>Half Damage From</Title>
      <TypesWrapper>
        {poke.strongness.map(strong => {
          return <PokeType key={strong.name} type={strong.name} />;
        })}
      </TypesWrapper>
      <Title color={backgroundColor}>Normal Damage From</Title>
      <TypesWrapper>
        {normalTypes.map(type => {
          return <PokeType key={type} type={type} />;
        })}
      </TypesWrapper>
    </Container>
  );
}
