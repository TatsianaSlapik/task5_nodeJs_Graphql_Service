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
  Mutation: {
    createArtist: (obj, args, context, info) => {
      return fetch(`http://localhost:3002/v1/artists`, {
        method: "POST",
        body: JSON.stringify(args.newArtist),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.req.headers.authorization}`,
        },
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    updateArtist: (obj, args, context, info) => {
      return fetch(`http://localhost:3002/v1/artists/${args.id}`, {
        method: "PUT",
        body: JSON.stringify(args.newArtist),
        headers: {
          "Content-Type": "application/json",
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
    deleteArtist: (obj, args, context, info) => {
      return fetch(`http://localhost:3002/v1/artists/${args.id}`, {
        method: "DELETE",
        body: JSON.stringify(args),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.req.headers.authorization}`,
        },
      })
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
