import fetch from "node-fetch";

const albumsResolvers = {
  Query: {
    album: (obj, args, context, info) => {
      return fetch(`http://localhost:3005/v1/albums/${args.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    albums: (obj, args, context, info) => {
      return fetch(
        `http://localhost:3005/v1/albums?limit=${args.limit}&offset=${args.offset}`
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
export default albumsResolvers;
