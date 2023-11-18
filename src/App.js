import React from "react";
import { useEffect } from "react";

//80ac0d1f
const API_URL = "https://www.omdbapi.com?apikey=80ac0d1f";

const App = () => {
  const serchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    serchMovies("superman");
  }, []);

  return <div>App</div>;
};

export default App;
