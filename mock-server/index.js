const { ApolloServer } = require("apollo-server");

const fs = require("fs/promises");

const mocks = {
  Query: () => ({
    listPools: () => [
      {
        poolName: "Pool 1",
        tenant: "mock-tenant",
      },
      {
        poolName: "Pool 2",
        tenant: "mock-tenant",
      },
    ],
  }),
};

fs.readFile("./mock-server/schema.graphql", { encoding: "utf-8" }).then((data) => {
  const server = new ApolloServer({
    typeDefs: data,
    mocks,
  });
  server.listen().then(({ url }) => console.log(`Mock-Server running on ${url}`));
});
