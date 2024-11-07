import request from "graphql-request";
import { PROJECTS_QUERY } from "@/queries";
import { GRAPHQL_API_ENDPOINT } from "@/constants";

export const getProjects = async () => {
  const response = request(GRAPHQL_API_ENDPOINT, PROJECTS_QUERY);
  console.log(response);

  return response;
};
