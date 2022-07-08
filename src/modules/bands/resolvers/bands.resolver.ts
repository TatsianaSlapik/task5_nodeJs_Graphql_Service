import fetch from "node-fetch";

const bandsResolvers = {
  Query: {
    band: (obj, args, context, info) => {
      return fetch(`http://localhost:3003/v1/bands/${args.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    bands: (obj, args, context, info) => {
      return fetch(
        `http://localhost:3003/v1/bands?limit=${args.limit}&offset=${args.offset}`
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
export default bandsResolvers;
