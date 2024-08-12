import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology...",
      posterURl: "./inter.jpeg",
      rating: 9,
    },
    {
      id: 2,
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality...",
      posterUrl: "./matrix.jpeg",
      rating: 9,
    },
    {
        id: 3,
      title: "Eternal Sunshine of the Spotless Mind",
      description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories...",
      posterUrl: "./eternal.jpeg",
    },
    {
        id: 4,
      title: "The Dark Knight",
      description: "With the help of allies, Batman must fight against evil forces to save Gotham City from the brutal Joker...",
      posterUrl: "./darkknight.jpeg",
      rating: 9,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
