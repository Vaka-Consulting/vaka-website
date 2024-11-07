import { graphql } from "@/gql";

export const PAGE_QUERY = graphql(/* GraphQL */ `
  query PageQuery($id: ID!) {
    page(where: { id: $id }) {
      id
      title
    }
  }
`);
