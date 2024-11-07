import { graphql } from "@/gql";

export const PROJECTS_QUERY = graphql(/* GraphQL */ `
  query ProjectsQuery {
    projects(where: {}, orderBy: [], skip: 0) {
      id
      title
      subtitle
      shortDescription
      image {
        url
      }
      description {
        document
      }
      externalLink
    }
  }
`);
