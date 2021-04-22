import gql from "graphql-tag";

export default gql`
  query listPools {
    listPools {
      poolName
      tenant
    }
  }
`;
