// const Irayya = {
//   name: "irayya mathad",
//   age: 20,
//   gender: "Male"
// };

// import { people, getById } from "./db";

/* const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id)
  }
}; */

/* import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers; */

import { getMovies } from "./db";
const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating)
  }
};

export default resolvers;
