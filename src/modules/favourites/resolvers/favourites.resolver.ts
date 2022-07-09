import fetch from "node-fetch";

const favouritesResolvers = {
  Query: {
    favourites: (obj, args, context, info) => {
      return fetch(`http://localhost:3007/v1/favourites/`, {
        headers: {
          Authorization: `Bearer ${context.req.headers.authorization}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
  },
};
export default favouritesResolvers;
