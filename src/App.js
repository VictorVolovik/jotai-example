import { Provider } from "jotai";
import "./App.css";
import Counter from "./Counter";
import PokemonSearch from "./PokemonSearch";
import { DebugAtoms, AtomsDevtools } from "./devTools";

function App() {
  return (
    <Provider>
      <DebugAtoms />

      <AtomsDevtools label="app">
        <div className="App">
          {/** counter example
           * from Introducing Jotai || React State Manager Tutorial
           * @see https://www.youtube.com/watch?v=-zIHq_69HjE
           */}

          <Counter />

          {/** pokemon search example
           * from State Management for React: Jotai From Beginners to Masters
           * @see https://www.youtube.com/watch?v=x9usS4l1VD0
           */}
          <PokemonSearch />
        </div>
      </AtomsDevtools>
    </Provider>
  );
}

export default App;
