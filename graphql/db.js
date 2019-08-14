/* export const people = [
  { id: "0", name: "irayya mathad", age: 20, gender: "Male" },
  { id: "1", name: "irayya m", age: 90, gender: "Male" },
  { id: "2", name: "irayya math", age: 100, gender: "Male" },
  { id: "3", name: "irayya M", age: 400, gender: "Male" }
]; */

/* export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}; */

/* let movies = [
  { id: 0, name: "Movie1", score: 20 },
  { id: 1, name: "Movie1", score: 90 },
  { id: 2, name: "Movie1", score: 100 },
  { id: 3, name: "Movie1", score: 400 }
];
export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
 */
import fetch from "node-fetch";
const API_URL = "https://yst.am/api/v2/list_movies.json?";
export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  /*  return fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies); */
  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};
