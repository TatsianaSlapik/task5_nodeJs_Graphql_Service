import fetch from "node-fetch";

const genresResolvers = {
  Query: {
    genre: (obj, args, context, info) => {
      return fetch(`http://localhost:3001/v1/genres/${args.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    genres: (obj, args, context, info) => {
      return fetch(
        `http://localhost:3001/v1/genres?limit=${args.limit}&offset=${args.offset}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data.items;
        });
    },
  },
};
export default genresResolvers;
