import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import MovieCard from "../movie-card/movie-card";

export default function MovieList() {

const [listOfMovies, setlistOfMovies] = useState([]);
const [newSearch, setnewSearch] = useState("%20");
const [newSearchR, setnewSearchR] = useState(1);


function handleNewSearchChangeR(e) {
  e.preventDefault();
  setnewSearchR(e.target.value);
  console.log(newSearchR);
}

function handleNewSearchChange(e) {
  e.preventDefault();
  if (e.target.value !==''){
  setnewSearch(e.target.value);
}else {
  setnewSearch("%20");
}
}

useEffect(() => {
  axios.get(`https://mighty-stream-55581.herokuapp.com/api/movies/${newSearch}/${newSearchR}`).then((res) => {
      console.log(res);
      setlistOfMovies(res.data);
  });
}, [listOfMovies]);
  return (
    <div>
        <label>
          <h6>Search by Name :</h6>
        </label>
        <input type="text" onInput={handleNewSearchChange}/>
        <label>
          <h6>Search by Rating :</h6>
        </label>
        <select onInput={handleNewSearchChangeR}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      <div className="container">
        {listOfMovies.map((el) => (
          <MovieCard
            img={el.image}
            name={el.name}
            time={el.time}
            rate={el.rating}
          />
        ))}
      </div>
    </div>
  );
}
