import React from "react";
import { atom, useAtom } from "jotai";

const POKEMON_DATA_URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

const PokemonListAtom = atom(async () =>
  fetch(POKEMON_DATA_URL).then((res) => res.json())
);
const filterAtom = atom("");
const filteredPokemonListAtom = atom((get) =>
  get(PokemonListAtom).filter((pokemon) =>
    pokemon.name.english.toLowerCase().includes(get(filterAtom).toLowerCase())
  )
);

const FilterInput = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  return (
    <input
      type="text"
      className="FilterInput"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

const PokemonTable = () => {
  const [filteredPokemonList] = useAtom(filteredPokemonListAtom);

  return (
    <table className="PokemonTable">
      <tbody>
        {filteredPokemonList.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const PokemonSearch = () => {
  return (
    <div className="Search">
      <FilterInput />

      <React.Suspense fallback={<div>Loading...</div>}>
        <PokemonTable />
      </React.Suspense>
    </div>
  );
};

export default PokemonSearch;
