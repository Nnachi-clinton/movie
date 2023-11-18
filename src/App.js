import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//80ac0d1f
const API_URL = "https://www.omdbapi.com?apikey=80ac0d1f";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  Title: "Superman Returns",
  Type: "movie",
  Year: "2006",
  imdbID: "tt0348150",
};

const App = () => {
  const serchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    serchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={"Superman"}
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3> {movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
