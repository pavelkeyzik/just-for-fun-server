const { ApolloServer } = require('apollo-server');
const { merge } = require('lodash');

const config = require('./config');
const { loadTypeSchema } = require('./utils/schema');
const place = require('./types/place/place.resolvers');

const types = ['place'];

async function start() {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `;
  const schemaTypes = await Promise.all(types.map(loadTypeSchema));

  const server = new ApolloServer({
    typeDefs: [rootSchema, ...schemaTypes],
    resolvers: merge({}, place),
  });

  server.listen({ port: config.port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

module.exports = {
  start,
};
