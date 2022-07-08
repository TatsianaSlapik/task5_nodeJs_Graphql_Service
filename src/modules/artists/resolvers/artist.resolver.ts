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
  },
};
export default artistResolvers;
