import gql from "graphql-tag";

export default gql`
  mutation($input: ProcessTestResultInput!) {
    processTestResult(input: $input) {
      status
    }
  }
`;
