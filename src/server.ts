import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import albumsResolvers from "./modules/albums/resolvers/albums.resolvers";
import usersResolvers from "./modules/users/resolvers/user.resolver";
import artistResolvers from "./modules/artists/resolvers/artist.resolver";
import bandsResolvers from "./modules/bands/resolvers/bands.resolver";
import genresResolvers from "./modules/genres/resolvers/genres.resolver";
import tracksResolvers from "./modules/tracks/resolvers/tracks.resolver";
import favouritesResolvers from "./modules/favourites/resolvers/favourites.resolver";

const schema = makeExecutableSchema({
  typeDefs: loadSchemaSync("./**/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: [
    usersResolvers,
    albumsResolvers,
    artistResolvers,
    bandsResolvers,
    tracksResolvers,
    genresResolvers,
    favouritesResolvers,
  ],
});

// Create an express server and a GraphQL endpoint
var app = express();
app.use(
  "/graphql",
  graphqlHTTP((req, res, graphQLParams) => {
    return {
      schema: schema,
      graphiql: true,
      context: {
        req: req,
      },
    };
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
