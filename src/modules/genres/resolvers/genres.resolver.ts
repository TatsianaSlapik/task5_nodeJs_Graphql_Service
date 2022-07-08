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
  },
};
export default genresResolvers;
