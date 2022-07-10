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
  Mutation: {
    createBand: (obj, args, context, info) => {
      return fetch(`http://localhost:3003/v1/bands`, {
        method: "POST",
        body: JSON.stringify(args.newBand),
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
    updateBand: (obj, args, context, info) => {
      return fetch(`http://localhost:3003/v1/bands/${args.id}`, {
        method: "PUT",
        body: JSON.stringify(args.newBand),
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
    deleteBand: (obj, args, context, info) => {
      return fetch(`http://localhost:3003/v1/bands/${args.id}`, {
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
export default bandsResolvers;
