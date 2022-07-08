import fetch from "node-fetch";

const artistResolvers = {
  Query: {
    artist: (obj, args, context, info) => {
      return fetch(`http://localhost:3002/v1/artists/${args.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    artists: (obj, args, context, info) => {
      return fetch(
        `http://localhost:3002/v1/artists?limit=${args.limit}&offset=${args.offset}`
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
export default artistResolvers;
