import React from "react";
import "./App.css";
import Add from "./components/AddModal/AddModal";
import MovieList from './components/movie-list/movie-list'
export default function App() {
  return (
    <div className="App">
      <h1 className='demoFont'>welcome to justWatch</h1>
      <Add buttonLabel="Add Movie"/>
      <MovieList />
    </div>
  );
}
