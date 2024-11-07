import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProjects } from "@/requests";
import ProjectsListClient from "./projects-list-client";

export default async function ProjectsListServer() {
  const queryClient = new QueryClient();

  void queryClient.prefetchQuery({
    queryKey: ["projects-list"],
    queryFn: getProjects,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectsListClient />
    </HydrationBoundary>
  );
}
