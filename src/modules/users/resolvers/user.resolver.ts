import fetch from "node-fetch";

const usersResolvers = {
  Query: {
    user: (obj, args, context, info) => {
      return fetch(`http://localhost:3004/v1/users/${args.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
    },
    jwt: (obj, args, context, info) => {
      return fetch(`http://localhost:3004/v1/users/login`, {
        body: JSON.stringify(args),
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
export default usersResolvers;
