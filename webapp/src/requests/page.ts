import request from "graphql-request";
import { PAGE_QUERY } from "@/queries";
import { GRAPHQL_API_ENDPOINT } from "@/constants";

export const getHomePage = async () => {
  const response = await request(GRAPHQL_API_ENDPOINT, PAGE_QUERY, {
    id: "cm2cavyk3000014fiwim9kqtp",
  });

  return response;
};
