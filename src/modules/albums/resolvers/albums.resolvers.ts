import fetch from "node-fetch";
const albumsResolvers = {
  Query: {
    album: (obj, args, context, info) => {
      return fetch(`http://localhost:3005/v1/albums/${args.id}`)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          return data;
        });
    },
  },
};
export default albumsResolvers;
