import { useState, useEffect, useRef } from "react";
import { fetchCharacters } from "./services/api";
import { useDebounce } from "./hooks/useDebounce";

import { Character } from "./components/Character/Character";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState([]);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleInputSearch = (event: any) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) return;

    fetchCharacters(debouncedSearchValue).then((charactersResult) => {
      setCharacters(charactersResult);
    });
  }, [debouncedSearchValue]);

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <input
          type="text"
          onChange={handleInputSearch}
          value={searchValue}
          placeholder="Start typing a character name"
        />
        <button onClick={() => fetchCharacters(searchValue)}>🔎</button>
      </header>

      <section className="characters-list">
        {!characters.length && <span>No results</span>}

        {characters?.length > 0 &&
          characters.map(({ image, name, location, species, status, id }) => (
            <Character
              key={id}
              image={image}
              name={name}
              location={location}
              species={species}
              status={status}
            />
          ))}
      </section>
    </>
  );
}

export default App;
