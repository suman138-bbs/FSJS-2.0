import React, { useState } from "react";
import './App.css'

function App() {
  const [searchText, setSearchtext] = useState("");
  const [movies, setMovies] = useState([]);

  async function getmovie() {
    const data = await fetch(
      `https://www.omdbapi.com/?s=${searchText}&apikey=5a7a5f14`
    );
    const json = await data.json();
    console.log(json.Search);
    setMovies(json.Search);
  }

  return (
    <>
      <div className="nav">
        <h1>Movie App</h1>
      </div>
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          width='20px'
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <button onClick={getmovie}>Search</button>
      </div>
  
      <div className="movielist">
        {movies.length > 0 ? (
        movies.map((m) => (
          <div key={m.imdbId}>
            <p>Name: {m.Title}</p>
            <div className="img"><img alt="image" src={ m.Poster }/></div>
            <p>Year of Release: {m.Year}</p>
          </div>
        ))
      ) : (
        <p>No movies to list...</p>
      )}
      </div>
    </>
  );
}

export default App;