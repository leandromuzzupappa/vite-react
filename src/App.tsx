import { useState, useEffect, useRef, ChangeEvent } from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleInputSearch = (event: any) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const onApiCall = (query: string) => {
    console.log(`searching: ${query}`);
  };

  useEffect(() => {
    if (!searchValue) return;

    // Call a la api
    onApiCall(searchValue);
  }, [searchValue]);

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
        <button onClick={() => onApiCall(searchValue)}>🔎</button>
      </header>

      <section className="characters-list">
        <article className="character">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <h2>Rick Sanchez</h2>
          <div className="character-overlay">
            <h4>Location: Citadel of Ricks</h4>
            <h4>Specie: Human</h4>
            <h4>Status: Alive</h4>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
