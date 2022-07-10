import { Token } from "graphql";
import fetch from "node-fetch";

const genresResolvers = {
  Query: {
    genre: (obj, args, context, info) => {
      return fetch(`http://localhost:3001/v1/genres/${args.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    genres: (obj, args, context, info) => {
      return fetch(
        `http://localhost:3001/v1/genres?limit=${args.limit}&offset=${args.offset}`
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
    createGenre: (obj, args, context, info) => {
      console.log(context.req);
      return fetch(`http://localhost:3001/v1/genres`, {
        method: "POST",
        body: JSON.stringify(args.newGenre),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM4NTk1ZTkyYzYzZTI1MDYwNzk4ZDYiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6Im1ldDkxMjlAZ21haWwuY29tIiwiaWF0IjoxNjU3Mjk3MzU4fQ.x6j1aMaoVk_oklAtFWBaqqiScaPwQSavixLnE3tbeHE`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    updateGenre: (obj, args, context, info) => {
      return fetch(`http://localhost:3001/v1/genres/${args.id}`, {
        method: "PUT",
        body: JSON.stringify(args.newGenre),
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
    deleteGenre: (obj, args, context, info) => {
      return fetch(`http://localhost:3001/v1/genres/${args.id}`, {
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
export default genresResolvers;
