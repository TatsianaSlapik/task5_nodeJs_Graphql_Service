import fetch from "node-fetch";

const tracksResolvers = {
  Query: {
    track: (obj, args, context, info) => {
      return fetch(`http://localhost:3006/v1/tracks/${args.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    tracks: (obj, args, context, info) => {
      return fetch(
        `http://localhost:3006/v1/tracks?limit=${args.limit}&offset=${args.offset}`
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
export default tracksResolvers;
