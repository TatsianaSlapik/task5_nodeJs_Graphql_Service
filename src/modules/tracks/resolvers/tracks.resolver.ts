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
  Mutation: {
    createTrack: (obj, args, context, info) => {
      return fetch(`http://localhost:3006/v1/tracks`, {
        method: "POST",
        body: JSON.stringify(args.newTrack),
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
    updateTrack: (obj, args, context, info) => {
      return fetch(`http://localhost:3006/v1/tracks/${args.id}`, {
        method: "PUT",
        body: JSON.stringify(args.newTrack),
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
    deleteTrack: (obj, args, context, info) => {
      return fetch(`http://localhost:3006/v1/tracks/${args.id}`, {
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
export default tracksResolvers;
