import { createContext, ReactNode, useContext, useState } from 'react';
import { Poke } from '../@types/poke';
import api from '../services';
import { pokeCardInfo } from '../@types/pokeCardInfo';

type PokeProviderProps = {
  children: ReactNode;
};

type PokeContextData = {
  getPoke: (offset: number) => Promise<pokeCardInfo[]>;
  getPokeDetail: (name: string) => Promise<Poke | null>;
};

export const PokeContext = createContext({} as PokeContextData);

function PokeProvider({ children }: PokeProviderProps) {
  const [poke, setPoke] = useState<pokeCardInfo[]>([]);

  async function getPoke(offset: number) {
    await api
      .get(`/${offset}/20`)
      .then(response => setPoke(response.data))
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(`Ops! ocorreu um erro!${err}`);
      });

    return poke;
  }

  async function getPokeDetail(name: string) {
    try {
      const pokeDetail = await api.get(`/${name}`);

      return pokeDetail.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('errouuuuuuuu');
      return null;
    }
  }

  return (
    <PokeContext.Provider value={{ getPoke, getPokeDetail }}>
      {children}
    </PokeContext.Provider>
  );
}

function usePoke() {
  const context = useContext(PokeContext);
  return context;
}

export { PokeProvider, usePoke };
