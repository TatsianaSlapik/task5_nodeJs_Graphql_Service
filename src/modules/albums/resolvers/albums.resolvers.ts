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
  Mutation: {
    createAlbum: (obj, args, context, info) => {
      return fetch(`http://localhost:3005/v1/albums`, {
        method: "POST",
        body: JSON.stringify(args.newAlbum),
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
    updateAlbum: (obj, args, context, info) => {
      return fetch(`http://localhost:3005/v1/albums/${args.id}`, {
        method: "PUT",
        body: JSON.stringify(args.newAlbum),
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
    deleteAlbum: (obj, args, context, info) => {
      return fetch(`http://localhost:3005/v1/albums/${args.id}`, {
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
export default albumsResolvers;
