import "./App.css";
import Counter from "./Counter";
import PokemonSearch from "./PokemonSearch";

function App() {
  return (
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
  );
}

export default App;
